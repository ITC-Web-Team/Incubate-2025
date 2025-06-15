
import { useEffect } from 'react';

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
          <section className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b pb-3 border-gray-300 dark:border-gray-700">
              Eligibility
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
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-3">Team Structure</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 pl-4">
                  <li>Teams of 2-4</li>
                  <li>Minimum 1 student from MBBS (including CRRI) and 1 student pursuing BTech.</li>
                  <li>Teammates 3 and 4 can belong to other courses or from the same background</li>
                  <li>A team can comprise members from different institutions.</li>
                  <li>Changes to team members are not permitted after registration.</li>
                  <li>A student can be part of only one team for the hackathon. However, the same team can submit multiple proposals from different themes.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Registrations Section */}
          <section className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b pb-3 border-gray-300 dark:border-gray-700">
              Registrations
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-300 pl-4">
              <li>The registration fees for the team will be INR 250/- per person.</li>
              <li className="flex items-start">
                <i className="ri-arrow-right-s-line text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0"></i>
                <span>Only those who have registered will be eligible for the perks and awards for finalists</span>
              </li>
              <li>Participants can register for the InCubate MedTech Hackathon 2025 on June 25th through this website.</li>
              <li>The registration for the Hackathon is only complete after the participating team fills out and completes payment.</li>
              <li>Name of the team and the teammates must be clearly specified as per College IDs or institution records.</li>
              <li>The registered team can choose any theme of their choice mentioned in the brochure and website.</li>
              <li>The fees will not be returned under any circumstance after registering for the event.</li>
            </ul>
          </section>

          {/* Individual Registrations Section */}
          <section className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b pb-3 border-gray-300 dark:border-gray-700">
              Individual Registrations
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-300 pl-4">
              <li>You may register as an individual participant, by paying Rs. 250.</li>
              <li>You’ll gain access to a platform (discord) with other solo participants from your theme.</li>
              <li>We cannot guarantee that you will find a team mate. We will only facilitate team formation. Please note that at no point will the entry fee be returned, regardless of the outcome.</li>
              <li>You may, at any point enroll anyone in your team who is not part of the platform provided by us.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RegistrationDetailsPage;
