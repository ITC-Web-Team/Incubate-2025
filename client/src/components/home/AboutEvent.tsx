import { Link } from "wouter";

const AboutEvent = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">About the Event</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Incubate is a national-level MedTech Hackathon that provides an opportunity for medical and engineering students to collaborate on developing innovative solutions to real world problems.
          </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Get ready to experience the world of innovation where we expand the limits of healthcare solutions through cutting-edge technology.
            </p>
            {/* <a
            href="https://forms.gle/D66ghgRHrDEqv11p9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-md shadow-md transition duration-300"
            >
            Register Now
            </a> */}
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div className="w-14 h-14 bg-primary-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <i className="ri-team-line text-2xl text-primary dark:text-blue-400"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">Collaboration</h3>
            <p className="text-gray-600 dark:text-gray-400">Form a team of 2-4 with minimum one student from engineering and medical background each to solve real-world healthcare challenges.</p>
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
            <p className="text-gray-600 dark:text-gray-400">Get guidance from faculty mentors from JIPMER and IIT Bombay throughout the hackathon process.</p>
          </div>
        </div>

        {/* YouTube Video Section */}
        <div className="mt-16 md:mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 dark:text-white">Incubate Announcement Videos</h3>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 max-w-6xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 flex-1 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-xl">
              <iframe 
                className="w-full h-full min-h-[350px]"
                src="https://www.youtube.com/embed/YTUmorKDUoY?si=EuhZI2GV5vg307Gu"
                title="YouTube video player 1" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 flex-1 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-xl">
              <iframe 
                className="w-full h-full min-h-[350px]"
                src="https://www.youtube.com/embed/G0mi4WodTfk?si=I_bcg273m-EjJZSJ"
                title="YouTube video player 2" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutEvent;
