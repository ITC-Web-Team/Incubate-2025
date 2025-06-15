// client/src/data/facultyData.ts
import KshitijImage from "@/assets/Faculty/Kshitij.jpg";
import NirmalImage from "@/assets/Faculty/Nirmal.png";

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
    name: "Kshitij Jadhav",
    role: "Core Faculty",
    title: "Assistant Professor",
    affiliation: "Koita Centre for Digital Health",
    researchFocus: "Machine learning in healthcare, neuropsychiatric disorders, multimodal data integration, early life stress",
    contact: "kshitij.jadhav@iitb.ac.in",
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
    name: "Nirmal Punjabi",
    role: "Core Faculty",
    title: "Assistant Professor",
    affiliation: "Koita Centre for Digital Health",
    researchFocus: "Optical sensing, digital diagnostics, telemedicine, wearable healthcare devices",
    contact: "npunjabi@iitb.ac.in",
    researchArea: "Healthcare Applications, Consumer Health & Tele-Medicine, Healthcare Analytics & AI/ML",
    bio: [
      "Dr. Nirmal Punjabi is an Assistant Professor at the Koita Centre for Digital Health at IIT Bombay. His research focuses on optical sensing and digital diagnostics, with an emphasis on telemedicine and wearable healthcare devices. Dr. Punjabi’s work aims to develop innovative tools and technologies for improving healthcare monitoring and diagnostics.",
      "His interdisciplinary research integrates advanced optical techniques and engineering principles to address challenges in non-invasive diagnostics and telemedicine. Dr. Punjabi’s contributions include designing systems for real-time health monitoring and creating accessible solutions for remote healthcare delivery.",
      "Dr. Punjabi actively collaborates with clinicians, researchers, and industry partners to translate his research into impactful healthcare applications. He has been recognized for his advancements in optical biosensing and its applications in improving healthcare access and quality."
    ],
    image: NirmalImage,
    websiteUrl: "https://www.linkedin.com/in/npunjabi108/"
  }
];
