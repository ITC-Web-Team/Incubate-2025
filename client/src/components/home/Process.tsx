const processSteps = [
	{
		step: 1,
		title: "Form a Team",
		description: "Create a team of up to 4 with Medical and Engineering students",
	},
	{
		step: 2,
		title: "Submit Proposal",
		description: "Attend webinars and submit up to 1 proposal per registration",
	},
	{
		step: 3,
		title: "Get Selected",
		description: "15 teams will be selected for finals with ₹10,000 for prototype building",
	},
];

const processStepsBelow = [
	{
		step: 4,
		title: "Building Prototype",
		description: "Develop your working model with weekly mentoring and funding support",
	},
	{
		step: 5,
		title: "Offline Finals",
		description: "Present your prototype at JIPMER in the final round",
	},
];

import { motion } from "framer-motion";

const Process = () => {
	return (
		<section className="py-16 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 digital-noise">
			<div className="container mx-auto px-4">
				<motion.h2
					className="text-3xl md:text-4xl font-bold mb-16 text-center dark:text-white text-glow"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					The Process
				</motion.h2>

				{/* Process flowchart */}
				<div className="max-w-5xl mx-auto relative">
					{/* Circuit background */}
					<div className="absolute inset-0 w-full h-full -z-10">
						<svg
							className="w-full h-full"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
						>
							<path
								d="M0,50 L100,50"
								stroke="rgba(79, 70, 229, 0.1)"
								strokeWidth="1"
								strokeDasharray="5,5"
							/>
							<path
								d="M50,0 L50,100"
								stroke="rgba(79, 70, 229, 0.1)"
								strokeWidth="1"
								strokeDasharray="5,5"
							/>
							<path
								d="M0,25 L100,25"
								stroke="rgba(79, 70, 229, 0.1)"
								strokeWidth="0.5"
								strokeDasharray="3,3"
							/>
							<path
								d="M0,75 L100,75"
								stroke="rgba(79, 70, 229, 0.1)"
								strokeWidth="0.5"
								strokeDasharray="3,3"
							/>
							<path
								d="M25,0 L25,100"
								stroke="rgba(79, 70, 229, 0.1)"
								strokeWidth="0.5"
								strokeDasharray="3,3"
							/>
							<path
								d="M75,0 L75,100"
								stroke="rgba(79, 70, 229, 0.1)"
								strokeWidth="0.5"
								strokeDasharray="3,3"
							/>
						</svg>
					</div>

					<div className="flex flex-wrap justify-center gap-6">
						{[...processSteps, ...processStepsBelow].map((step, index) => (
							<motion.div
								key={index}
								className="flex-1 min-w-[250px] max-w-xs backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-lg p-6 shadow-lg hover:shadow-glow border border-blue-200 dark:border-blue-800 relative scanner-line mx-auto"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{
									scale: 1.02,
									boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
								}}
							>
								<div className="hexagon w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center mb-6 mx-auto">
									<span className="font-bold text-lg">{step.step}</span>
								</div>

								<h3 className="text-lg font-bold mb-3 dark:text-white text-center">
									<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
										{step.title}
									</span>
								</h3>

								<p className="text-sm text-gray-600 dark:text-gray-300 text-center">
									{step.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>

				{/* Hackathon Stages Section */}
				<motion.div
					className="mt-20" // Add margin top to separate from the process flowchart
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }} // Adjust delay as needed
					viewport={{ once: true }}
				>
					<h3 className="text-2xl md:text-3xl font-bold mb-12 text-center dark:text-white text-glow">
						Hackathon Stages
					</h3>
					<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
						{/* Stage 1 Card */}
						<motion.div
							className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-xl p-8 shadow-xl hover:shadow-glow border border-purple-300 dark:border-purple-700 relative overflow-hidden scanner-line"
							whileHover={{ y: -5, scale: 1.02 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<div className="absolute inset-0 digital-noise opacity-5"></div>
							<div className="relative z-10">
								<div className="flex items-center mb-4">
									<span className="text-3xl font-bold text-purple-600 dark:text-purple-400 mr-3">
										1
									</span>
									<h4 className="text-xl font-semibold text-gray-800 dark:text-white">
										Online Prelims
									</h4>
								</div>
								<p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
									June - July
								</p>
								<p className="text-gray-700 dark:text-gray-300">
									Proposal submission and initial screening.
								</p>
							</div>
						</motion.div>

						{/* Stage 2 Card */}
						<motion.div
							className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-xl p-8 shadow-xl hover:shadow-glow border border-green-300 dark:border-green-700 relative overflow-hidden scanner-line"
							whileHover={{ y: -5, scale: 1.02 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<div className="absolute inset-0 digital-noise opacity-5"></div>
							<div className="relative z-10">
								<div className="flex items-center mb-4">
									<span className="text-3xl font-bold text-green-600 dark:text-green-400 mr-3">
										2
									</span>
									<h4 className="text-xl font-semibold text-gray-800 dark:text-white">
										Offline Finals
									</h4>
								</div>
								<p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
									August - October
								</p>
								<p className="text-gray-700 dark:text-gray-300">
									Prototype submission and final presentations for selected teams.
								</p>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Process;
