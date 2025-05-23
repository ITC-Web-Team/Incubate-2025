import jipmerLogo from "@/assets/logos/jipmer-logo.png";
import iitbLogo from "@/assets/logos/iitb-logo.png";
import iitbLogoBlue from "@/assets/logos/iitb-logo-blue.png";

const Sponsors = () => {
  // Sponsor data with actual logos
  const sponsors = [
    { id: 1, name: "Incubate", logo: null },
    { id: 2, name: "JIPMER", logo: jipmerLogo },
    { id: 3, name: "IIT Bombay", logo: iitbLogoBlue },
    { id: 4, name: "KCDH", logo: null }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center dark:text-white">Our Sponsors</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {sponsors.map(sponsor => (
            <div 
              key={sponsor.id} 
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg w-40 h-20 flex items-center justify-center shadow hover:shadow-md transition duration-300"
            >
              {sponsor.logo ? (
                <img 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} logo`}
                  className="max-h-full max-w-full object-contain" 
                />
              ) : (
                <span className="text-gray-400 dark:text-gray-500 font-semibold">{sponsor.name}</span>
              )}
            </div>
          ))}
        </div>
        
        {/* Become a sponsor CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Interested in sponsoring Incubate?</p>
          <a 
            href="#" 
            className="inline-block bg-white dark:bg-gray-800 text-primary dark:text-blue-400 font-medium py-2 px-6 border border-primary dark:border-blue-400 rounded-md hover:bg-primary-50 dark:hover:bg-gray-700 transition duration-300"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
