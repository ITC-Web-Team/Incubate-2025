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
  logo?: string;
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
      className="hover:shadow-glow backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-xl p-8 border border-blue-200 dark:border-blue-800 shadow-lg relative overflow-hidden scanner-line"
      whileHover={{ 
        y: -5 
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Digital noise effect */}
      <div className="absolute inset-0 digital-noise"></div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">{title}</h3>
        
        {subtitle && (
          <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">{subtitle}</h4>
        )}
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
        
        <div className="flex items-center justify-between flex-wrap">
          {socialLinks && socialLinks.length > 0 && (
            <div className="flex space-x-4 mb-3">
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
                  <i className={`${link.icon} text-2xl`}></i>
                </motion.a>
              ))}
            </div>
          )}
          
          {contacts && contacts.length > 0 && (
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {contacts.map((contact, index) => (
                <p key={index} className="mb-1">{contact}</p>
              ))}
            </div>
          )}
          
          {logo && (
            <div className="mb-3 mt-auto">
              <motion.div 
                className="w-32 h-12 hexagon bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center rounded overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-white font-semibold">{logo}</span>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default OrganizationCard;
