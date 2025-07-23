import ApurbaSastryImg from "@/assets/Faculty/Apurba.png";
import UshaDeviImg from "@/assets/Faculty/usha.png";
import NishadPlakkalImg from "@/assets/Faculty/Nishad.png";
import SubithaLImg from "@/assets/Faculty/Subitha.png";
import HariswarPTImg from "@/assets/Faculty/Hariswar.png";
import KarthikeyanMImg from "@/assets/Faculty/Karthikeyan.png";
import ShuvadeepGangulyImg from "@/assets/Faculty/Shuvadeep.png";
import MSGopalakrishnanImg from "@/assets/Faculty/Gopalakrishnan.png";
import ArpithaAnantharajuImg from "@/assets/Faculty/Arpitha.jpg";
import SasirekhaRengarajImg from "@/assets/Faculty/Sasirekha.png";
import SwaminathanKImg from "@/assets/Faculty/Swaminathan.jpg";
import SivamurukanPalaniswamyImg from "@/assets/Faculty/Sivamurukan.png";
import BhagwatiPrasadPantImg from "@/assets/Faculty/Bhagwati.png";
import YaminiMImg from "@/assets/Faculty/yamini.jpg";

export interface FacultyMember {
  name: string;
  description: string;
  image: string; // Will be the imported image variable e.g., ApurbaSastryImg
  designation?: string;
}

export interface ThemeData {
  slug: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  focusPoints: string[];
  faculty: FacultyMember[];
  image?: string; // Optional main theme image
  challenges?: string[];
  resources?: string[];
  tags?: string[];
  mentors?: string;
  outcomes?: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  videoId?: string;
}

export const themesData: ThemeData[] = [
  {
    slug: "infection-control-critical-care",
    title: "Infection Control and Critical Care",
    icon: "ri-shield-flash-line",
    color: "bg-red-500",
    description: "This theme covers all aspects of infection control, from preventing Healthcare Associated Infections (HAIs) to combating the rise of multi drug resistant (MDR) organisms. HAIs can escalate to sepsis, a life threatening condition requiring urgent, multi organ system interventions. With critically ill patients needing continuous monitoring, there is a pressing need for smart critical care solutions that use AI, sensors, and predictive tools to detect deterioration early and guide timely intervention. This theme calls for innovations that prevent HAIs, address antimicrobial resistance (AMR), and enhance critical care through intelligent, tech driven monitoring systems.",
    focusPoints: [
      "Detection and surveillance of Hospital Acquired Infections (HAIs)",
      "Tracking and addressing the emergence of Multi Drug Resistant (MDR) pathogens",
      "Early identification and prediction of sepsis in hospitalized patients",
      "Continuous, multi parameter monitoring in critical care settings",
      "Integrated clinical data analysis for timely intervention and improved ICU outcomes"
    ],
    faculty: [
      {
        name: "Dr. Apurba Sastry",
        designation: "Department of Microbiology",
        description: "Dr. Apurba Sankar Sastry, Additional Professor of Microbiology at JIPMER, is a leading expert in hospital infection control, antimicrobial resistance (AMR), and antimicrobial stewardship. He heads the Hospital Infection Control Unit and serves as the AMS Lead at JIPMER, driving key strategies against HAIs and MDR pathogens. A renowned author, his textbooks—used widely across India—include Essentials of Medical Microbiology and Essentials of Hospital Infection Control. His work bridges clinical practice, policy, and education to strengthen infection prevention.",
        image: ApurbaSastryImg,
      },
    ],
    videoId: "4vgpvLimZWQ",
  },
  {
    slug: "neonatal-infant-care",
    title: "Neonatal and Infant Care Technologies",
    icon: "ri-hospital-line",
    color: "bg-pink-500",
    description: "This broad theme encompasses multi organ system technologies and innovations for neonatal and infant care, with key intersections in pediatrics. Neonates, particularly preterm and low birth weight infants, are highly vulnerable to temperature instability, infections, and inadequate nutrition. This theme focuses on innovative technologies that support essential interventions like Kangaroo Mother Care (KMC), breastfeeding, sepsis detection, thermoregulation, and hygiene to reduce neonatal mortality and enhance the quality of care, especially in resource limited settings.",
    focusPoints: [
      "Umbilical cord care",
      "Maintaining thermal stability",
      "Early identification of Neonatal shock and sepsis",
      "Neonatal Infections",
      "Neonatal Nutrition and Follow up",
      "Breast Feeding and Kangaroo Mother Care",
      "Infant care and intersections in Paediatrics"
    ],
    faculty: [
      {
        name: "Dr. Usha Devi R",
        designation: "Department of Neonatology",
        description: "Dr. Usha Devi R is a dedicated neonatologist and Assistant Professor in the Department of Neonatology at JIPMER, Puducherry. She holds an MBBS, MD in Pediatrics, DNB (Pediatrics), DM (Neonatology), DNB (Neonatology), PGDE, and AFAMS. Her clinical involvement includes running the Newborn Follow-up Clinic and the Fetal Medicine/Perinatology Clinic, contributing significantly to both acute and long-term neonatal care. Her areas of special interest include extreme preterm care, necrotizing enterocolitis, neonatal resuscitation, clinical trials, quality improvement, and basic science research. A passionate educator and researcher, Dr. Usha has authored over 58 original articles, 10 book chapters, and one book. She actively contributes to academic advancement through her teaching and research efforts.",
        image: UshaDeviImg,
      },
      {
        name: "Dr. Nishad Plakkal",
        designation: "Department of Neonatology",
        description: "Dr. Nishad Plakkal is a renowned neonatologist and academic leader, currently serving as Additional Professor and Head of the Department of Neonatology at JIPMER, Puducherry. He also holds the role of Associate Dean (Research). Dr. Plakkal completed his MBBS and MD (Pediatrics) in India, followed by advanced residency and fellowship training in Neonatal-Perinatal Medicine in Alberta, Canada. His clinical and academic focus lies in continuous quality improvement, neonatal intensive care, and training the next generation of pediatric and neonatal clinicians. Dr. Plakkal plays a pivotal role in advancing research and care standards in neonatal medicine, both nationally and internationally.",
        image: NishadPlakkalImg,
      },
    ],
    videoId: "amB08lm3TLs",
  },
  {
    slug: "disease-surveillance-outbreak-detection",
    title: "Integrated Disease Surveillance, Management, and Outbreak Detection",
    icon: "ri-radar-line",
    color: "bg-yellow-500",
    description: "This theme focuses on comprehensive infectious disease surveillance and management to strengthen the capacity of health systems to detect, respond to, and manage outbreaks with speed and precision. It covers a wide range of infectious diseases, with a special emphasis on vector borne diseases (VBDs) and emerging threats like melioidosis. Participants are encouraged to develop real time surveillance platforms, early warning systems, predictive models for disease hotspots, and rapid, point of care diagnostic tools to ensure outbreaks are contained swiftly, minimizing transmission and improving public health outcomes. This theme includes all infectious diseases related problem statements.",
    focusPoints: [
      "Early Warning Systems for Outbreak Detection and management",
      "Surveillance, Prevention, and Diagnosis of Vector Borne Diseases",
      "Real time outbreak and vector surveillance using digital tools",
      "Rapid, point of care diagnostics for diseases like melioidosis",
      "Prediction of disease hotspots",
      "Comprehensive surveillance, diagnosis and management modalities for a wide range of infectious diseases"
    ],
    faculty: [
      {
        name: "Dr. Subitha L",
        designation: "Department of Preventive and Social Medicine",
        description: "Dr. Subitha L is an accomplished public health professional serving as Additional Professor in the Department of Preventive and Social Medicine. She holds MBBS, MD, and DNB qualifications. Her core areas of expertise include non-communicable diseases, public health nutrition, health promotion, and physical activity. Dr. Subitha has made significant contributions to the field through research, training, and policy-level engagement, with over 120 scientific publications to her credit. She continues to play a vital role in strengthening preventive healthcare systems and promoting sustainable health practices at the community and population levels.",
        image: SubithaLImg,
      },
      {
        name: "Dr. Hariswar P T",
        designation: "Department of Medicine",
        description: "Dr. Hariswar P T is an Assistant Professor in the Department of Medicine at JIPMER, Pondicherry, and a faculty member in the Medical Intensive Care Unit. He holds an MBBS and MD in Medicine, with a strong academic and clinical foundation in neuroimmunology, genetic disorders, sepsis, and antimicrobial stewardship. A graduate of Govt. Vellore Medical College , he completed his postgraduate training at JIPMER in 2020. He served as a Senior Resident in the Department of Medicine from August 2020 to November 2023 and underwent three years of intensive training in critical care. He joined JIPMER as faculty in December 2023 and has six publications to his credit.",
        image: HariswarPTImg,
      },
    ],
  },
  {
    slug: "vision-health-children",
    title: "Advancing Smart Screening and Diagnostics in Ophthalmology and Integrated Solutions for Neurological Disorders",
    icon: "ri-eye-line",
    color: "bg-green-500",
    description: "This theme focuses on innovative screening, diagnostic and solutions for management in two critical areas: vision health and neurological disorders. For ophthalmology, the emphasis is on early, child friendly detection of refractive errors and amblyopia and congenital eye diseases to improve long term outcomes. It also has verticals extending to cataract, glaucoma, retinal diseases and less common Ocular pathologies. This theme is extended to include the development of accessible and accurate screening and diagnostic tools for a range of neurological conditions, addressing the need for timely detection and intervention in both pediatric and adult populations.",
    focusPoints: [
      "Screening and diagnosis of Ocular diseases",
      "Early detection of congenital and developmental eye diseases",
      "Innovative methods for pediatric friendly vision assessment",
      "Accessible diagnosis and management of neurological disorders.",
      "Integrated platforms combining ophthalmological and neurological data for comprehensive diagnosis."
    ],
    faculty: [
      {
        name: "Dr. Karthikeyan M",
        designation: "Department of Opthalmology",
        description: "Dr. Karthikeyan M is an Assistant Professor of Ophthalmology at JIPMER, Pondicherry. He completed his M.B.B.S from Thanjavur Medical College and MD Ophthalmology from the prestigious R.P. Centre, AIIMS New Delhi. He further specialized in Glaucoma, Pediatric Ophthalmology, and Neuro-ophthalmology, completing FAICO (Glaucoma) and senior residency at AIIMS. His research has earned him the “Shri Janardhan Prasad Glaucoma Award” and the Young Researcher Award 2023. As a mentor for INCUBATE, he brings expertise in childhood vision disorders, guiding innovations in early, accessible, and child-friendly screening solutions to improve pediatric eye health outcomes.",
        image: KarthikeyanMImg,
      },
    ],
    videoId: "vHjd-fdMA9o",
  },
  {
    slug: "clinical-trial-design",
    title: "Clinical Trial Innovations: Enhancing Recruitment, Retention, and Adherence",
    icon: "ri-flask-line",
    color: "bg-blue-500",
    description: "This theme addresses critical challenges in clinical research by focusing on innovations in trial design and execution. Success depends on efficient recruitment, randomization, monitoring, and long term retention of participants. With a growing emphasis on patient centric approaches, this theme seeks solutions to improve participant engagement, prevent dropouts, ensure protocol adherence, and enhance the overall quality and efficiency of clinical trials.",
    focusPoints: [
      "Patient recruitment",
      "Randomization",
      "Long term follow up and prevention of non compliance",
      "Clinical trial tracker",
      "Real time monitoring systems for trial data, patient adherence, and safety.",
      "Software that integrates all above mentioned focus points"
    ],
    faculty: [
      {
        name: "Dr. Shuvadeep Ganguly",
        designation: "Department of Medical Oncology",
        description: "Dr. Shuvadeep Ganguly is an Assistant Professor in the Department of Medical Oncology at JIPMER, Puducherry. A distinguished alumnus of AIIMS, New Delhi, he holds a DM in Medical Oncology and has made significant contributions to cancer research and clinical care. His areas of interest include pediatric oncology, solid tumors, and evidence-based cancer management tailored to the Indian context. Dr. Ganguly has published extensively in reputed journals and advocates for India-specific treatment guidelines, especially in pediatric cancers like retinoblastoma. With a strong academic and clinical background, he continues to shape the future of oncology through teaching, research, and compassionate care.",
        image: ShuvadeepGangulyImg,
      },
    ],
    videoId: "A8Xn_7kkNx8",
  },
  {
    slug: "smart-surgery-safer-operating-theaters",
    title: "Smart Surgery, Safer Operating Theaters, and Specialty Specific Surgical Innovations",
    icon: "ri-robot-line",
    color: "bg-indigo-500",
    description: "This theme explores innovations across the entire surgical continuum, from pre operative planning to post operative recovery. It focuses on advancing minimally invasive techniques, developing smart anesthesia and patient monitoring systems, and creating integrated operating room platforms for workflow efficiency. Participants are encouraged to reimagine surgical instruments, robotics, and AI driven decision support systems to prevent errors, enhance precision, and improve safety, with opportunities for solutions tailored to specific surgical specialties.",
    focusPoints: [
      "Improving ergonomics for prolonged surgeries",
      "Real time intraoperative malignancy diagnostics",
      "Integrated communication tools for seamless OR team coordination",
      "Innovations to strengthen sterility and infection control in the OR",
      "Advanced patient monitoring tools for improved outcomes",
      "Cognitive support tools for managing anesthetic data overload",
      "Examiner and patient centric tools for cervical assessment",
      "Improvement in OT tools and technology",
      "Smart Anaesthesia monitoring and crisis management in the OT",
      "AI driven systems for surgical error prevention and decision support",
      "Development of innovations tailored to specific specialties."
    ],
    faculty: [
      {
        name: "Dr. M. S. Gopalakrishnan",
        designation: "Department of Neurosurgery",
        description: "Dr. M. S. Gopalakrishnan is a distinguished neurosurgeon, serving as Professor in the Department of Neurosurgery. With academic credentials including MBBS, MS in General Surgery, MCh in Neurosurgery, and DNB in Neurosurgery, he brings decades of clinical and academic excellence to his practice. His clinical interests span across brain tumors, neurotrauma, vascular neurosurgery, and movement disorders. An active contributor to neurosurgical research, Dr. Gopalakrishnan has co-authored several notable publications, including studies on decompressive craniectomy and spinal aneurysms, with articles published in Frontiers in Neurology and Journal of Neurosurgery: Spine.",
        image: MSGopalakrishnanImg,
      },
      {
        name: "Dr. Arpitha Anantharaju",
        designation: "Department of Obstetrics and Gynaecology",
        description: "Dr. Arpitha Anantharaju is an Associate Professor in Obstetrics and Gynaecology with an MCh in Gynaecologic Oncology. Her clinical interests include cytoreductive surgery, preventive and palliative cancer care, and reproductive outcomes in oncology. She has published extensively on topics such as endometriosis-related malignancies, chemo-resistant gestational neoplasms, and HPV vaccination. A committed academician and clinician, she continues to make impactful contributions to women's health and gynecologic oncology.",
        image: ArpithaAnantharajuImg,
      },
    ],
    videoId: "Xa4_ZEc-NQg"
  },
  {
    slug: "hypertensive-disorders-pregnancy",
    title: "Hypertension in Pregnancy and Maternal Co morbid Conditions: Integrated Monitoring and Management",
    icon: "ri-women-line",
    color: "bg-purple-500",
    description: "This theme focuses on developing technologies for the effective monitoring and management of high risk pregnancies. While the primary focus is on hypertensive disorders, which pose serious risks to both mother and baby, the theme also addresses other significant maternal comorbidities (e.g., gestational diabetes, cardiac conditions, autoimmune and renal diseases). The goal is to create solutions that enable early risk stratification, continuous remote monitoring, and timely intervention to improve maternal and fetal outcomes, especially in low resource settings.",
    focusPoints: [
      "Early risk stratification and screening",
      "Remote and continuous blood pressure monitoring",
      "Integrated maternal fetal monitoring platforms",
      "Novel technology for point of care diagnosis and risk stratification for Pre eclampsia",
      "Clinical decision support for timely intervention",
      "Patient education and self management tools",
      "Integrated monitoring solutions for other maternal comorbidities like gestational diabetes, cardiac conditions, autoimmune and renal diseases"
    ],
    faculty: [
      {
        name: "Dr. Sasirekha Rengaraj",
        designation: "Department of Obstetrics and Gynaecology",
        description: "Dr. Sasirekha R is a Professor in the Department of Obstetrics and Gynaecology at JIPMER, with a keen focus on high-risk pregnancy care, obstetric medicine, emergency obstetrics, and quality improvement in maternal health. She is actively involved in clinical services, including a dedicated postnatal clinic, and has contributed extensively to academic research with 19 publications in national and international journals. Her work spans a wide range of topics, including hypertensive disorders in pregnancy, maternal outcomes in twin gestations, and atypical clinical presentations in obstetrics. Dr. Sasirekha is known for her patient-centered approach and dedication to improving maternal and perinatal outcomes.",
        image: SasirekhaRengarajImg,
      },
    ],
    videoId: "FyEIh2W-a9Q"
  },
  {
    slug: "pharmacovigilance-cancer-treatment",
    title: "Optimizing Patient Safety and Toxicity Management in Oncotherapy via Integrated Pharmacovigilance, with Extensions to Rheumatology and Other Chronic Disorders",
    icon: "ri-capsule-line",
    color: "bg-teal-500",
    description: "This theme targets patient safety and the management of treatment related toxicity, with a primary focus on cancer therapies. Cancer treatment involves complex regimens with a wide spectrum of adverse effects. This theme seeks integrated systems to monitor, predict, and manage these toxicities in real time. The adaptable frameworks developed here are also applicable to managing adverse effects in rheumatology and other chronic disorders where patients undergo long term, complex treatment protocols.",
    focusPoints: [
      "Real time monitoring of adverse effects from chemotherapy, radiation, and surgery",
      "Dermatological pharmacovigilance for skin related toxicities",
      "Predictive models for patient specific side effect risks",
      "Management of long term sequelae and survivorship care",
      "Integrated tools for tracking and reporting across therapy modalities",
      "Adaptable pharmacovigilance frameworks for managing toxicities in rheumatology and other chronic diseases."
    ],
    faculty: [
      {
        name: "Dr. Swaminathan K",
        designation: "Department of Medical Oncology",
        description: "Dr. Swaminathan K is an Assistant Professor in the Department of Medical Oncology at JIPMER, specializing in pediatric oncology. With an MD in Pediatrics and a DM in Pediatric Oncology, his key areas of interest include pediatric leukemias, neuroblastomas, brain tumors, sarcomas, and supportive care. He leads specialty clinics for pediatric cancers. Actively involved in national academic circles, he serves on the NHL subcommittee of the Indian Pediatric Hematology Oncology Group (InPHOG) and was Joint Organizing Secretary of PHOCON 2023.",
        image: SwaminathanKImg,
      },
    ],
    videoId: "2K2G05JK4G0",
  },
  {
    slug: "low-cost-cpr-innovation",
    title: "Affordable Innovations for CPR, Emergency Response, and Life Saving Interventions",
    icon: "ri-heart-pulse-line",
    color: "bg-orange-500",
    description: "This theme is focused on developing cost effective solutions, devices, and training tools to improve outcomes in medical emergencies. It covers the full spectrum of emergency care, from Cardiopulmonary Resuscitation (CPR) to first response systems and other critical life saving interventions. Innovations may include real time feedback devices for CPR, mobile apps for guiding emergency response, or low cost manikins for accessible training, aiming to enhance survival rates by making life saving skills and technologies more effective and widely available.",
    focusPoints: [
      "Affordable real time feedback devices and mobile applications to guide high quality CPR.",
      "Low cost and accessible training solutions, such as smart manikins and remote certification tools.",
      "Devices and software adapted for age specific resuscitation in pediatric and infant emergencies.",
      "Technologies to improve emergency communication and shorten response times, such as smart dispatch or citizen responder networks.",
      "Cost effective devices for critical life saving interventions beyond CPR, like hemorrhage control, airway management and transfusion medicine",
      "Integrated platforms for data recording and analysis to enhance the performance of Emergency Medical Systems (EMS) and Triaging"
    ],
    faculty: [
      {
        name: "Dr. Sivamurukan Palanisamy",
        designation: "Department of Paediatrics",
        description: "Dr Sivamurukan Palanisamy is an Assistant Professor in the Department of Pediatrics, JIPMER. Having completed his DM in Pediatric Critical Care, he is passionate about finding innovative and cost effective interventions in critical care and the ICU. Having worked with UG students for ICMR and other research projects, he is excited to mentor the budding doctors and engineers and nurture their ideas to improve healthcare.",
        image: SivamurukanPalaniswamyImg,
      },
    ],
  },
  {
    slug: "structural-heart-diseases",
    title: "Targeted Innovations in Vascular Health and Structural Heart Diseases: Screening, Diagnosis, and Comprehensive Care",
    icon: "ri-heart-3-line",
    color: "bg-cyan-500",
    description: "This theme addresses the significant and often silent health burden of Vascular diseases, such as CAD, Aneurysms, Vasculitis, Cerebro Vascular Diseases and beyond. The theme also looks at structural Heart Diseases (SHD), like congenital defects, valvular disorders and cardiomyopathies. A critical challenge across both domains is late or missed diagnosis, particularly in low resource settings, leading to severe complications and fragmented care. This theme calls for integrated solutions that tackle the entire care continuum, from community level screening and rapid point of care diagnosis to long term management and follow up.",
    focusPoints: [
      "Low Cost Community Screening",
      "Point of Care Diagnostics",
      "Remote Patient Monitoring",
      "Risk Stratification",
      "Targeted Intervention for High Risk Groups",
      "Integrated Digital Health Platforms",
      "Clinical Decision Support",
      "Ensuring Long Term Care Continuity",
      "Wearable sensors",
      "Wide range of disease specific solutions for both SHD and Vascular Disorders"
    ],
    faculty: [
      {
        name: "Dr. Bhagwati prasad pant",
        designation: "Department of Cardiology",
        description: "Dr. Bhagwati Pant is an Assistant Professor in the Department of Cardiology with a strong foundation in adult cardiology and interventional techniques. His core interests lie in structural heart disease, complex coronary interventions, coronary imaging, and heart failure management. Having completed his DM Cardiology residency at JIPMER (2018–2021), he went on to pursue a Post-Doctoral Fellowship in Adult Cardiology and Interventions at SCTIMST, Thiruvananthapuram in 2022. Dr. Pant is actively engaged in clinical research and continues to contribute to advancements in interventional and diagnostic cardiology.",
        image: BhagwatiPrasadPantImg,
      },
      {
        name: "Dr. Yamini M",
        designation: "Communicable Disease and Surveillance Division, JIPMER International School of Public Health",
        description: "Dr. Yamini M is a dedicated public health professional serving as Assistant Professor in the Communicable Disease and Surveillance Division of JIPMER INTERNATIONAL School of Public Health. She holds an MD in Community Medicine and brings a strong focus on communicable diseases, health surveillance, and gender-based health disparities. Her interests include infectious disease modelling, vaccinology and improving access to care for vulnerable populations. Dr. Yamini actively contributes to academic initiatives through research, training, and intersectoral collaborations. Her teaching and mentorship continue to inspire the next generation of public health professionals.",
        image: YaminiMImg,
      }
    ],
  },
];

// Export all unique JIPMER faculty mentors from all themes
export const jipmerMentors: FacultyMember[] = (() => {
  const allMentors = ([] as FacultyMember[]).concat(
    ...themesData.map(theme => theme.faculty || [])
  );
  const seen = new Set<string>();
  return allMentors.filter(mentor => {
    if (!mentor || seen.has(mentor.name)) return false;
    seen.add(mentor.name);
    return true;
  });
})();
