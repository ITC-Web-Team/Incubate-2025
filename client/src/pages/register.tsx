import RegistrationForm from "@/components/register/RegistrationForm";
import { useEffect } from "react";

export default function RegisterPage() {
  // Update page title on mount
  useEffect(() => {
    document.title = "Register | Incubate - MedTech Hackathon";
  }, []);
  
  return (
    <div className="py-12">
      <RegistrationForm />
    </div>
  );
}
