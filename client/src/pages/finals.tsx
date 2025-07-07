import { FC } from 'react';
import { FaAward, FaUsers, FaLightbulb, FaClipboardList, FaFlagCheckered, FaMedal } from 'react-icons/fa'; // Example icons

const FinalsPage: FC = () => {
  const finalsProcess = [
    { text: "Upto 15 teams will be shortlisted for the finals.", icon: <FaUsers className="text-primary dark:text-accent-dark text-2xl md:text-3xl" /> },
    { text: "Shortlisting will be purely based on the merit of the proposal. There will not be a theme wise allocation.", icon: <FaClipboardList className="text-primary dark:text-accent-dark text-2xl md:text-3xl" /> },
    { text: "Shortlisted teams will be given approximately 6 weeks to develop a prototype/proof-of-concept/working model for presentation in the finals.", icon: <FaLightbulb className="text-primary dark:text-accent-dark text-2xl md:text-3xl" /> },
    { text: "Shortlisted teams will receive mentorship from JIPMER and IIT Bombay faculty.", icon: <FaUsers className="text-primary dark:text-accent-dark text-2xl md:text-3xl" /> },
    { text: "Finalists will present their proposals at JIPMER on October 5th.", icon: <FaFlagCheckered className="text-primary dark:text-accent-dark text-2xl md:text-3xl" /> },
  ];

  const awards = [
    { title: "Certification of Participation", description: "To all participants (e-certificate).", icon: <FaMedal className="text-yellow-500 text-xl" /> },
    { title: "1st Prize", description: "₹40,000 + medal + certificate", icon: <FaAward className="text-yellow-500 text-xl" /> },
    { title: "2nd Prize", description: "₹30,000 + medal + certificate", icon: <FaAward className="text-gray-500 text-xl" /> },
    { title: "3rd Prize", description: "₹20,000 + medal + certificate", icon: <FaAward className="text-orange-500 text-xl" /> },
    { title: "4th & 5th Prize", description: "₹15,000 each (inclusive of ₹7,500) + certificate", icon: <FaAward className="text-green-500 text-xl" /> },
    { title: "Finalists (Up to 15 teams)", description: "₹7,500 each + certificate", icon: <FaAward className="text-blue-500 text-xl" /> },
  ];


  return (
    <div className="container mx-auto px-4 py-8 md:py-12 text-foreground">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-primary dark:text-primary-dark drop-shadow-md">
        Finals and Awards
      </h1>

      {/* Finals Process Section */}
      <div className="bg-background-card dark:bg-gray-800 shadow-2xl rounded-xl p-6 md:p-10 mb-10 md:mb-12 transition-shadow duration-300 hover:shadow-lg">
        <h2 className="text-3xl font-semibold text-secondary dark:text-secondary-dark mb-8 text-center">Finals Process</h2>
        <div className="space-y-6">
          {finalsProcess.map((item, index) => (
            <div key={index} className="flow-item flex items-center space-x-4 p-4 bg-background-alt dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-accent/10 dark:bg-accent-dark/20">
                {item.icon || <span className="text-2xl text-accent dark:text-accent-dark">&#10148;</span>}
              </div>
              <p className="text-lg md:text-xl text-foreground dark:text-gray-200">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-md text-gray-600 dark:text-gray-400 italic text-center">
          Further details will be released soon.
        </p>
        <p className="mt-4 text-md text-red-500 dark:text-red-400 font-semibold text-center p-3 bg-red-500/10 dark:bg-red-400/10 rounded-md">
          It is mandatory for at least 1 medical and 1 engineering studentin every team to be present for the offline phase.
        </p>
      </div>

      {/* Awards & Recognition Section */}
      <div className="bg-background-card dark:bg-gray-800 shadow-2xl rounded-xl p-6 md:p-10 transition-shadow duration-300 hover:shadow-lg">
        <h2 className="text-3xl font-semibold text-secondary dark:text-secondary-dark mb-8 text-center">Awards & Recognition</h2>
        <ul className="space-y-5">
          {awards.map((award, index) => (
            <li key={index} className="flex items-start space-x-4 p-4 bg-background-alt dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex-shrink-0 pt-1">
                 {award.icon || <FaAward className="text-accent dark:text-accent-dark text-xl" />}
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl text-primary dark:text-primary-dark">{award.title}:</h3>
                <p className="text-foreground dark:text-gray-300">{award.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FinalsPage;
