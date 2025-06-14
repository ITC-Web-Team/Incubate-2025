import { useEffect, useRef } from "react";

const timelineData = [
	{
		date: "8th June",
		title: "Announcement",
		description: "",
	},
	{
		date: "21st June",
		title: "Registrations Open",
		description: "",
	},
	{
		date: "",
		title: "Brainstorming Sessions",
		description: "Mentor videos and theme discussions",
	},
	{
		date: "August 14th",
		title: "Result Announcement",
		description: "",
	},
	{
		date: "Aug 14 - Oct 5",
		title: "Prototype Building Phase",
		description: "Mentoring and development",
	},
	{
		date: "Oct 5",
		title: "Finals at JIPMER",
		description: "",
	},
];

import { motion } from "framer-motion";

const Timeline = () => {
	return (
		<section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 digital-noise">
			<div className="container mx-auto px-4">
				<motion.h2
					className="text-3xl md:text-4xl font-bold mb-16 text-center dark:text-white text-glow"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					Event Timeline
				</motion.h2>

				{/* ECG Timeline Visualization */}
				<div className="relative w-full mb-16 overflow-hidden border border-blue-300/30 dark:border-blue-500/30 rounded-xl p-6 shadow-glow bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
					<motion.svg
						className="w-full h-48"
						viewBox="0 0 1000 100"
						preserveAspectRatio="none"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
					>
						{/* ECG baseline */}
						<line
							x1="0"
							y1="50"
							x2="1000"
							y2="50"
							stroke="#4f46e5"
							strokeWidth="1"
							strokeDasharray="5,5"
						/>

						{/* ECG pattern */}
						<path
							className="ecg-line"
							d="M0,50 L100,50 L120,50 L130,20 L140,80 L150,30 L160,70 L170,50 L200,50 L300,50 L320,50 L330,20 L340,80 L350,30 L360,70 L370,50 L400,50 L500,50 L520,50 L530,20 L540,80 L550,30 L560,70 L570,50 L600,50 L700,50 L720,50 L730,20 L740,80 L750,30 L760,70 L770,50 L800,50 L900,50 L920,50 L930,20 L940,80 L950,30 L960,70 L970,50 L1000,50"
							fill="none"
							stroke="url(#ecgGradient)"
							strokeWidth="3"
						/>

						{/* Create gradient for ECG line */}
						<defs>
							<linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stopColor="#3b82f6" />
								<stop offset="50%" stopColor="#8b5cf6" />
								<stop offset="100%" stopColor="#3b82f6" />
							</linearGradient>
						</defs>
					</motion.svg>

					{/* Timeline points */}
					<div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-10">
						{timelineData.map((item, index) => (
							<motion.div
								key={index}
								className="relative z-10 scanner-line"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[calc(100%+20px)]">
									<div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-glow medical-pulse"></div>
								</div>
								<div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-5 shadow-lg hover:shadow-glow transition-all duration-300 border border-blue-200 dark:border-blue-900">
									<h4 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-lg">
										{item.date}
									</h4>
									<p className="text-sm font-medium dark:text-white mt-2">
										{item.title}
									</p>
									{item.description && (
										<p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
											{item.description}
										</p>
									)}
								</div>
							</motion.div>
						))}
					</div>

					{/* Prelims and Finals Graphic */}
					<div className="mt-12 p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl shadow-xl border border-blue-200 dark:border-blue-800">
						<h4 className="text-xl font-semibold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
							Hackathon Phases
						</h4>
						<div className="relative w-full h-20">
							{/* Background Bar */}
							<div className="absolute top-1/2 left-0 w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full transform -translate-y-1/2"></div>

							{/* Prelims Section (Steps 1-4) */}
							<motion.div
								className="absolute top-1/2 left-0 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-l-full transform -translate-y-1/2"
								initial={{ width: 0 }}
								whileInView={{ width: "calc(100% * 4 / 6)" }} // 4 out of 6 steps
								transition={{ duration: 1, ease: "easeInOut" }}
								viewport={{ once: true }}
							>
								<span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-medium text-blue-700 dark:text-blue-300 whitespace-nowrap">
									Prelims (Steps 1-4)
								</span>
							</motion.div>

							{/* Finals Section (Steps 5-6) */}
							<motion.div
								className="absolute top-1/2 right-0 h-3 bg-gradient-to-l from-purple-500 to-pink-500 rounded-r-full transform -translate-y-1/2"
								initial={{ width: 0 }}
								whileInView={{ width: "calc(100% * 2 / 6)" }} // 2 out of 6 steps
								transition={{
									duration: 1,
									ease: "easeInOut",
									delay: 0.5, // Delay to start after prelims bar
								}}
								viewport={{ once: true }}
							>
								<span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-medium text-purple-700 dark:text-purple-300 whitespace-nowrap">
									Finals (Steps 5-6)
								</span>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Timeline;
