import { Link } from "wouter";

const AboutEvent = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">About the Event</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Incubate is a national-level MedTech Hackathon that provides an opportunity for Medical and Engineering students to collaborate on developing innovative real-world solutions to problems in the medical field.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Get ready to experience the world of innovation where we expand the limits of healthcare solutions through cutting-edge technology.
          </p>
          <Link 
            href="/register"
            className="inline-block bg-primary hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-md shadow-md transition duration-300"
          >
            Register Now
          </Link>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="w-14 h-14 bg-primary-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <i className="ri-team-line text-2xl text-primary dark:text-blue-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">Collaboration</h3>
            <p className="text-gray-600 dark:text-gray-400">Form a team of 2-4 with minimum one student from engineering and medical background to solve real-world healthcare challenges.</p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="w-14 h-14 bg-primary-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <i className="ri-lightbulb-line text-2xl text-primary dark:text-blue-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-400">Develop novel solutions that address key challenges in healthcare using technology and creative problem-solving.</p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="w-14 h-14 bg-primary-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <i className="ri-award-line text-2xl text-primary dark:text-blue-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">Mentorship</h3>
            <p className="text-gray-600 dark:text-gray-400">Get guidance from industry experts and faculty mentors from JIPMER and IIT Bombay throughout the hackathon process.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;
