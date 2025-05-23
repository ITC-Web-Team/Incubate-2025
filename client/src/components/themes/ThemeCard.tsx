interface ThemeCardProps {
  title: string;
  icon: string;
  color: string;
  description: string;
  mentors: string;
  outcomes: string;
}

const ThemeCard = ({
  title,
  icon,
  color,
  description,
  mentors,
  outcomes
}: ThemeCardProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className={`h-40 ${color} flex items-center justify-center`}>
        <i className={`${icon} text-6xl text-white`}></i>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 dark:text-white">{title}</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">Brief Description</h4>
            <p className="text-gray-700 dark:text-gray-400 text-sm">{description}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">Faculty Mentors</h4>
            <p className="text-gray-700 dark:text-gray-400 text-sm">{mentors}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">Expected Outcomes</h4>
            <p className="text-gray-700 dark:text-gray-400 text-sm">{outcomes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;
