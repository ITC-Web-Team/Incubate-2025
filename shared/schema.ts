import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  team_name: text("team_name"),
  registration_type: text("registration_type").notNull(), // "team" or "individual"
  need_team_matching: boolean("need_team_matching"),
  theme_preference: text("theme_preference"),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

export const insertRegistrationSchema = createInsertSchema(registrations).omit({
  id: true,
  created_at: true,
});

export const participants = pgTable("participants", {
  id: serial("id").primaryKey(),
  registration_id: integer("registration_id").notNull(),
  name: text("name").notNull(),
  college: text("college").notNull(),
  course: text("course").notNull(),
  year_of_study: text("year_of_study").notNull(),
  contact_number: text("contact_number").notNull(),
  email: text("email").notNull(),
});

export const insertParticipantSchema = createInsertSchema(participants).omit({
  id: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Registration = typeof registrations.$inferSelect;
export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;

export type Participant = typeof participants.$inferSelect;
export type InsertParticipant = z.infer<typeof insertParticipantSchema>;

// Extended Schema for Form Validation
export const teamMemberSchema = z.object({
  name: z.string().min(2, "Name is required"),
  college: z.string().min(2, "College is required"),
  course: z.string().min(2, "Course is required"),
  year_of_study: z.string().min(1, "Year of study is required"),
  contact_number: z.string().min(10, "Valid contact number is required"),
  email: z.string().email("Valid email is required"),
});

export const teamRegistrationSchema = z.object({
  team_members: z.array(teamMemberSchema).min(2, "At least 2 team members are required").max(4, "Maximum 4 team members allowed"),
});

export const individualRegistrationSchema = teamMemberSchema.extend({
  need_team_matching: z.boolean(),
  theme_preference: z.string().optional(),
});
