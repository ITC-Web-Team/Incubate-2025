// client/src/data/facultyData.ts
import KshitijImage from "@/assets/Faculty/Kshitij.jpg";
import NirmalImage from "@/assets/Faculty/Nirmal.png";
import AmbarishImage from "@/assets/Faculty/Ambarish.png";
import LaxmeeshaImage from "@/assets/Faculty/Laxmeesha.jpg";

export interface FacultyMentor {
  name: string;
  role: string;
  title: string;
  affiliation: string;
  researchFocus: string;
  contact: string;
  researchArea: string;
  bio: string[]; // Array of paragraphs
  image: string; 
  websiteUrl?: string;
}

export const iitBombayMentors: FacultyMentor[] = [
  {
    name: "Prof. Kshitij Jadhav",
    role: "",
    title: "Assistant Professor",
    affiliation: "Koita Centre for Digital Health",
    researchFocus: "Machine learning in healthcare, neuropsychiatric disorders, multimodal data integration, early life stress",
    contact: "",
    researchArea: "Healthcare Analytics & AI/ML, Healthcare Applications, Large Language Modelling",
    bio: [
      "Dr. Kshitij Jadhav is an Assistant Professor at the Koita Centre for Digital Health, IIT Bombay. His research focuses on applying machine learning to address critical questions in healthcare, particularly in understanding neuropsychiatric disorders and the role of early life stress in mental health outcomes. Dr. Jadhav also works on developing methods for multimodal data integration to advance healthcare diagnostics and interventions.",
      "His interdisciplinary research bridges neuroscience and computational techniques, leveraging AI and machine learning to analyze complex healthcare data. Dr. Jadhav’s work contributes to creating predictive models and personalized approaches for mental health management.",
      "Dr. Jadhav collaborates with clinicians and researchers to translate his findings into practical applications that improve healthcare delivery. He has been recognized for his innovative contributions to AI in healthcare and his efforts to address mental health challenges through technology."
    ],
    image: KshitijImage,
    websiteUrl: "http://www.kcdh.iitb.ac.in/kshitij" 
  },
  {
    name: "Prof. Nirmal Punjabi",
    role: "",
    title: "Assistant Professor",
    affiliation: "Koita Centre for Digital Health",
    researchFocus: "Optical sensing, digital diagnostics, telemedicine, wearable healthcare devices",
    contact: "",
    researchArea: "Healthcare Applications, Consumer Health & Tele-Medicine, Healthcare Analytics & AI/ML",
    bio: [
      "Dr. Nirmal Punjabi is an Assistant Professor at the Koita Centre for Digital Health at IIT Bombay. His research focuses on optical sensing and digital diagnostics, with an emphasis on telemedicine and wearable healthcare devices. Dr. Punjabi’s work aims to develop innovative tools and technologies for improving healthcare monitoring and diagnostics.",
      "His interdisciplinary research integrates advanced optical techniques and engineering principles to address challenges in non-invasive diagnostics and telemedicine. Dr. Punjabi’s contributions include designing systems for real-time health monitoring and creating accessible solutions for remote healthcare delivery.",
      "Dr. Punjabi actively collaborates with clinicians, researchers, and industry partners to translate his research into impactful healthcare applications. He has been recognized for his advancements in optical biosensing and its applications in improving healthcare access and quality."
    ],
    image: NirmalImage,
    websiteUrl: "https://www.linkedin.com/in/npunjabi108/"
  },
  {
    name: "Prof. Ambarish Kunwar",
    role: "",
    title: "Professor",
    affiliation: "Department of Biosciences and Bioengineering, IIT Bombay",
    researchFocus: "Biophysics, computational biology, cellular mechanics, molecular motors",
    contact: "",
    researchArea: "Computational Biology & Bioinformatics, Healthcare Applications",
    bio: [
      "Dr. Ambarish Kunwar is a Professor in the Department of Biosciences and Bioengineering at IIT Bombay. His research focuses on biophysics and computational biology, with an emphasis on cellular mechanics and the role of molecular motors in intracellular transport. Dr. Kunwar’s work aims to unravel the complex interactions that drive cellular processes and their implications for health and disease.",
      "His interdisciplinary approach integrates experimental biophysics and computational modeling to study intracellular dynamics and force generation by molecular motors. Dr. Kunwar’s research contributes to advancing our understanding of cellular behavior and its applications in developing therapeutic strategies.",
      "Dr. Kunwar actively collaborates with researchers across disciplines to bridge the gap between fundamental science and applied healthcare solutions. He has been recognized for his innovative contributions to biophysics and computational biology."
    ],
    image: AmbarishImage,
    websiteUrl: "https://www.bio.iitb.ac.in/people/faculty/kunwar-ambarish/" // Replace with actual personal website if available
  },
  {
    name: "Prof. Laxmeesha Somappa",
    role: "",
    title: "Assistant Professor",
    affiliation: "Department of Electrical Engineering, IIT Bombay",
    researchFocus: "Low-power biomedical circuits, analog and mixed-signal IC design, MEMS interfaces, neuromodulation systems",
    contact: "",
    researchArea: "Healthcare Devices & Embedded Systems, Biomedical Instrumentation, Sensor Interfaces",
    bio: [
      "Dr. Laxmeesha Somappa is an Assistant Professor in the Department of Electrical Engineering at IIT Bombay. His research centers on designing ultra-low power analog and mixed-signal integrated circuits for biomedical applications, including neuromodulation and biosensing systems. He leads the BioNICS group at IIT Bombay and manages the PCB Lab, contributing to cutting-edge development in biomedical circuit design.",
      "Dr. Laxmeesha’s academic journey spans premier institutions including IIT Madras and IIT Bombay, with international research experience at the University of Cambridge and EPFL Switzerland. His work focuses on delta-sigma data converters, MEMS interface circuits, and embedded systems tailored for healthcare needs. He also contributes to the IEEE CAS Society and Sensors Council, fostering collaboration at the intersection of electronics and life sciences.",
      "His interdisciplinary work bridges analog IC design with real-world biomedical applications, offering impactful solutions in healthcare diagnostics and monitoring."
    ],
    image: LaxmeeshaImage,
    websiteUrl: "https://homepages.iitb.ac.in/~laxmeesha/" // Replace with actual personal website if available
  }
];
