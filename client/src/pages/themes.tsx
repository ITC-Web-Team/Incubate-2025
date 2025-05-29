import Themes from "@/components/themes/Themes";
import { useEffect } from "react";

export default function ThemesPage() {
  // Update page title on mount
  useEffect(() => {
    document.title = "Themes | Incubate - MedTech Hackathon";
  }, []);
  
  return (
    <div className="py-12">
      <Themes />
    </div>
  );
}
