import aiHealthcareImg from "@/assets/themes/ai-healthcare.png";
import remoteMonitoringImg from "@/assets/themes/remote-monitoring.png";
import medicalDeviceImg from "@/assets/themes/medical-devices.png";

export const themesData = [
  {
    title: "AI in Healthcare Diagnostics",
    icon: "ri-mental-health-line",
    color: "bg-primary",
    description: "Develop cutting-edge AI algorithms and systems to enhance medical diagnostics, improve disease detection, and accelerate treatment planning through advanced image analysis and pattern recognition.",
    mentors: "Dr. Anita Singh (JIPMER), Prof. Rajiv Sharma (IIT-B)",
    outcomes: "Novel diagnostic tools, enhanced accuracy in disease detection, accessible AI diagnostic solutions for resource-limited settings",
    image: aiHealthcareImg,
    challenges: [
      "Integrating AI with existing healthcare workflows",
      "Ensuring accurate diagnosis across diverse patient populations",
      "Developing explainable AI for critical healthcare decisions",
      "Managing patient data privacy and security"
    ],
    resources: [
      "Access to anonymized medical imaging datasets",
      "Clinical validation environment at JIPMER",
      "High-performance computing resources at IIT Bombay"
    ],
    tags: ["Artificial Intelligence", "Machine Learning", "Medical Imaging", "Diagnostics"],
    difficulty: "Advanced"
  },
  {
    title: "Remote Patient Monitoring",
    icon: "ri-heart-pulse-line",
    color: "bg-secondary",
    description: "Create innovative solutions for continuous remote monitoring of patient health parameters that function effectively in areas with limited connectivity and healthcare infrastructure.",
    mentors: "Dr. Priya Mehta (JIPMER), Prof. Anil Kumar (IIT-B)",
    outcomes: "Telemedicine platforms, low-power wearable health monitors, edge computing solutions for health data analysis",
    image: remoteMonitoringImg,
    challenges: [
      "Designing for intermittent internet connectivity",
      "Maximizing battery life for remote devices",
      "Ensuring reliable data transmission in challenging environments",
      "Creating intuitive interfaces for diverse user populations"
    ],
    resources: [
      "Pilot deployment opportunities in rural healthcare settings",
      "IoT device development lab at IIT Bombay",
      "Clinical expertise and testing environments"
    ],
    tags: ["IoT", "Wearables", "Telemedicine", "Rural Healthcare"],
    difficulty: "Intermediate"
  },
  {
    title: "Surgical Robotics & Assistance",
    icon: "ri-robot-line",
    color: "bg-blue-600",
    description: "Develop next-generation surgical assistance technologies including robotic systems, AR/VR surgical guidance, and intelligent tools to enhance surgeon capabilities and improve patient outcomes.",
    mentors: "Dr. Suresh Kumar (JIPMER), Prof. Deepa Menon (IIT-B)",
    outcomes: "Surgical assistance tools, AR/VR surgical planning systems, minimally invasive robotic technologies",
    image: medicalDeviceImg,
    challenges: [
      "Achieving high precision and reliability in robotic systems",
      "Creating intuitive surgeon-machine interfaces",
      "Developing cost-effective solutions accessible beyond major hospitals",
      "Ensuring systems can adapt to different surgical scenarios"
    ],
    resources: [
      "Surgical simulation lab access",
      "Robotics expertise and development facilities",
      "Opportunities to observe real surgical workflows"
    ],
    tags: ["Robotics", "AR/VR", "Surgical Innovation", "Human-Machine Interface"],
    difficulty: "Advanced"
  },
  {
    title: "Smart Wearable Health Monitors",
    icon: "ri-health-book-line",
    color: "bg-green-600",
    description: "Design next-generation wearable devices for continuous health monitoring that are non-invasive, energy-efficient, and capable of tracking multiple vital parameters with clinical-grade accuracy.",
    mentors: "Dr. Rahul Gupta (JIPMER), Prof. Shalini Verma (IIT-B)",
    outcomes: "Multi-parameter wearable monitoring systems, real-time health analytics platforms, early warning systems for deteriorating health conditions",
    challenges: [
      "Achieving medical-grade accuracy in wearable form factors",
      "Balancing battery life with continuous monitoring needs",
      "Designing comfortable devices for long-term wear",
      "Developing algorithms to reduce false alarms while catching critical events"
    ],
    resources: [
      "Sensor technology lab and expertise",
      "Clinical validation opportunities",
      "Embedded systems development resources"
    ],
    tags: ["Wearables", "Sensor Technology", "Predictive Analytics", "Vital Signs"],
    difficulty: "Intermediate"
  },
  {
    title: "Medical Education Technologies",
    icon: "ri-microscope-line",
    color: "bg-purple-600",
    description: "Create immersive and interactive learning platforms that revolutionize medical education through technologies like AR/VR, 3D visualization, haptic feedback, and adaptive learning systems.",
    mentors: "Dr. Meera Iyer (JIPMER), Prof. Vikram Patel (IIT-B)",
    outcomes: "Immersive anatomy learning tools, surgical training simulators, adaptive medical curriculum platforms, virtual patient interactions",
    challenges: [
      "Creating realistic simulations of medical scenarios",
      "Developing haptic feedback for procedural training",
      "Validating educational effectiveness of new technologies",
      "Ensuring accessibility across different learning environments"
    ],
    resources: [
      "Medical education curriculum expertise",
      "VR/AR development lab access",
      "Student testing and feedback opportunities"
    ],
    tags: ["AR/VR", "Education Technology", "Simulation", "Interactive Learning"],
    difficulty: "Intermediate"
  }
];
