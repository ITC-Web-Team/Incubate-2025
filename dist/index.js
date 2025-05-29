// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  currentId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.currentId = 1;
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  team_name: text("team_name"),
  registration_type: text("registration_type").notNull(),
  // "team" or "individual"
  need_team_matching: boolean("need_team_matching"),
  theme_preference: text("theme_preference"),
  created_at: timestamp("created_at").defaultNow().notNull()
});
var insertRegistrationSchema = createInsertSchema(registrations).omit({
  id: true,
  created_at: true
});
var participants = pgTable("participants", {
  id: serial("id").primaryKey(),
  registration_id: integer("registration_id").notNull(),
  name: text("name").notNull(),
  college: text("college").notNull(),
  course: text("course").notNull(),
  year_of_study: text("year_of_study").notNull(),
  contact_number: text("contact_number").notNull(),
  email: text("email").notNull()
});
var insertParticipantSchema = createInsertSchema(participants).omit({
  id: true
});
var teamMemberSchema = z.object({
  name: z.string().min(2, "Name is required"),
  college: z.string().min(2, "College is required"),
  course: z.string().min(2, "Course is required"),
  year_of_study: z.string().min(1, "Year of study is required"),
  contact_number: z.string().min(10, "Valid contact number is required"),
  email: z.string().email("Valid email is required")
});
var teamRegistrationSchema = z.object({
  team_members: z.array(teamMemberSchema).min(2, "At least 2 team members are required").max(4, "Maximum 4 team members allowed")
});
var individualRegistrationSchema = teamMemberSchema.extend({
  need_team_matching: z.boolean(),
  theme_preference: z.string().optional()
});

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/register", async (req, res) => {
    try {
      const { registration_type } = req.body;
      if (registration_type === "team") {
        const validationResult = teamRegistrationSchema.safeParse(req.body);
        if (!validationResult.success) {
          return res.status(400).json({
            message: "Invalid registration data",
            errors: validationResult.error.format()
          });
        }
        const { team_members } = validationResult.data;
        const registration = await storage.createRegistration({
          registration_type: "team",
          need_team_matching: false,
          theme_preference: null
        });
        const participants2 = await Promise.all(
          team_members.map(
            (member) => storage.createParticipant({
              ...member,
              registration_id: registration.id
            })
          )
        );
        return res.status(201).json({
          message: "Team registration successful",
          registration_id: registration.id,
          participant_count: participants2.length
        });
      } else if (registration_type === "individual") {
        const validationResult = individualRegistrationSchema.safeParse(req.body);
        if (!validationResult.success) {
          return res.status(400).json({
            message: "Invalid registration data",
            errors: validationResult.error.format()
          });
        }
        const { need_team_matching, theme_preference, ...participantData } = validationResult.data;
        const registration = await storage.createRegistration({
          registration_type: "individual",
          need_team_matching,
          theme_preference: theme_preference || null
        });
        const participant = await storage.createParticipant({
          ...participantData,
          registration_id: registration.id
        });
        return res.status(201).json({
          message: "Individual registration successful",
          registration_id: registration.id
        });
      } else {
        return res.status(400).json({
          message: "Invalid registration type. Must be 'team' or 'individual'"
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      return res.status(500).json({
        message: "An error occurred during registration"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "client", "dist"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0"
  }, () => {
    log(`serving on port ${port}`);
  });
})();
