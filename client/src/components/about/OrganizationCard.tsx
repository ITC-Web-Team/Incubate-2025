import { motion } from "framer-motion";

interface SocialLink {
  icon: string;
  url: string;
}

interface OrganizationCardProps {
  title: string;
  subtitle?: string;
  description: string;
  socialLinks?: SocialLink[];
  contacts?: string[];
  logo?: string; // Path to the logo image
}

const OrganizationCard = ({
  title,
  subtitle,
  description,
  socialLinks,
  contacts,
  logo
}: OrganizationCardProps) => {
  return (
    <motion.div 
      className="hover:shadow-glow backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 md:p-8 border border-blue-200 dark:border-blue-800 shadow-lg relative overflow-hidden scanner-line flex flex-col h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Digital noise effect */}
      <div className="absolute inset-0 digital-noise opacity-50"></div>
      
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="flex items-start mb-4">
          {logo && (
            <motion.div 
              className="w-16 h-16 md:w-20 md:h-20 p-1 bg-white rounded-md shadow-md mr-4 flex items-center justify-center" // Added bg-white and padding
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <img 
                src={logo} 
                alt={`${title} logo`} 
                className="max-w-full max-h-full object-contain" // Ensure image fits within the white box
              />
            </motion.div>
          )}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">{title}</h3>
            {subtitle && (
              <h4 className="text-md md:text-lg font-medium text-gray-700 dark:text-gray-300">{subtitle}</h4>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm md:text-base flex-grow">{description}</p>
        
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between flex-wrap gap-y-3">
            {socialLinks && socialLinks.length > 0 && (
              <div className="flex space-x-3 md:space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    key={index}
                    href={link.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-300"
                    aria-label={`Social link ${index + 1}`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className={`${link.icon} text-xl md:text-2xl`}></i>
                  </motion.a>
                ))}
              </div>
            )}
            
            {contacts && contacts.length > 0 && (
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                {contacts.map((contact, index) => (
                  <p key={index} className="mb-1">{contact}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OrganizationCard;
