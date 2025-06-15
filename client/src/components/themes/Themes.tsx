import ThemeCard from "./ThemeCard";
import { themesData } from "@/data/themesData";
import { iitBombayMentors } from "@/data/facultyData"; // Import IITB mentors
import FacultyMentorCard from "./FacultyMentorCard"; // Import the new card component

const Themes = () => {
  return (
    <section className="py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center dark:text-white">Our Themes</h2>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
            Faculty from JIPMER and IIT-B have co-curated these 10 themes based on scope for innovation, clinical relevance and ease of identification of problem statements.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <i className="ri-check-line text-primary dark:text-blue-400 mr-2 mt-1"></i>
                <span>You can submit 1 proposal per registration.</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-primary dark:text-blue-400 mr-2 mt-1"></i>
                <span>A team has to register again to be able to submit another proposal for a different theme.</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-primary dark:text-blue-400 mr-2 mt-1"></i>
                <span>You are eligible to qualify for the finals only for one proposal.</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-primary dark:text-blue-400 mr-2 mt-1"></i>
                <span>A team cannot submit more than one proposal for a given theme.</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-primary dark:text-blue-400 mr-2 mt-1"></i>
                <span>You can choose problem statements beyond the focus points. They stand the same chance of qualifying. Focus point are to aid those who may not be familiar with the themes.</span>
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
            />
          ))}
        </div>

        {/* IIT Bombay Faculty Mentors Section */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">IIT Bombay Faculty Mentors</h2>
          <div className="max-w-5xl mx-auto space-y-12">
            {iitBombayMentors.map((mentor, index) => (
              <FacultyMentorCard key={index} mentor={mentor} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Themes;
