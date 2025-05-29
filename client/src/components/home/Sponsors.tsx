import { motion } from "framer-motion";
import jipmerLogo from "@/assets/logos/jipmer-logo.png";
import iitbLogo from "@/assets/logos/iitb-logo.png";
import iitbLogoBlue from "@/assets/logos/iitb-logo-blue.png";

const Sponsors = () => {
  // Sponsor data with actual logos
  const sponsors = [
    { id: 1, name: "Incubate", logo: null, delay: 0 },
    { id: 2, name: "JIPMER", logo: jipmerLogo, delay: 0.1 },
    { id: 3, name: "IIT Bombay", logo: iitbLogoBlue, delay: 0.2 },
    { id: 4, name: "KCDH", logo: null, delay: 0.3 }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 digital-noise relative overflow-hidden">
      {/* Circuit background elements */}
      <div className="absolute inset-0 w-full h-full opacity-10">
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
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-glow dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Partners
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {sponsors.map(sponsor => (
            <motion.div 
              key={sponsor.id} 
              className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 p-6 rounded-xl w-44 h-28 flex items-center justify-center shadow-lg hover:shadow-glow border border-blue-200 dark:border-blue-900 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)"
              }}
              transition={{ 
                delay: sponsor.delay,
                duration: 0.5,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
            >
              {/* Scanner effect line */}
              <div className="absolute inset-0 scanner-line"></div>
              
              {/* Digital noise effect */}
              <div className="absolute inset-0 digital-noise"></div>
              
              {sponsor.logo ? (
                <img 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} logo`}
                  className="max-h-16 max-w-full object-contain relative z-10" 
                />
              ) : (
                <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 relative z-10">{sponsor.name}</span>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Become a sponsor CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Interested in partnering with Incubate?</p>
          <a 
            href="#" 
            className="inline-block relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative inline-block py-3 px-8 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 shadow-lg z-10">
              Become a Partner
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
