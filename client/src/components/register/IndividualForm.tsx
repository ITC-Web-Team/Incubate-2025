import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { individualRegistrationSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface IndividualFormProps {
  onSubmitSuccess: () => void;
}

// Define the form values type based on the schema
type IndividualRegistrationValues = {
  name: string;
  college: string;
  course: string;
  year_of_study: string;
  contact_number: string;
  email: string;
  need_team_matching: boolean;
  theme_preference: string;
};

const themeOptions = [
  { value: "none", label: "No Preference" },
  { value: "theme1", label: "Theme 1: Medical Diagnostics" },
  { value: "theme2", label: "Theme 2: Remote Healthcare" },
  { value: "theme3", label: "Theme 3: Surgical Innovations" },
  { value: "theme4", label: "Theme 4: Patient Monitoring" },
  { value: "theme5", label: "Theme 5: Medical Education" }
];

const IndividualForm = ({ onSubmitSuccess }: IndividualFormProps) => {
  const [needTeamMatching, setNeedTeamMatching] = useState(true);
  const { toast } = useToast();

  // Setup form
  const form = useForm<IndividualRegistrationValues>({
    resolver: zodResolver(individualRegistrationSchema),
    defaultValues: {
      name: "",
      college: "",
      course: "",
      year_of_study: "",
      contact_number: "",
      email: "",
      need_team_matching: true,
      theme_preference: "none"
    }
  });

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: async (data: IndividualRegistrationValues) => {
      return apiRequest("POST", "/api/register", {
        ...data,
        registration_type: "individual",
      });
    },
    onSuccess: async () => {
      form.reset();
      onSubmitSuccess();
    },
    onError: (error: any) => {
      toast({
        title: "Registration failed",
        description: error.message || "There was an error with your registration. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: IndividualRegistrationValues) => {
    registerMutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-8">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Do you want us to help match you with a team?</h3>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input 
                type="radio" 
                id="match-yes" 
                name="match-team" 
                checked={needTeamMatching}
                onChange={() => {
                  setNeedTeamMatching(true);
                  form.setValue("need_team_matching", true);
                }}
                className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="match-yes" className="ml-2 text-gray-700">Yes</label>
            </div>
            <div className="flex items-center">
              <input 
                type="radio" 
                id="match-no" 
                name="match-team" 
                checked={!needTeamMatching}
                onChange={() => {
                  setNeedTeamMatching(false);
                  form.setValue("need_team_matching", false);
                }}
                className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="match-no" className="ml-2 text-gray-700">No</label>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 mb-1">Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="college"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 mb-1">College</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 mb-1">Course</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="year_of_study"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 mb-1">Year of Study</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contact_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 mb-1">Contact Number</FormLabel>
                  <FormControl>
                    <Input {...field} type="tel" className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 mb-1">Email ID</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          {needTeamMatching && (
            <div className="mt-6">
              <FormField
                control={form.control}
                name="theme_preference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 mb-1">Theme Preference</FormLabel>
                    <Select 
                      defaultValue={field.value} 
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a theme preference" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {themeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
        </div>
        
        {/* Submit Button */}
        <div className="text-center mt-8">
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
    </Form>
  );
};

export default IndividualForm;
