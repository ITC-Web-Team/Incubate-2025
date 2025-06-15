import { motion } from "framer-motion";

const prizeData = [
  {
    position: "2nd Prize",
    amount: "To be announced on June 25th",
    title: "RUNNER UP",
    iconClass: "ri-award-line",
    bgColorClass: "from-gray-300 to-gray-200",
    borderColorClass: "border-gray-400",
    badgeColorClass: "bg-gray-400",
    iconBgClass: "text-gray-700",
    order: "order-2 md:order-1",
    height: "h-60",
    iconSize: "text-2xl",
    titleSize: "text-base",
    amountSize: "text-base", // decreased font size
    badgeHeight: "h-8",
    animationDelay: 0.2
  },
  {
    position: "1st Prize",
    amount: "To be announced on June 25th",
    title: "WINNER",
    iconClass: "ri-trophy-line",
    bgColorClass: "from-yellow-300 to-yellow-200",
    borderColorClass: "border-yellow-400",
    badgeColorClass: "bg-yellow-500",
    iconBgClass: "text-yellow-700",
    order: "order-1 md:order-2",
    height: "h-72",
    iconSize: "text-3xl",
    titleSize: "text-lg",
    amountSize: "text-base", // decreased font size
    badgeHeight: "h-10",
    animationDelay: 0
  },
  {
    position: "3rd Prize",
    amount: "To be announced on June 25th",
    title: "SECOND RUNNER UP",
    iconClass: "ri-medal-line",
    bgColorClass: "from-orange-300 to-orange-200",
    borderColorClass: "border-orange-400",
    badgeColorClass: "bg-orange-400",
    iconBgClass: "text-orange-700",
    order: "order-3",
    height: "h-52",
    iconSize: "text-xl",
    titleSize: "text-sm",
    amountSize: "text-sm", // decreased font size
    badgeHeight: "h-6",
    animationDelay: 0.4
  }
];
const Prizes = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 digital-noise relative overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute w-40 h-40 rounded-full border border-blue-500/30 top-20 right-20"></div>
        <div className="absolute w-60 h-60 rounded-full border border-purple-500/30 bottom-10 left-10"></div>
        <div className="absolute w-20 h-20 rounded-full border border-blue-500/30 top-40 left-40"></div>
        
        {/* Circuit board lines */}
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,20 L100,20" stroke="#4f46e5" strokeWidth="0.1" strokeDasharray="1,3" />
          <path d="M0,40 L100,40" stroke="#4f46e5" strokeWidth="0.1" strokeDasharray="1,3" />
          <path d="M0,60 L100,60" stroke="#4f46e5" strokeWidth="0.1" strokeDasharray="1,3" />
          <path d="M0,80 L100,80" stroke="#4f46e5" strokeWidth="0.1" strokeDasharray="1,3" />
          <path d="M20,0 L20,100" stroke="#4f46e5" strokeWidth="0.1" strokeDasharray="1,3" />
          <path d="M40,0 L40,100" stroke="#4f46e5" strokeWidth="0.1" strokeDasharray="1,3" />
          <path d="M60,0 L60,100" stroke="#4f46e5" strokeWidth="0.1" strokeDasharray="1,3" />
          <path d="M80,0 L80,100" stroke="#4f46e5" strokeWidth="0.1" strokeDasharray="1,3" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center dark:text-white text-glow"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Prizes
        </motion.h2>
        
        <motion.div 
          className="max-w-4xl mx-auto mb-16 backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 p-6 rounded-xl border border-blue-200 dark:border-blue-900 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-lg text-gray-700 dark:text-gray-300">
            <span className="inline-block mt-2 text-blue-600 dark:text-blue-400 font-medium">
              15 proposals will receive a cash prize to aid in prototype building. They will be selected based on standardized evaluation criteria.
            </span>
          </p>
        </motion.div>
        
        {/* Prize podium visualization */}
        <div className="flex flex-col md:flex-row justify-center items-end max-w-4xl mx-auto mb-8 gap-8">
          {prizeData.map((prize, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col items-center ${prize.order} relative`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Trophy icon with glow effect */}
              <motion.div 
                className={`w-28 h-28 hexagon bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6 shadow-glow relative overflow-hidden z-10`}
                animate={prize.position === "1st Prize" 
                  ? { scale: [1, 1.05, 1], boxShadow: ["0 0 10px rgba(59, 130, 246, 0.5)", "0 0 20px rgba(59, 130, 246, 0.7)", "0 0 10px rgba(59, 130, 246, 0.5)"] } 
                  : {}}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <i className={`${prize.iconClass} ${prize.iconSize} text-white`}></i>
                
                {/* Scanner line effect */}
                <div className="absolute inset-0 scanner-line"></div>
              </motion.div>
              
              {/* Prize podium */}
              <motion.div 
                className={`bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 w-72 ${prize.height} rounded-xl flex flex-col items-center justify-center px-6 py-8 shadow-lg border border-blue-200 dark:border-blue-900 backdrop-blur-sm relative overflow-hidden`}
                whileHover={{ 
                  boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)",
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Digital noise effect */}
                <div className="absolute inset-0 digital-noise"></div>
                
                <h3 className={`${prize.titleSize} font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600`}>
                  {prize.position}
                </h3>
                
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
                
                <p className={`${prize.amountSize} font-bold mb-6 text-gray-800 dark:text-white`}>
                  {prize.amount}
                </p>
                
                <div className={`bg-gradient-to-r from-blue-600 to-purple-600 w-full py-3 rounded-lg flex items-center justify-center text-white font-bold shadow-md`}>
                  {prize.title}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;