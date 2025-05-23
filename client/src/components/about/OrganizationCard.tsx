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
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      {subtitle && (
        <h4 className="text-lg font-medium text-gray-700 mb-4">{subtitle}</h4>
      )}
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="flex items-center justify-between">
        {socialLinks && socialLinks.length > 0 && (
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                className="text-gray-600 hover:text-primary transition duration-300"
                aria-label={`Social link ${index + 1}`}
              >
                <i className={`${link.icon} text-2xl`}></i>
              </a>
            ))}
          </div>
        )}
        
        {contacts && contacts.length > 0 && (
          <div className="text-sm text-gray-600">
            {contacts.map((contact, index) => (
              <p key={index}>{contact}</p>
            ))}
          </div>
        )}
        
        {logo && (
          <div className="mt-auto">
            <div className="w-32 h-12 bg-gray-100 flex items-center justify-center rounded">
              <span className="text-gray-500 font-semibold">{logo}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrganizationCard;
