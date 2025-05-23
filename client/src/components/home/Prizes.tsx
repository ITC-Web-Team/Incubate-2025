import { motion } from "framer-motion";

const prizeData = [
  {
    position: "2nd Prize",
    amount: "₹20,000",
    title: "RUNNER UP",
    iconClass: "ri-award-line",
    bgColorClass: "from-gray-300 to-gray-200",
    borderColorClass: "border-gray-400",
    badgeColorClass: "bg-gray-400",
    iconBgClass: "text-gray-700",
    order: "order-2 md:order-1",
    height: "h-60",
    iconSize: "text-4xl",
    titleSize: "text-xl",
    amountSize: "text-3xl",
    badgeHeight: "h-8",
    animationDelay: 0.2
  },
  {
    position: "1st Prize",
    amount: "₹30,000",
    title: "WINNER",
    iconClass: "ri-trophy-line",
    bgColorClass: "from-yellow-300 to-yellow-200",
    borderColorClass: "border-yellow-400",
    badgeColorClass: "bg-yellow-500",
    iconBgClass: "text-yellow-700",
    order: "order-1 md:order-2",
    height: "h-72",
    iconSize: "text-5xl",
    titleSize: "text-2xl",
    amountSize: "text-4xl",
    badgeHeight: "h-10",
    animationDelay: 0
  },
  {
    position: "3rd Prize",
    amount: "₹15,000",
    title: "SECOND RUNNER UP",
    iconClass: "ri-medal-line",
    bgColorClass: "from-orange-300 to-orange-200",
    borderColorClass: "border-orange-400",
    badgeColorClass: "bg-orange-400",
    iconBgClass: "text-orange-700",
    order: "order-3",
    height: "h-52",
    iconSize: "text-3xl",
    titleSize: "text-lg",
    amountSize: "text-2xl",
    badgeHeight: "h-6",
    animationDelay: 0.4
  }
];

const Prizes = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center dark:text-white">Prizes</h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
            The best prototypes judged according to standardized evaluation criteria will be awarded with cash prizes. Up to 15 teams will be selected for the finals with a cash prize of ₹10,000 to aid in prototype building.
          </p>
        </div>
        
        {/* Prize podium visualization */}
        <div className="flex flex-col md:flex-row justify-center items-end max-w-4xl mx-auto mb-8 gap-4">
          {prizeData.map((prize, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col items-center ${prize.order}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: prize.animationDelay, duration: 0.5 }}
            >
              <motion.div 
                className={`w-24 h-24 bg-${prize.bgColorClass.split('from-')[1].split(' ')[0]} border-4 ${prize.borderColorClass} rounded-full flex items-center justify-center mb-4`}
                animate={prize.position === "1st Prize" ? { scale: [1, 1.05, 1] } : {}}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <i className={`${prize.iconClass} ${prize.iconSize} ${prize.iconBgClass}`}></i>
              </motion.div>
              <div className={`bg-gradient-to-t ${prize.bgColorClass} w-64 ${prize.height} rounded-t-lg flex flex-col items-center justify-center px-4 py-8 shadow-lg`}>
                <h3 className={`${prize.titleSize} font-bold mb-2 dark:text-gray-800`}>{prize.position}</h3>
                <p className={`${prize.amountSize} font-bold text-primary-600 dark:text-primary-800 mb-4`}>{prize.amount}</p>
                <div className={`${prize.badgeColorClass} w-full ${prize.badgeHeight} rounded-lg flex items-center justify-center text-white font-bold`}>
                  {prize.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
