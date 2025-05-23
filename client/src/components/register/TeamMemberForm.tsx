import { useFormContext } from "react-hook-form";
import { 
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface TeamMemberFormProps {
  index: number;
}

const TeamMemberForm = ({ index }: TeamMemberFormProps) => {
  const { control, formState: { errors } } = useFormContext();
  
  // Access the nested errors for this specific team member
  const memberErrors = errors.team_members?.[index];

  return (
    <div className="mb-8 p-6 bg-gray-50 rounded-lg">
      <h4 className="text-lg font-semibold mb-4">Team Member {index + 1}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={control}
          name={`team_members.${index}.name`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700 mb-1">Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name={`team_members.${index}.college`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700 mb-1">College</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name={`team_members.${index}.course`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700 mb-1">Course</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name={`team_members.${index}.year_of_study`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700 mb-1">Year of Study</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name={`team_members.${index}.contact_number`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700 mb-1">Contact Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="tel"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name={`team_members.${index}.email`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700 mb-1">Email ID</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default TeamMemberForm;
