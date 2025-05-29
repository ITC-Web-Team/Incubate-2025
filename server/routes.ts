import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertRegistrationSchema, teamRegistrationSchema, individualRegistrationSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/register", async (req, res) => {
    try {
      const { registration_type } = req.body;
      
      if (registration_type === "team") {
        // Validate team registration data
        const validationResult = teamRegistrationSchema.safeParse(req.body);
        
        if (!validationResult.success) {
          return res.status(400).json({ 
            message: "Invalid registration data", 
            errors: validationResult.error.format() 
          });
        }

        const { team_members } = validationResult.data;
        
        // Create registration record
        const registration = await storage.createRegistration({
          registration_type: "team",
          need_team_matching: false,
          theme_preference: null,
        });
        
        // Create participant records for each team member
        const participants = await Promise.all(
          team_members.map(member => 
            storage.createParticipant({
              ...member,
              registration_id: registration.id
            })
          )
        );
        
        return res.status(201).json({ 
          message: "Team registration successful",
          registration_id: registration.id,
          participant_count: participants.length
        });
      } 
      else if (registration_type === "individual") {
        // Validate individual registration data
        const validationResult = individualRegistrationSchema.safeParse(req.body);
        
        if (!validationResult.success) {
          return res.status(400).json({ 
            message: "Invalid registration data", 
            errors: validationResult.error.format() 
          });
        }
        
        const { need_team_matching, theme_preference, ...participantData } = validationResult.data;
        
        // Create registration record
        const registration = await storage.createRegistration({
          registration_type: "individual",
          need_team_matching,
          theme_preference: theme_preference || null,
        });
        
        // Create participant record
        const participant = await storage.createParticipant({
          ...participantData,
          registration_id: registration.id
        });
        
        return res.status(201).json({ 
          message: "Individual registration successful",
          registration_id: registration.id
        });
      }
      else {
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

  const httpServer = createServer(app);
  return httpServer;
}
