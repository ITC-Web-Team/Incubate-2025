import { FC } from 'react';
import { FaAward, FaUsers, FaLightbulb, FaClipboardList, FaFlagCheckered, FaMedal } from 'react-icons/fa'; // Example icons

const FinalsPage: FC = () => {
  const finalsProcess = [
    { text: "There is no theme-wise quota for selection.", icon: <FaUsers className="text-primary dark:text-accent-dark text-2xl md:text-3xl" /> },
    { text: "A total of 15 teams will be selected for the finals.", icon: <FaClipboardList className="text-primary dark:text-accent-dark text-2xl md:text-3xl" /> },
    { text: "Alternate weekly mentoring by IIT Bombay and JIPMER faculty respectively.", icon: <FaLightbulb className="text-primary dark:text-accent-dark text-2xl md:text-3xl" /> },
    { text: "Building the working model.", icon: <FaUsers className="text-primary dark:text-accent-dark text-2xl md:text-3xl" /> },
    { text: "Finals at JIPMER on October 5th.", icon: <FaFlagCheckered className="text-primary dark:text-accent-dark text-2xl md:text-3xl" /> },
  ];

  const awards = [
    { title: "Certification of Participation", description: "To all participants (e-certificate).", icon: <FaMedal className="text-yellow-500 text-xl" /> },
    { title: "Finalists", description: "Cash prize along with finalist certificates and trophy.", icon: <FaAward className="text-blue-500 text-xl" /> },
    { title: "Winners (3 prizes in total)", description: "Cash prizes, etched custom medals, and assistance in patenting the technology.", icon: <FaAward className="text-green-500 text-xl" /> }, // Changed to FaAward as a fallback
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
          It is mandatory for at least 1 medical and 1 engineering student to be present for the offline phase.
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
