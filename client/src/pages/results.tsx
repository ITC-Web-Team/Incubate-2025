import React from 'react';
import { motion } from 'framer-motion';

const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white/70 dark:bg-gray-900/60 light:bg-white border border-gray-200/60 dark:border-gray-700/60 rounded-xl p-5 sm:p-6 shadow-sm">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{title}</h2>
    {children}
  </div>
);

const List: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
    {items.map((it, idx) => (
      <li key={idx} className="px-3 py-2 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 text-blue-900 dark:text-blue-100 border border-blue-200/40 dark:border-blue-800/40 text-sm sm:text-base">
        {it}
      </li>
    ))}
  </ul>
);

const ResultsPage: React.FC = () => {
  const finalists = [
    'INCM4T94: Sparsh',
    'INCM4TS15: Bridging the Gap',
    'INCM4T149: Safe-CHOLE',
    'INCM3T02: PulseHalo',
    'INCM4T115: HRID-AI',
    'INC2M4T37: BiliQ',
    'INC2M4T30: NeuroLens',
    'INCM4T109: Syntax.ai',
    'INC2M4T26: GI-Guardian',
    'INCM4T18: Smart Disposable Sensor System',
    'INCM4T63: Suraksha CPR',
    'INCM4T09: Kavach',
    'INCM3T18: Bastion',
    'INCM4TS10: PressSure',
    'INCM4T180: VitaGuardian',
  ];

  const honourable = [
    'INCM2T45: TrialVerse',
    'INCM4T160: Pneulife',
    'INCM4T171: CoproScan',
    'INCM4T221: Pearl',
    'INCM4T34: DriftGuard',
    'INCM4T82: STBAP',
    'INCM3T12: VenoHybrid',
    'INCM3T23: Neo-Cherubs',
    'INCM4T56: Chemotrack',
    'INCM3T08: SafeRx',
    'INCM3T59: BOND',
    'INCM4T170: CLAIReye',
    'INCM2R1: Naian',
    'INCM4T129: SENSE',
    'INCM2T48: Nivara',
    'INCM2T52: CAUTIshield',
    'INCM4T51: SERS',
    'INCM3T43: Scrub Bot',
    'INCM3T29: SpecTECHular',
    'INCM4T124: APEXpredators',
  ];

  const instructions = [
    'Confirmation of participation in finals and acknowledgment of selection',
    'Team ID',
    'Number of team members',
    'Number of team members attending the finals',
    'Details of all team members: Name, ID card, Name of College, Course, Branch, State of Origin, State of Education, Year of Graduation',
    'Theme and type of solution',
    'Proof of payment',
    'Bank details of the Captain: Account Name, Account Number, Bank Name and Branch, IFSC Code',
  ];

  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 dark:from-gray-950 dark:via-blue-950 dark:to-gray-950 light:from-blue-50 light:via-blue-100 light:to-indigo-100 px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white light:text-gray-900 tracking-tight">Announcement of Selected Teams and Honourable Mentions</h1>
          <p className="mt-2 text-blue-200 dark:text-blue-300 light:text-gray-700">INCUBATE 2025</p>
          <p className="mt-4 text-blue-100 dark:text-blue-200 light:text-gray-700 max-w-3xl mx-auto">
            We are pleased to announce the selected teams for INCUBATE 2025, along with the honourable mentions. The following teams are invited to attend the Finals on October 4th and 5th, 2025.
          </p>
        </motion.div>

        <SectionCard title="Finalists">
          <List items={finalists} />
        </SectionCard>

        <SectionCard title="Honourable Mentions">
          <List items={honourable} />
        </SectionCard>

        <SectionCard title="Instructions for Finalists">
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3">
            You are requested to send a confirmation mail to <a className="underline" href="mailto:jipmersciclub@gmail.com">jipmersciclub@gmail.com</a> by <strong>11:00 PM, 22/08/2025</strong> with the following details:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            {instructions.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>
          <div className="mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            <p>We look forward to witnessing the impact of these projects in advancing science, technology, and healthcare solutions.</p>
            <p className="mt-3 font-semibold">Organizing team, INCUBATE 2025</p>
            <p className="mt-1">E-mail: <a className="underline" href="mailto:jipmersciclub@gmail.com">jipmersciclub@gmail.com</a></p>
            <p>Contact: 7892615045 (Chinua), 7760887335 (Taruna)</p>
          </div>
        </SectionCard>
      </div>
    </div>
  );
};

export default ResultsPage;
