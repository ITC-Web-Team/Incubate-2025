import { useEffect, useRef } from "react";

const timelineData = [
  {
    date: "25/5/2025",
    title: "Announcement",
    description: ""
  },
  {
    date: "June & July",
    title: "Brainstorming sessions",
    description: "7th, 14th, 21st, 28th June & 5th July"
  },
  {
    date: "July 31st",
    title: "Proposal Submission Deadline",
    description: ""
  },
  {
    date: "August 14th",
    title: "Results Announced",
    description: ""
  },
  {
    date: "Aug 14 - Oct 21",
    title: "Prototype Building Phase",
    description: ""
  },
  {
    date: "October 21st",
    title: "Finals at JIPMER",
    description: ""
  }
];

const Timeline = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Event Timeline</h2>
        
        {/* ECG Timeline Visualization */}
        <div className="relative w-full mb-16 overflow-hidden">
          <svg className="w-full h-48" viewBox="0 0 1000 100" preserveAspectRatio="none">
            {/* ECG baseline */}
            <line x1="0" y1="50" x2="1000" y2="50" stroke="#e2e8f0" strokeWidth="2" />
            
            {/* ECG pattern */}
            <path 
              className="ecg-line" 
              d="M0,50 L100,50 L120,50 L130,20 L140,80 L150,30 L160,70 L170,50 L200,50 L300,50 L320,50 L330,20 L340,80 L350,30 L360,70 L370,50 L400,50 L500,50 L520,50 L530,20 L540,80 L550,30 L560,70 L570,50 L600,50 L700,50 L720,50 L730,20 L740,80 L750,30 L760,70 L770,50 L800,50 L900,50 L920,50 L930,20 L940,80 L950,30 L960,70 L970,50 L1000,50" 
              fill="none" 
              stroke="#0070f3" 
              strokeWidth="2" 
            />
          </svg>
          
          {/* Timeline points */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8">
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[calc(100%+20px)] w-4 h-4 bg-primary rounded-full"></div>
                <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
                  <h4 className="font-bold text-primary">{item.date}</h4>
                  <p className="text-sm">{item.title}</p>
                  {item.description && (
                    <p className="text-xs text-gray-500">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
