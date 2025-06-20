import ThemeCard from "./ThemeCard";
import { themesData, jipmerMentors } from "@/data/themesData";
import { iitBombayMentors } from "@/data/facultyData";
import FacultyMentorCard from "./FacultyMentorCard";
import jipmerLogo from "@/assets/jipmer-logo.png";
import iitbLogo from "@/assets/iitb-logo.png";

const Themes = () => {
  return (
    <section className="py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center dark:text-white">Our Themes</h2>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
            Faculty from JIPMER and IIT-Bombay have co-curated these 10 themes based on scope for innovation, clinical relevance and ease of identification of problem statements.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <i className="ri-check-line text-primary dark:text-blue-400 mr-2 mt-1"></i>
                <span> Teams are allowed to submit multiple proposals. However, each proposal requires separate registration and is limited to one submission per theme.</span>
              </li>
              {/* <li className="flex items-start">
                <i className="ri-check-line text-primary dark:text-blue-400 mr-2 mt-1"></i>
                <span>A team has to register again to be able to submit another proposal for a different theme.</span>
              </li> */}
              <li className="flex items-start">
                <i className="ri-check-line text-primary dark:text-blue-400 mr-2 mt-1"></i>
                <span>A team will not be shortlisted for more than one proposal</span>
              </li>
              {/* <li className="flex items-start">
                <i className="ri-check-line text-primary dark:text-blue-400 mr-2 mt-1"></i>
                <span>A team cannot submit more than one proposal for a given theme.</span>
              </li> */}
              <li className="flex items-start">
                <i className="ri-check-line text-primary dark:text-blue-400 mr-2 mt-1"></i>
                <span> A team may choose beyond the focus areas mentioned in the theme descriptions. The focus areas are outlined in the theme descriptions and are intended to assist those unfamiliar with the themes.</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Add instructional text here */}
        <p className="text-center text-md text-gray-600 dark:text-gray-400 mb-8">
          Click on any theme card to explore more details.
        </p>

        {/* Theme cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themesData.map((theme, index) => (
            <ThemeCard 
              key={index}
              title={theme.title}
              icon={theme.icon}
              color={theme.color}
              description={theme.description}
              slug={theme.slug}
              clickable={true}
              videoId={theme.videoId}

            />
          ))}
        </div>

        {/* Faculty Mentors Section with JIPMER and IIT Bombay Logos and Cards (stacked vertically, heading right of logo) */}
        <div className="mt-16 md:mt-24">
          {/* JIPMER Icon & Label Row */}
          <div className="flex items-center justify-center mb-8">
            <img src={jipmerLogo} alt="JIPMER Logo" className="w-20 h-20 mr-4" />
            <span className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-300">JIPMER Faculty Mentors</span>
          </div>
          <div className="max-w-5xl mx-auto mb-16">
            <div className="space-y-8">
              {jipmerMentors.map((mentor, idx) => (
                <FacultyMentorCard key={idx} mentor={mentor} />
              ))}
            </div>
          </div>
          {/* IIT Bombay Icon & Label Row */}
            <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mr-4 shadow">
              <img src={iitbLogo} alt="IIT Bombay Logo" className="w-16 h-16 object-contain rounded-full" />
            </div>
            <span className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-300">IIT Bombay Faculty Mentors</span>
            </div>
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {iitBombayMentors.map((mentor, idx) => (
                <FacultyMentorCard key={idx} mentor={mentor} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Themes;
