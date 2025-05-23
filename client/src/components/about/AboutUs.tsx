import OrganizationCard from "./OrganizationCard";
import { organizationsData } from "@/data/organizationsData";

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center dark:text-white">About Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* First row: JUSRC and JIPMER */}
          {organizationsData.slice(0, 2).map((org, index) => (
            <OrganizationCard 
              key={index}
              title={org.title}
              subtitle={org.subtitle}
              description={org.description}
              socialLinks={org.socialLinks}
              contacts={org.contacts}
              logo={org.logo}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Second row: IIT Bombay and KCDH */}
          {organizationsData.slice(2, 4).map((org, index) => (
            <OrganizationCard 
              key={index}
              title={org.title}
              subtitle={org.subtitle}
              description={org.description}
              socialLinks={org.socialLinks}
              contacts={org.contacts}
              logo={org.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
