import { useEffect } from 'react';
import { FaFilePowerpoint, FaYoutube, FaLightbulb } from 'react-icons/fa';
import { RiArrowRightSLine } from 'react-icons/ri';

const SubmissionTemplatePage = () => {
  useEffect(() => {
    document.title = "Submission Template | Incubate KCDH-JIPMER";
    window.scrollTo(0, 0);
  }, []);

  const slides = [
    {
      title: "Slide 1: Title Slide",
      points: [
        "<strong>Project Title</strong>",
        "<strong>Team Name and ID</strong>",
        "<strong>Team Members</strong> (Name | Contribution | Role – Medical/Engineering)",
        "<strong>Contact Email</strong>",
      ],
    },
    {
      title: "Slide 2/3: Problem Statement & Significance",
      points: [
        "What is the <strong>specific problem</strong> being addressed?",
        "Who is <strong>affected by it</strong> (patients, clinicians, systems)?",
        "Why is this problem <strong>important</strong> in the clinical/public health context?",
        "Brief <strong>data or evidence</strong> to justify its significance.",
      ],
    },
    {
      title: "Slide 3/4: Proposed Solution & Novelty",
      points: [
        "What is your <strong>proposed solution</strong>?",
        "What makes it <strong>different or better</strong> than existing solutions?",
        "What <strong>unique approach, technology, or integration</strong> have you introduced?",
      ],
    },
    {
      title: "Slide 5/6: Technical Approach",
      points: [
        "<strong>Architecture, methodology, or technical flow</strong>.",
        "<strong>Technologies, algorithms, devices</strong> used.",
        "Why this approach is <strong>technically sound or feasible</strong>.",
        "<em>(Use visuals: system diagram, workflow, prototypes)</em>",
      ],
    },
    {
      title: "Slide 7/8: Clinical Relevance & Impact",
      points: [
        "How will this <strong>improve clinical workflows, patient outcomes, or healthcare delivery</strong>?",
        "Any <strong>pilot use-case, scenario, or clinical pathway</strong>?",
        "<strong>Ethical/safety considerations</strong> <em>(if applicable)</em>",
      ],
    },
    {
      title: "Slide 8/9: Feasibility & Integration",
      points: [
        "<strong>Implementation roadmap</strong> (short-term and long-term).",
        "<strong>Challenges anticipated</strong> and mitigation.",
        "How have team members from <strong>both disciplines contributed</strong> to the design?",
      ],
    },
    {
      title: "Slide 9/10: Summary & Call-to-Action",
      points: [
        "<strong>Recap</strong> the core problem and proposed solution.",
        "Highlight <strong>impact in 1–2 sentences</strong>.",
        "What <strong>support do you seek</strong> (mentoring, piloting, funding, etc.)?",
        "Include a <strong>link or QR code to your video pitch</strong> <em>(if not embedded separately)</em>.",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 text-foreground dark:text-gray-200">
      <header className="mb-10 md:mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark drop-shadow-md">
          Hackathon Submission Template
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Maximum <strong>10 Slides</strong>, excluding Title Slide.
        </p>
         <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
          This template is a guideline. Feel free to adapt the visual design while ensuring all content points are covered.
        </p>
      </header>

      <div className="space-y-8 mb-12">
        {slides.map((slide, index) => (
          <section key={index} className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-secondary dark:text-secondary-dark mb-5 pb-2 border-b border-gray-300 dark:border-gray-600">
              {slide.title}
            </h2>
            <ul className="space-y-2.5 text-gray-700 dark:text-gray-300">
              {slide.points.map((point, pIndex) => (
                <li key={pIndex} className="flex items-start">
                  <RiArrowRightSLine className="flex-shrink-0 mr-2 mt-1 text-primary dark:text-accent-dark text-lg" />
                  <span dangerouslySetInnerHTML={{ __html: point }} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-blue-50 dark:bg-blue-900/40 p-6 rounded-lg shadow-md border border-blue-200 dark:border-blue-700">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-4 flex items-center">
            <FaFilePowerpoint className="mr-3 text-2xl" /> Slide Deck (PDF)
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start"><RiArrowRightSLine className="flex-shrink-0 mr-2 mt-1 text-blue-500 dark:text-blue-400" /><span>Upload as a single <strong>.pdf file</strong>.</span></li>
            <li className="flex items-start"><RiArrowRightSLine className="flex-shrink-0 mr-2 mt-1 text-blue-500 dark:text-blue-400" /><span>Follow the <strong>10-slide structure</strong>.</span></li>
            <li className="flex items-start"><RiArrowRightSLine className="flex-shrink-0 mr-2 mt-1 text-blue-500 dark:text-blue-400" /><span>Ensure all information is concise and clear.</span></li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-900/40 p-6 rounded-lg shadow-md border border-red-200 dark:border-red-700">
          <h3 className="text-xl font-semibold text-red-700 dark:text-red-300 mb-4 flex items-center">
            <FaYoutube className="mr-3 text-2xl" /> Video Pitch
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start"><RiArrowRightSLine className="flex-shrink-0 mr-2 mt-1 text-red-500 dark:text-red-400" /><span>Maximum <strong>3 minutes</strong>.</span></li>
            <li className="flex items-start"><RiArrowRightSLine className="flex-shrink-0 mr-2 mt-1 text-red-500 dark:text-red-400" /><span>Upload to YouTube as an <strong>unlisted video</strong>.</span></li>
            <li className="flex items-start"><RiArrowRightSLine className="flex-shrink-0 mr-2 mt-1 text-red-500 dark:text-red-400" /><span>Label: <code>&lt;Theme number&gt;&lt;Registration ID&gt;</code> (e.g., T03REG12345).</span></li>
            <li className="flex items-start"><RiArrowRightSLine className="flex-shrink-0 mr-2 mt-1 text-red-500 dark:text-red-400" /><span>Embed video link/QR code in slide deck (<strong>Slide 9/10</strong> recommended).</span></li>
          </ul>
        </div>
      </div>
       <div className="mt-10 p-4 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-lg text-center">
        <p className="text-yellow-800 dark:text-yellow-200 flex items-center justify-center">
          <FaLightbulb className="mr-2 text-xl" />
          Remember to clearly articulate how your medical and engineering team members collaborated on the solution.
        </p>
      </div>
    </div>
  );
};

export default SubmissionTemplatePage;