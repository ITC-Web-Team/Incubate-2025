const processSteps = [
  {
    step: 1,
    title: "Form a Team",
    description: "Create a team of up to 4 with Medical and Engineering students"
  },
  {
    step: 2,
    title: "Submit Proposal",
    description: "Attend webinars and submit up to 1 proposal per registration"
  },
  {
    step: 3,
    title: "Get Selected",
    description: "15 teams will be selected for finals with ₹10,000 for prototype building"
  },
  {
    step: 4,
    title: "Final Presentation",
    description: "Build your working model with weekly mentoring and present at JIPMER"
  }
];

const Process = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center dark:text-white">The Process</h2>
        
        {/* Process flowchart */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md relative">
                <div className="w-10 h-10 rounded-full bg-primary dark:bg-blue-700 text-white flex items-center justify-center mb-4 font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
                
                {/* Arrow for desktop - don't show on last item */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <i className="ri-arrow-right-line text-2xl text-primary dark:text-blue-400"></i>
                  </div>
                )}
                
                {/* Arrow for mobile - don't show on last item */}
                {index < processSteps.length - 1 && (
                  <div className="md:hidden absolute left-1/2 -bottom-3 transform -translate-x-1/2">
                    <i className="ri-arrow-down-line text-2xl text-primary dark:text-blue-400"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
