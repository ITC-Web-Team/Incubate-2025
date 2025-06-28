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
                <p className="mb-3 text-gray-700 dark:text-gray-200">
                  Students currently pursuing any of the following degrees are eligible:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 pl-4">
                  <li>
                    <span className="font-semibold">Medical courses</span> – MBBS, BDS
                    <ul className="list-none pl-6">
                      <li className="flex items-start">
                        <i className="ri-arrow-right-s-line text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0"></i>
                        <span>Those pursuing CRRIs under MBBS/BDS are eligible</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-semibold">Engineering courses</span> – BTech, BE and equivalent degrees in any discipline of engineering
                  </li>
                  <li>
                    <span className="font-semibold">Science courses</span> – BSc, BSc Nursing, BPT, Integrated Masters upto 3rd year in any discipline of natural or life sciences
                    <ul className="list-none pl-6">
                      <li className="flex items-start">
                        <i className="ri-arrow-right-s-line text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0"></i>
                        <span>
                          Students pursuing these courses can only be supplementary team members in addition to the medical and engineering courses mentioned above
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Students studying in International institutes may participate, but it is mandated that at least 2 representatives, one each from engineering and medical, attend the Finals
                  </li>
                  <li>
                    <span className="font-semibold text-blue-700 dark:text-blue-300">
                      It is mandatory that 2 members of the team (the medical and engineering student) must attend the finals round to be held at JIPMER.
                    </span>
                  </li>
                </ul>
              </div>

                <div>
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-4">Team Structure</h3>
                
                {/* Team Composition Graphic */}
                
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 pl-4">
                  <li>Teams of 2-4</li>
                  <li>Minimum 1 medical student and 1 engineering student required in each team.</li>
                  <li>A team can comprise of members affiliated to different institutions.</li>
                  <li>Changes to team members are not permitted after registration.</li>
                  <li>A student can be part of only one team for the hackathon.</li>
                  <li>A team can submit multiple proposals but not more than one per theme.</li>
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
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">1 engineering Student</p>
                      <p className="text-xs text-red-500 dark:text-red-400 font-bold">(Compulsory)</p>
                    </div>
                    {/* Member 2 - MBBS */}
                    <div className="p-3 bg-white dark:bg-gray-700 rounded-md shadow-sm border border-gray-200 dark:border-gray-600">
                      <i className="ri-stethoscope-line text-3xl text-green-500 dark:text-green-400 mb-1"></i>
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">1 medical Student</p>
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
              <span>Team Registrations</span>
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-300 pl-4">
              <li>The registration fees for the team will be INR 250/- per person.</li>
              <li className="flex items-start">
                <i className="ri-arrow-right-s-line text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0"></i>
                <span>Only registered teams will be considered for shortlisting.</span>
              </li>
              <li>Participants can register for the InCubate MedTech Hackathon 2025 from June 25th through this website.</li>
              <li>The registration for the Hackathon is only complete after the participating team fills out and completes payment.</li>
              <li>Name of the team and the team members must be clearly specified as per College IDs or institution records.</li>
              <li>The registered team can choose any theme of their choice mentioned in the brochure and website.</li>
              <li>The registration fees will not be refunded under any circumstance.</li>
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
              <li>Individuals without a team may register by paying a non refundable amount of Rs.100.</li>
              <li>Registered individuals will be paired up based on our algorithm.</li>
              <li>The organisers cannot guarantee that all participants will find a teammate. The platform is only to facilitate team formation.</li>
              <li>Please note that the entry fee will not be refunded under any circumstances regardless of the outcome.</li>
              <li>Individual registrants are also free to find team members outside the platform.</li>
            </ul>
            </motion.section>
        </div>
      </div>
    </div>
  );
};

export default RegistrationDetailsPage;
