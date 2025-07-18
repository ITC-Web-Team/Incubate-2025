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
      {/* Student Organising Committee Section */}
<div className="mt-20 max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg p-8">
  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center">
     Organising Committee
  </h2>
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">JIPMER UG Scientific and Research Club</h3>
    {/* Expandable JIPMER student list */}
    <details className="mb-4">
      <summary className="cursor-pointer text-md font-medium text-gray-700 dark:text-gray-200">Show JIPMER Student Organisers</summary>
      <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1">
        <li>Adhitya R</li>
        <li>Adhithyan</li>
        <li>Adhithyan</li>
        <li>Akash Gavicherla LVNMK</li>
        <li>Anish Sukumar Sudalaimuthu</li>
        <li>Bhargava Bhat</li>
        <li>Chinua K Pailoor</li>
        <li>Dinesh Karthik</li>
        <li>Gautam R</li>
        <li>GVSVS Shashank</li>
        <li>Jasil</li>
        <li>Kaviyarasu S</li>
        <li>K M Prithwinsiibi</li>
        <li>Manvanth Chandrashekar</li>
        <li>Nandan P</li>
        <li>Naven Kumar S</li>
        <li>Nehal H Prasanna</li>
        <li>Padala Suhaas</li>
        <li>Praneeth Roy</li>
        <li>Pratham Gogoi</li>
        <li>Sai Likith</li>
        <li>Samit Iyer</li>
        <li>Samrudh R</li>
        <li>Sam Shreyas Joseph</li>
        <li>Sanjana N S</li>
        <li>Sankhalp Sunod</li>
        <li>Sarvesh B</li>
        <li>Shahid Sayeed Iqbal</li>
        <li>Srijan M H</li>
        <li>Srujan Vipperla</li>
        <li>Tarunasri Paidi</li>
        <li>Vajrakant Miragi</li>
        <li>Viswajitt R P</li>
        <li>Zinan Tariang</li>
      </ul>
    </details>
  </div>
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">IIT Bombay Student Council Members</h3>
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
      <li>Gaurish Khodke</li>
      <li>Lakshaditya Singh</li>
      <li>Shahu Patil</li>
      <li>Veer</li>
    </ul>
  </div>
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Faculty Advisors</h3>
    <div className="mb-2">
      <span className="font-medium">JIPMER:</span>
      <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
        <li>Dr. Nishad Plakkal</li>
        <li>Dr. Prasanth Ganesan</li>
        <li>Dr. Subitha L</li>
      </ul>
    </div>
    <div>
      <span className="font-medium">IIT Bombay:</span>
      <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
        <li>Prof. Nivethida Thirugnanasambandam</li>
      </ul>
    </div>
  </div>
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Mentors</h3>
    <div className="mb-2">
      <span className="font-medium">JIPMER:</span>
      <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
        <li>Dr. Apurba Sastry</li>
        <li>Dr. Arpitha Anantharaju</li>
        <li>Dr. Bhagawati Prasad Pant</li>
        <li>Dr. Hariswar P T</li>
        <li>Dr. Karthikeyan M</li>
        <li>Dr. M. S. Gopalakrishnan</li>
        <li>Dr. Nishad Plakkal</li>
        <li>Dr. Sasirekha Rengaraj</li>
        <li>Dr. Shuvadeep Ganguly</li>
        <li>Dr. Sivamurukan Palanisamy</li>
        <li>Dr. Subitha L</li>
        <li>Dr. Swaminathan K</li>
        <li>Dr. Usha Devi R</li>
      </ul>
    </div>
    <div>
      <span className="font-medium">IIT Bombay:</span>
      <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
        <li>Prof. Ambarish Kunwar</li>
        <li>Prof. Kshitij Jadhav</li>
        <li>Prof. Laxmeesha Somappa</li>
        <li>Prof. Nirmal Punjabi</li>
      </ul>
    </div>
  </div>
  <div>
    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Operations and Outreach Advisors (KCDH, IIT Bombay)</h3>
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
      <li>Dr. Raghavendran Lakshminarayanan</li>
      <li>Shatakshi Saxena</li>
    </ul>
  </div>
</div>
    </section>

  );
};

export default AboutUs;
