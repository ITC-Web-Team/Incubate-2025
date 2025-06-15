import { useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion

const RegistrationDetailsPage = () => {
  useEffect(() => {
    document.title = "Registration Information | Incubate";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-12 md:py-20 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Registration Information
          </h1>
        </header>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* ELIGIBILITY Section */}
          <motion.section 
            className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="flex items-center text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b pb-3 border-gray-300 dark:border-gray-700">
              <i className="ri-shield-check-line mr-3 text-3xl"></i>
              <span>Eligibility</span>
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-3">Eligible Courses</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 pl-4">
                  <li>Medical Courses - MBBS, CRRIs (interns), BSc Nursing or allied health sciences</li>
                  <li>Engineering and sciences - BTech, BSc and equivalent undergraduate degrees in Sciences</li>
                  <li>Students studying in International institutes may participate, but it is mandated that at least 2 representatives, one each from BTech and MBBS attend the Finals</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-4">Team Structure</h3>
                
                {/* Team Composition Graphic */}
                

                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 pl-4">
                  <li>Teams of 2-4</li>
                  <li>Minimum 1 student from MBBS (including CRRI) and 1 student pursuing BTech.</li>
                  <li>Teammates 3 and 4 can belong to other courses or from the same background</li>
                  <li>A team can comprise members from different institutions.</li>
                  <li>Changes to team members are not permitted after registration.</li>
                  <li>A student can be part of only one team for the hackathon. However, the same team can submit multiple proposals from different themes.</li>
                </ul>
              </div>
              <motion.div 
                  className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700 shadow-sm"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <p className="text-sm text-center text-blue-700 dark:text-blue-300 mb-4 font-medium">Visual Guide: Building Your Team (2-4 Members)</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                    {/* Member 1 - B.Tech */}
                    <div className="p-3 bg-white dark:bg-gray-700 rounded-md shadow-sm border border-gray-200 dark:border-gray-600">
                      <i className="ri-user-settings-line text-3xl text-blue-500 dark:text-blue-400 mb-1"></i>
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">1 B.Tech Student</p>
                      <p className="text-xs text-red-500 dark:text-red-400 font-bold">(Compulsory)</p>
                    </div>
                    {/* Member 2 - MBBS */}
                    <div className="p-3 bg-white dark:bg-gray-700 rounded-md shadow-sm border border-gray-200 dark:border-gray-600">
                      <i className="ri-stethoscope-line text-3xl text-green-500 dark:text-green-400 mb-1"></i>
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">1 MBBS Student</p>
                      <p className="text-xs text-red-500 dark:text-red-400 font-bold">(Compulsory)</p>
                    </div>
                    {/* Member 3 - Any */}
                    <div className="p-3 bg-white dark:bg-gray-700 rounded-md shadow-sm border border-gray-200 dark:border-gray-600 opacity-80">
                      <i className="ri-user-smile-line text-3xl text-purple-500 dark:text-purple-400 mb-1"></i>
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Teammate 3</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">(Any Field)</p>
                    </div>
                    {/* Member 4 - Any */}
                    <div className="p-3 bg-white dark:bg-gray-700 rounded-md shadow-sm border border-gray-200 dark:border-gray-600 opacity-80">
                      <i className="ri-user-smile-line text-3xl text-yellow-500 dark:text-yellow-400 mb-1"></i>
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Teammate 4</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">(Any Field)</p>
                    </div>
                  </div>
                </motion.div>
            </div>
          </motion.section>
    
          {/* Registrations Section */}
          <motion.section 
            className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="flex items-center text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b pb-3 border-gray-300 dark:border-gray-700">
              <i className="ri-file-list-3-line mr-3 text-3xl"></i>
              <span>Registrations</span>
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-300 pl-4">
              <li>The registration fees for the team will be INR 250/- per person.</li>
              <li className="flex items-start">
                <i className="ri-arrow-right-s-line text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0"></i>
                <span>Only those who have registered will be eligible for the awards for finalists</span>
              </li>
              <li>Participants can register for the InCubate MedTech Hackathon 2025 on June 25th through this website.</li>
              <li>The registration for the Hackathon is only complete after the participating team fills out and completes payment.</li>
              <li>Name of the team and the teammates must be clearly specified as per College IDs or institution records.</li>
              <li>The registered team can choose any theme of their choice mentioned in the brochure and website.</li>
              <li>The fees will not be returned under any circumstance after registering for the event.</li>
            </ul>
          </motion.section>

          {/* Individual Registrations Section */}
          <motion.section 
            className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="flex items-center text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b pb-3 border-gray-300 dark:border-gray-700">
              <i className="ri-user-add-line mr-3 text-3xl"></i>
              <span>Individual Registrations</span>
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-300 pl-4">
              <li>You may register as an individual participant, by paying Rs. 250.</li>
              <li>You’ll gain access to a platform (DISCORD) with other solo participants from your theme.</li>
              <li>We cannot guarantee that you will find a team mate. We will only facilitate team formation. Please note that at no point will the entry fee be returned, regardless of the outcome.</li>
              <li>You may, at any point enroll anyone in your team who is not part of the platform provided by us.</li>
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default RegistrationDetailsPage;
