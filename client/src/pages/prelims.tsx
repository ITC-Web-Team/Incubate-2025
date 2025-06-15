import React, { useEffect } from 'react'; // Added React import
import { FaCalendarAlt, FaFileAlt, FaVideo, FaBalanceScale, FaClipboardList, FaBullseye, FaLightbulb, FaUsers, FaMedal, FaFilm, FaListOl } from 'react-icons/fa';
import { RiArrowRightSLine } from 'react-icons/ri';

const PrelimsPage = () => {
  useEffect(() => {
    document.title = "Prelims Information | Incubate";
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    { text: "Theme selection", rawIcon: <FaBullseye /> },
    { text: "Team registrations", rawIcon: <FaUsers /> },
    { text: "Problem Identification", rawIcon: <FaLightbulb /> },
    { text: "Submission of proposal and Video (June 25th - July 31st)", rawIcon: <FaFileAlt /> },
    { text: "Results (August 14th)", rawIcon: <FaMedal /> },
  ];

  const importantDates = [
    { text: "Announcement of Themes: June 15th", icon: <FaCalendarAlt className="text-primary dark:text-accent-dark" /> },
    { text: "Registrations open: June 25th", icon: <FaCalendarAlt className="text-primary dark:text-accent-dark" /> },
    { text: "Last date for submission of proposal: July 31st", icon: <FaCalendarAlt className="text-primary dark:text-accent-dark" /> },
  ];

  const submissionProposalPoints = [
    "Word limit: 1500 words",
    "Part A: Contains Title, Name of all participants, Institute name, Course, Year, Contact number and e-mail ID of all team members.",
    "Part B: Submitted under the following headings:",
    "There is no word limit for each heading. Diagrams, Figures and Images may be placed anywhere along the proposal, upto the team's discretion.",
  ];

  const partBHeadings = [
    "Problem statement",
    "Background and Rationale",
    "Proposed Solution",
    "End users",
    "Expected Outcomes and Implications",
  ];

  const submissionVideoPoints = [
    "A video of maximum 2 minutes explaining your project, problem statement and solution.",
    "It should be uploaded to YouTube as an unlisted video.",
    "The link of the same is to be shared with us along with the proposal via the Submission Form that will be released on the website.",
    "Format for title: <Theme Number> <Registration ID>",
  ];

  const judgingCriteria = [
    { text: "Clarity of Problem Statement", marks: 10, icon: <FaClipboardList className="text-primary dark:text-accent-dark" /> },
    { text: "Significance of the Problem", marks: 10, icon: <FaLightbulb className="text-primary dark:text-accent-dark" /> },
    { text: "Novelty of the Idea", marks: 10, icon: <FaLightbulb className="text-primary dark:text-accent-dark" /> },
    { text: "Feasibility of Implementation", marks: 10, icon: <FaUsers className="text-primary dark:text-accent-dark" /> }, // Consider FaCogs or similar
    { text: "Technical Soundness", marks: 20, icon: <FaUsers className="text-primary dark:text-accent-dark" /> }, // Consider FaMicrochip or similar
    { text: "Clinical Impact", marks: 20, icon: <FaUsers className="text-primary dark:text-accent-dark" /> }, // Consider FaHeartbeat or similar
    { text: "Video Pitch", marks: 10, icon: <FaFilm className="text-primary dark:text-accent-dark" /> },
    { text: "Medical-Engineering Integration", marks: 10, icon: <FaUsers className="text-primary dark:text-accent-dark" /> }, // Consider FaLink or similar
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 text-foreground">
      <header className="mb-10 md:mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark drop-shadow-md">
          PRELIMS
        </h1>
      </header>

      <div className="space-y-10 md:space-y-12">

        {/* Process Overview Section */}
        <section className="bg-background-card dark:bg-gray-800 shadow-2xl rounded-xl p-6 md:p-10 transition-shadow duration-300 hover:shadow-lg">
          <h2 className="text-3xl font-semibold text-secondary dark:text-secondary-dark mb-10 text-center">
            Process Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-background-alt dark:bg-gray-700 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:shadow-xl hover:scale-105 transition-all duration-300 h-full">
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-primary text-white text-xl font-bold ring-4 ring-primary/30 dark:ring-accent-dark/30">
                  {index + 1}
                </div>
                <div className="text-4xl mb-3 text-primary dark:text-accent-dark">
                  {/* Ensure icons are consistently styled */}
                  {React.cloneElement(step.rawIcon, { className: "text-4xl" })}
                </div>
                <h3 className="text-md lg:text-lg font-semibold text-foreground dark:text-gray-100 mb-1 flex-grow min-h-[3em]">
                  {step.text.split('(')[0].trim()}
                </h3>
                {step.text.includes('(') && (
                  <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
                    {step.text.substring(step.text.indexOf('('))}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-10 text-md text-gray-600 dark:text-gray-400 italic text-center">
            The prelims will be held in an online format where the teams have to identify problem statements within the themes, not restricted to the focus points or faculty recommendations. Following these focus points will not lead to an increase in your chances of selection but is an attempt to familiarize you with the theme.
          </p>
        </section>

        {/* Important Dates Section */}
        <section className="bg-background-card dark:bg-gray-800 shadow-2xl rounded-xl p-6 md:p-10 transition-shadow duration-300 hover:shadow-lg">
          <h2 className="text-3xl font-semibold text-secondary dark:text-secondary-dark mb-8 text-center">
            Important Dates
          </h2>
          <ul className="space-y-4">
            {importantDates.map((date, index) => (
              <li key={index} className="flex items-center space-x-3 p-3 bg-background-alt dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 dark:bg-accent-dark/20">
                 {date.icon}
                </div>
                <span className="text-md text-foreground dark:text-gray-200">{date.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Submission Format Section */}
        <section className="bg-background-card dark:bg-gray-800 shadow-2xl rounded-xl p-6 md:p-10 transition-shadow duration-300 hover:shadow-lg">
          <h2 className="text-3xl font-semibold text-secondary dark:text-secondary-dark mb-8 text-center">
            Submission Format
          </h2>
          <p className="mb-6 text-lg text-center text-foreground dark:text-gray-300">You are requested to submit 2 things: A) Proposal and B) Video.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Proposal Card */}
            <div className="bg-background-alt dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-primary dark:text-primary-dark mb-4 flex items-center">
                <FaFileAlt className="mr-3 text-xl" /> A) Proposal
              </h3>
              <ul className="space-y-3 text-foreground dark:text-gray-300">
                {submissionProposalPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <RiArrowRightSLine className="flex-shrink-0 mr-2 mt-1 text-primary dark:text-accent-dark" />
                    <span>{point}</span>
                  </li>
                ))}
                <li>
                  <RiArrowRightSLine className="flex-shrink-0 mr-2 mt-1 text-primary dark:text-accent-dark inline-block" />
                  <span className="font-semibold">Part B Headings:</span>
                  <ul className="list-disc list-inside mt-2 pl-6 space-y-1">
                    {partBHeadings.map((heading, idx) => (
                      <li key={idx}>{heading}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>

            {/* Video Card */}
            <div className="bg-background-alt dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-primary dark:text-primary-dark mb-4 flex items-center">
                <FaVideo className="mr-3 text-xl" /> B) Video
              </h3>
              <ul className="space-y-3 text-foreground dark:text-gray-300">
                {submissionVideoPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <RiArrowRightSLine className="flex-shrink-0 mr-2 mt-1 text-primary dark:text-accent-dark" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Judging Criteria Section */}
        <section className="bg-background-card dark:bg-gray-800 shadow-2xl rounded-xl p-6 md:p-10 transition-shadow duration-300 hover:shadow-lg">
          <h2 className="text-3xl font-semibold text-secondary dark:text-secondary-dark mb-8 text-center">
            Judging Criteria
          </h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {judgingCriteria.map((criterion, index) => (
              <li key={index} className="flex items-center space-x-3 p-3 bg-background-alt dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 dark:bg-accent-dark/20">
                  {criterion.icon}
                </div>
                <span className="text-md text-foreground dark:text-gray-200">{criterion.text} ({criterion.marks} marks)</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg font-semibold text-center text-primary dark:text-primary-dark">
            Total Score: 100 marks
          </p>
          <p className="mt-4 text-md text-gray-600 dark:text-gray-400 text-center">
            All sections will be marked separately by IIT Bombay and JIPMER faculty and the total will be added. Section 5 is only graded by Engineering faculty. Section 6 is graded only by Medical faculty.
          </p>
        </section>

        {/* Results Section */}
        <section className="bg-primary dark:bg-primary-dark text-white dark:text-gray-900 p-6 md:p-8 rounded-xl shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Results Announcement</h2>
          <p className="text-xl md:text-2xl font-medium">
            Results will be announced on <span className="font-bold underline">August 14th</span>.
          </p>
        </section>

      </div>
    </div>
  );
};

export default PrelimsPage;
