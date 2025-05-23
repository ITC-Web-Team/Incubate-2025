import FAQs from "@/components/faqs/FAQs";
import { useEffect } from "react";

export default function FAQsPage() {
  // Update page title on mount
  useEffect(() => {
    document.title = "FAQs | Incubate - MedTech Hackathon";
  }, []);
  
  return (
    <div className="py-12">
      <FAQs />
    </div>
  );
}
