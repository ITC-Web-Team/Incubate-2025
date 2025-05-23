import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { teamRegistrationSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import TeamMemberForm from "./TeamMemberForm";
import IndividualForm from "./IndividualForm";

type RegistrationType = "team" | "individual";

// Create a type specifically for the form data structure
type TeamMember = {
  name: string;
  college: string;
  course: string;
  year_of_study: string;
  contact_number: string;
  email: string;
};

type TeamRegistrationValues = {
  team_members: TeamMember[];
};

const RegistrationForm = () => {
  const [registrationType, setRegistrationType] = useState<RegistrationType>("team");
  const [teamMemberCount, setTeamMemberCount] = useState<number>(2);
  const { toast } = useToast();

  // Form setup for team registration
  const teamMethods = useForm<TeamRegistrationValues>({
    resolver: zodResolver(teamRegistrationSchema),
    defaultValues: {
      team_members: [
        { name: "", college: "", course: "", year_of_study: "", contact_number: "", email: "" },
        { name: "", college: "", course: "", year_of_study: "", contact_number: "", email: "" }
      ]
    },
    mode: "onChange"
  });

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest("POST", "/api/register", {
        ...data,
        registration_type: registrationType,
      });
    },
    onSuccess: async () => {
      toast({
        title: "Registration successful",
        description: "Thank you for registering! Payment details will be sent to your email.",
        variant: "default",
      });
      
      // Reset form
      if (registrationType === "team") {
        teamMethods.reset();
      }
    },
    onError: (error: any) => {
      toast({
        title: "Registration failed",
        description: error.message || "There was an error with your registration. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleTeamSubmit = teamMethods.handleSubmit((data) => {
    registerMutation.mutate(data);
  });

  const addTeamMember = () => {
    if (teamMemberCount < 4) {
      setTeamMemberCount(prev => prev + 1);
      
      // Add a new empty team member to the form
      const currentMembers = teamMethods.getValues("team_members");
      teamMethods.setValue("team_members", [
        ...currentMembers,
        { name: "", college: "", course: "", year_of_study: "", contact_number: "", email: "" }
      ]);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Register Now</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {/* Registration Type Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Have a team already?</h3>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="team-yes" 
                    name="has-team" 
                    value="yes"
                    checked={registrationType === "team"}
                    onChange={() => setRegistrationType("team")}
                    className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="team-yes" className="ml-2 text-gray-700">Yes</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="team-no" 
                    name="has-team" 
                    value="no"
                    checked={registrationType === "individual"}
                    onChange={() => setRegistrationType("individual")}
                    className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="team-no" className="ml-2 text-gray-700">No</label>
                </div>
              </div>
            </div>
            
            {/* Team Registration Form */}
            {registrationType === "team" && (
              <FormProvider {...teamMethods}>
                <form onSubmit={handleTeamSubmit} className="mb-8">
                  {Array.from({ length: teamMemberCount }).map((_, index) => (
                    <TeamMemberForm key={index} index={index} />
                  ))}
                  
                  {/* Add more members buttons */}
                  <div className="flex justify-between mb-8">
                    <button 
                      type="button" 
                      onClick={addTeamMember}
                      disabled={teamMemberCount >= 4}
                      className="flex items-center text-primary font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <i className="ri-add-circle-line mr-1"></i> Add more team members
                    </button>
                    <span className="text-sm text-gray-500">{teamMemberCount} of 4 members added</span>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="text-center">
                    <button 
                      type="submit" 
                      className="bg-primary hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 disabled:opacity-70"
                      disabled={registerMutation.isPending}
                    >
                      {registerMutation.isPending ? "Submitting..." : "Submit Registration"}
                    </button>
                    <p className="text-sm text-gray-500 mt-4">
                      Registration fee: ₹250 per person. Payment details will be shared after form submission.
                    </p>
                  </div>
                </form>
              </FormProvider>
            )}
            
            {/* Individual Registration Form */}
            {registrationType === "individual" && (
              <IndividualForm onSubmitSuccess={() => {
                toast({
                  title: "Registration successful",
                  description: "Thank you for registering! Payment details will be sent to your email.",
                  variant: "default",
                });
              }} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
