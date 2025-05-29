import AboutUs from "@/components/about/AboutUs";
import { useEffect } from "react";

export default function AboutPage() {
  // Update page title on mount
  useEffect(() => {
    document.title = "About Us | Incubate - MedTech Hackathon";
  }, []);
  
  return (
    <div className="py-12">
      <AboutUs />
    </div>
  );
}
