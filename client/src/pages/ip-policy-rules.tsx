
import { useEffect } from 'react';

const IPPolicyRulesPage = () => {
  useEffect(() => {
    document.title = "IP Policy and Rules | Incubate";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-12 md:py-20 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            IP Policy and Rules
          </h1>
        </header>

        <div className="max-w-4xl mx-auto space-y-12">
          <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-10">
            By signing up and participating in this Hackathon, all individuals and teams agree to the following terms:
          </p>

          {/* General Rules Section */}
          <section className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b pb-3 border-gray-300 dark:border-gray-700">
              General Rules
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-600 dark:text-gray-300 pl-4">
              <li>
                <strong className="text-gray-700 dark:text-gray-200">Organizer's Discretion:</strong> All decisions made by the organizing committee—including participant eligibility, judging criteria, and final selections—are conclusive. These decisions are not open to dispute or appeal.
              </li>
              <li>
                <strong className="text-gray-700 dark:text-gray-200">Right to Modify:</strong> The organizing team retains full authority to update or alter any rules, deadlines, or participation criteria at any point during the event. Such changes will be shared on the official platform and will be binding for all participants.
              </li>
              <li>
                <strong className="text-gray-700 dark:text-gray-200">Updated Guidelines:</strong> Participants are expected to regularly review the website for any modifications to the event's terms. Continued involvement in the hackathon implies acceptance of any such changes.
              </li>
              <li>
                <strong className="text-gray-700 dark:text-gray-200">Responsibility of Compliance:</strong> Participants must ensure they have secured all necessary permissions, approvals, or licenses for the content they submit. Submissions must not breach any existing laws or infringe on third-party rights.
              </li>
              <li>
                <strong className="text-gray-700 dark:text-gray-200">Prizes and Recognition:</strong> The number of winners and distribution of any prize or recognition will be determined solely by the organizing team and may vary depending on the quality and quantity of submissions.
              </li>
              <li>
                <strong className="text-gray-700 dark:text-gray-200">Original Contributions:</strong> Entries must be completely original and independently developed by the team. Submissions that replicate or plagiarize existing work, or violate another person’s intellectual property, will be disqualified.
              </li>
              <li>
                <strong className="text-gray-700 dark:text-gray-200">Legal Indemnity:</strong> By submitting an entry, participants confirm that it complies with all rules. The organizers will not be held accountable for any legal complications arising from submitted work.
              </li>
              <li>
                <strong className="text-gray-700 dark:text-gray-200">Confidential Review Process:</strong> All ideas and prototypes shared during the event will be treated with strict confidentiality. Judging will take place privately, and no information will be shared publicly without consent.
              </li>
            </ul>
          </section>

          {/* Intellectual Property (IP) Policy Section */}
          <section className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400 border-b pb-3 border-gray-300 dark:border-gray-700">
              Intellectual Property (IP) Policy
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-600 dark:text-gray-300 pl-4">
              <li>
                <strong className="text-gray-700 dark:text-gray-200">Ownership & Creativity:</strong> Each submission must originate from the participating individuals or team. Projects should showcase the unique creativity, effort, and thought process of the participants.
              </li>
              <li>
                <strong className="text-gray-700 dark:text-gray-200">Non-Infringement:</strong> Participants must ensure that their submission does not violate the intellectual property rights of any third party—including copyrights, patents, trademarks, or privacy laws.
              </li>
              <li>
                <strong className="text-gray-700 dark:text-gray-200">Technical Assistance:</strong> External support for conceptualization, design, and execution is not allowed and will lead to disqualification.
              </li>
              <li>
                <strong className="text-gray-700 dark:text-gray-200">Legal Assurance:</strong> By participating, teams certify that their submission is free from any infringement or ownership disputes. The organizers will not be liable for any conflict arising from the project’s content.
              </li>
              <li>
                <strong className="text-gray-700 dark:text-gray-200">Final Ownership Rights:</strong> The complete intellectual property rights of any innovation developed during the Hackathon will remain with the participants and their respective faculty mentors. The event organizers do not claim ownership over any idea, model, or output created during the event.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IPPolicyRulesPage;
