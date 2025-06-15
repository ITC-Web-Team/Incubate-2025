import { motion } from "framer-motion";
import OrganizationCard from "./OrganizationCard";
import { organizationsData } from "@/data/organizationsData";

const AboutUs = () => {
  // Define the organizations for the second row
  const secondRowOrgs = [organizationsData[4], organizationsData[3]]; // KCDH, ITC

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 digital-noise relative overflow-hidden">
      {/* Circuit background elements */}
      <div className="absolute inset-0 w-full h-full opacity-10 -z-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M25,0 C25,50 75,50 75,100" stroke="#4f46e5" strokeWidth="0.2" fill="none" />
          <path d="M0,25 C50,25 50,75 100,75" stroke="#4f46e5" strokeWidth="0.2" fill="none" />
          <path d="M10,10 Q50,0 90,10" stroke="#4f46e5" strokeWidth="0.2" fill="none" strokeDasharray="0.5,1" />
          <path d="M10,90 Q50,100 90,90" stroke="#4f46e5" strokeWidth="0.2" fill="none" strokeDasharray="0.5,1" />
          
          {/* Circles */}
          <circle cx="50" cy="50" r="30" stroke="#4f46e5" strokeWidth="0.1" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="#4f46e5" strokeWidth="0.1" fill="none" />
          <circle cx="50" cy="50" r="10" stroke="#4f46e5" strokeWidth="0.1" fill="none" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center dark:text-white text-glow"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* First row: JIPMER and IIT Bombay */}
          {organizationsData.slice(0, 2).map((org, index) => (
            <motion.div
              key={org.title} // Use a unique key like title
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <OrganizationCard 
                title={org.title}
                subtitle={org.subtitle}
                description={org.description}
                socialLinks={org.socialLinks}
                contacts={org.contacts}
                logo={org.logo}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Second row: KCDH and Institute Technical Council (ITC) */}
          {secondRowOrgs.map((org, index) => (
            <motion.div
              key={org.title} // Use a unique key like title
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }} // Animation delay starts after first row
              viewport={{ once: true }}
            >
              <OrganizationCard 
                title={org.title}
                subtitle={org.subtitle}
                description={org.description}
                socialLinks={org.socialLinks}
                contacts={org.contacts}
                logo={org.logo}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:w-1/2 mx-auto">
          {/* Third row: JUSRC */}
          {/* organizationsData[2] is JUSRC */}
          <motion.div
            key={organizationsData[2].title} // Use a unique key
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }} // Animation delay after second row
            viewport={{ once: true }}
            className="md:col-span-2" // Make it span full width in its grid context
          >
            <OrganizationCard 
              title={organizationsData[2].title}
              subtitle={organizationsData[2].subtitle}
              description={organizationsData[2].description}
              socialLinks={organizationsData[2].socialLinks}
              contacts={organizationsData[2].contacts}
              logo={organizationsData[2].logo}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
