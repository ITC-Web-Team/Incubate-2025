// client/src/components/themes/FacultyMentorCard.tsx
import { FacultyMentor } from "@/data/facultyData";

interface FacultyMentorCardProps {
  mentor: FacultyMentor;
}

const FacultyMentorCard: React.FC<FacultyMentorCardProps> = ({ mentor }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col md:flex-row items-start p-6 md:p-8 space-y-6 md:space-y-0 md:space-x-8">
      <div className="flex-shrink-0 w-full md:w-1/3 text-center md:text-left">
        <img 
          src={mentor.image} 
          alt={mentor.name} 
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto md:mx-0 border-4 border-gray-200 dark:border-gray-700 shadow-md"
        />
        <h3 className="text-2xl font-bold mt-6 mb-1 text-gray-900 dark:text-white">{mentor.name}</h3>
        <p className="text-primary dark:text-blue-400 font-medium text-sm">{mentor.role}, {mentor.title}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{mentor.affiliation}</p>
        {mentor.contact && (
          <a 
            href={`mailto:${mentor.contact}`}
            className="inline-block mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-md"
          >
            <i className="ri-mail-line mr-1"></i> {mentor.contact}
          </a>
        )}
      </div>
      <div className="flex-grow md:w-2/3">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Research Focus</h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{mentor.researchFocus}</p>
        
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Research Area</h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">{mentor.researchArea}</p>
        
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Bio</h4>
        <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {mentor.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        {mentor.websiteUrl && (
          <a 
            href={mentor.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-sm font-medium text-white bg-primary hover:bg-primary-700 dark:bg-blue-600 dark:hover:bg-blue-700 px-4 py-2 rounded-md shadow-sm transition-colors"
          >
            Read More <i className="ri-arrow-right-line ml-1"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default FacultyMentorCard;
