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
    title: "Infection control & Critical Care Monitoring",
    icon: "ri-shield-flash-line",
    color: "bg-red-500",
    description: "Hospital-Acquired Infections (HAIs), often caused by multi-drug resistant (MDR) organisms, are major challenges in healthcare settings. These infections can escalate to sepsis, a life-threatening condition requiring urgent, intensive care. Critically ill patients need continuous monitoring across multiple parameters, but traditional methods may miss early warning signs. There’s a growing need for smart critical care solutions using AI, sensors, and predictive tools to detect deterioration early and guide timely intervention. This theme calls for innovations that prevent HAIs, address AMR, and enhance critical care through intelligent, tech-driven monitoring systems.",
    focusPoints: [
      "Detection and surveillance of Hospital-Acquired Infections (HAIs)",
      "Tracking and addressing the emergence of Multi-Drug Resistant (MDR) pathogens",
      "Early identification and prediction of sepsis in hospitalized patients",
      "Continuous, multi-parameter monitoring in critical care settings",
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
    icon: "ri-hospital-line", // Changed from ri-baby-line
    color: "bg-pink-500",
    description: "Neonates, particularly preterm and low-birth-weight infants, are highly vulnerable to temperature instability, infections, and inadequate nutrition. This theme focuses on innovative technologies that support essential interventions like Kangaroo Mother Care (KMC), breastfeeding, sepsis detection, thermoregulation, and hygiene. By addressing critical challenges in neonatal care—such as early sepsis identification, maintaining warmth, monitoring umbilical flow, and improving feeding and sanitation—this theme offers vast potential to reduce neonatal mortality and enhance the quality of care in resource-limited settings.",
    focusPoints: [
      "Umbilical cord care",
      "Maintaining thermal stability",
      "Early identification of Neonatal shock and sepsis",
      "Neonatal Infections",
      "Neonatal Nutrition and Follow up",
      "Breast Feeding and Kangaroo Mother Care"
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
    title: "Integrated Disease Surveillance and Outbreak Detection",
    icon: "ri-radar-line",
    color: "bg-yellow-500",
    description: "This theme aims to enhance the capacity of health systems to detect, respond to, and manage infectious disease outbreaks with greater speed and precision. With the increasing threat of vector-borne and emerging infections like melioidosis, the focus is on real-time surveillance, early warning systems, and rapid, point-of-care diagnostic tools. Participants are encouraged to explore digital platforms for outbreak and vector monitoring, predictive models to identify disease hotspots, and integrated strategies for early intervention. By bridging surveillance with timely diagnosis and response, this theme envisions a future where outbreaks are contained swiftly, minimizing transmission and improving public health outcomes.",
    focusPoints: [
      "Early Warning Systems for Outbreak Detection and management",
      "Surveillance, Prevention, and Diagnosis of Vector-Borne Diseases",
      "Real-time outbreak and vector surveillance using digital tools",
      "Rapid, point-of-care diagnostics for diseases like melioidosis",
      "Prediction of disease hotspots"
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
    title: "Smart screening for Ocular diseases",
    icon: "ri-eye-line",
    color: "bg-green-500",
    description: `Ocular diseases such as refractive errors, cataract, and glaucoma are leading causes of visual impairment and blindness, yet many remain undiagnosed due to barriers like poor access, lack of awareness, and shortage of trained personnel. Early detection plays a critical role in preventing irreversible vision loss and improving quality of life. This theme focuses on innovative, accessible, and scalable screening solutions that leverage technology to detect ocular diseases at earlier stages, particularly in underserved and rural communities enabling timely intervention and improved eye health outcomes.`,
    focusPoints: [
      "Smart tools for refractive error screening in community and primary care settings",
      "Early detection technologies for cataract, including portable slit-lamp alternatives and AI-based image analysis",
      "Affordable, automated methods for glaucoma screening, including IOP monitoring and optic nerve imaging",
      "Early detection of congenital and developmental eye diseases",
      "Innovative methods for pediatric-friendly vision assessment"
    ],
    faculty: [
      {
        name: "Dr. Karthikeyan M",
        designation: "Department of Opthalmology",
        description: "Dr. Karthikeyan M is an Assistant Professor of Ophthalmology at JIPMER, Pondicherry. He completed his M.B.B.S from Thanjavur Medical College and MD Ophthalmology from the prestigious R.P. Centre, AIIMS New Delhi. He further specialized in Glaucoma, Pediatric Ophthalmology, and Neuro-ophthalmology, completing FAICO (Glaucoma) and senior residency at AIIMS. His research has earned him the “Shri Janardhan Prasad Glaucoma Award” and the Young Researcher Award 2023. As a mentor for INCUBATE, he brings expertise in childhood vision disorders, guiding innovations in early, accessible, and child-friendly screening solutions to improve pediatric eye health outcomes.",
        image: KarthikeyanMImg,
      },
    ],
  },
  {
    slug: "clinical-trial-design",
    title: "Clinical Trial Design- Recruitment and Execution",
    icon: "ri-flask-line",
    color: "bg-blue-500",
    description: "Clinical trial success heavily depends on efficient recruitment and seamless execution. Challenges like low enrollment rates, high dropout, and protocol deviations often hinder progress. With growing emphasis on patient-centric approaches and streamlined processes, there is significant scope to innovate trial design and implementation methods to enhance participant engagement, compliance, and overall trial efficiency.",
    focusPoints: [
      "Patient recruitment",
      "Randomization",
      "Long term follow up and prevention of non-compliance",
      "Clinical trial tracker"
    ],
    faculty: [
      {
        name: "Dr. Shuvadeep Ganguly",
        designation: "Department of Medical Oncology",
        description: "Dr. Shuvadeep Ganguly is an Assistant Professor in the Department of Medical Oncology at JIPMER, Puducherry. A distinguished alumnus of AIIMS, New Delhi, he holds a DM in Medical Oncology and has made significant contributions to cancer research and clinical care. His areas of interest include pediatric oncology, solid tumors, and evidence-based cancer management tailored to the Indian context. Dr. Ganguly has published extensively in reputed journals and advocates for India-specific treatment guidelines, especially in pediatric cancers like retinoblastoma. With a strong academic and clinical background, he continues to shape the future of oncology through teaching, research, and compassionate care.",
        image: ShuvadeepGangulyImg,
      },
    ],
  },
  {
    slug: "smart-surgery-safer-operating-theaters",
    title: "Smart Surgery and Safer Operating Theaters",
    icon: "ri-robot-line", // Changed from ri-scalpel-line
    color: "bg-indigo-500",
    description: "The evolution of surgery is being driven by advancements in minimally invasive techniques and smart operating environments. This theme brings together innovation in surgical tools, anesthesia safety, and intelligent operating room systems. Participants are encouraged to reimagine surgical instruments, endoscopic technologies, and integrated platforms that support precision and rapid recovery. Alongside, there is a focus on enhancing surgical safety through real-time monitoring, better team coordination, and smart anesthesia delivery and vigilance systems. By bridging surgical innovation with perioperative safety, this theme aims to transform patient outcomes and redefine how surgeries are performed in the future.",
    focusPoints: [
      "Improving ergonomics for prolonged surgeries",
      "Real-time intraoperative malignancy diagnostics",
      "Integrated communication tools for seamless OR team coordination",
      "Innovations to strengthen sterility and infection control in the OR",
      "Advanced patient monitoring tools for improved outcomes",
      "Cognitive support tools for managing anesthetic data overload",
      "Examiner- and patient-centric tools for cervical assessment",
      "Improvement in OT tools and technology",
      "Smart Anaesthesia monitoring and crisis management in the OT"
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
    title: "Monitoring and management of hypertensive disorders in Pregnancy",
    icon: "ri-women-line",
    color: "bg-purple-500",
    description: "Hypertensive disorders in pregnancy pose serious risks to both mother and baby. This theme focuses on developing medical technologies for effective monitoring and timely management to prevent complications. Solutions that enable early detection, continuous tracking, and better communication between patients and healthcare providers—especially in low-resource settings—can greatly improve maternal and fetal outcomes.",
    focusPoints: [
      "Early risk stratification and screening",
      "Remote and continuous blood pressure monitoring",
      "Integrated maternal-fetal monitoring platforms",
      "Novel technology for point of care diagnosis and risk stratification for Pre-eclampsia",
      "Clinical decision support for timely intervention",
      "Patient education and self-management tools"
    ],
    faculty: [
      {
        name: "Dr. Sasirekha Rengaraj",
        designation: "Department of Obstetrics and Gynaecology",
        description: "Dr. Sasirekha R is a Professor in the Department of Obstetrics and Gynaecology at JIPMER, with a keen focus on high-risk pregnancy care, obstetric medicine, emergency obstetrics, and quality improvement in maternal health. She is actively involved in clinical services, including a dedicated postnatal clinic, and has contributed extensively to academic research with 19 publications in national and international journals. Her work spans a wide range of topics, including hypertensive disorders in pregnancy, maternal outcomes in twin gestations, and atypical clinical presentations in obstetrics. Dr. Sasirekha is known for her patient-centered approach and dedication to improving maternal and perinatal outcomes.",
        image: SasirekhaRengarajImg,
      },
    ],
  },
  {
    slug: "pharmacovigilance-cancer-treatment",
    title: "Integrated Systems for Pharmacovigilance and Patient Safety in Cancer Treatment and Toxicity Management",
    icon: "ri-capsule-line",
    color: "bg-teal-500",
    description: "Cancer treatment often involves a combination of chemotherapy, radiotherapy, targeted therapy, and surgery—each with its own spectrum of adverse effects. From acute reactions like nausea, immunosuppression, and dermatological toxicities to long-term complications such as neuropathy, cardiotoxicity, infertility, and psychological distress, patients face a complex therapeutic journey. This theme emphasizes the need for integrated systems to monitor, predict, and manage these adverse outcomes in real-time. Innovations in pharmacovigilance, personalized risk assessment, and long-term survivorship care can enhance treatment safety, patient compliance, and overall quality of life across all oncological specialties.",
    focusPoints: [
      "Real-time monitoring of adverse effects from chemotherapy, radiation, and surgery",
      "Dermatological pharmacovigilance for skin-related toxicities",
      "Predictive models for patient-specific side-effect risks",
      "Management of long-term sequelae and survivorship care",
      "Integrated tools for tracking and reporting across therapy modalities"
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
    title: "Low-Cost Innovation for Cardiopulmonary Resuscitation (CPR)",
    icon: "ri-heart-pulse-line",
    color: "bg-orange-500",
    description: "This theme focuses on developing low-cost devices and software solutions to enhance the delivery, assessment, and monitoring of Cardiopulmonary Resuscitation (CPR) across all age groups—infants, children, and adults. It aims to support both real-life emergency scenarios and training simulations. Innovations may include tools for real-time feedback during CPR, mobile apps for recording and guiding interventions, or cost-effective manikins and sensors for simulation-based education. By enabling better assessment, timely interventions, and process monitoring, these solutions can improve outcomes in critical situations while making CPR training more accessible and effective, especially in resource-constrained settings.",
    focusPoints: [
      "Affordable real-time feedback systems to monitor compression depth, rate, and recoil",
      "Mobile applications for CPR guidance, performance tracking, and data recording",
      "Low-cost CPR training manikins with embedded sensors for simulation",
      "Devices or software for pediatric- and age-specific CPR adaptation",
      "Tools for remote CPR training and certification in resource-limited areas"
    ],
    faculty: [
      {
        name: "Dr. Sivamurukan Palaniswamy",
        designation: "Department of Paediatrics",
        description: "Dr Sivamurukan Palanisamy is an Assistant Professor in the Department of Pediatrics, JIPMER. Having completed his DM in Pediatric Critical Care, he is passionate about finding innovative and cost effective interventions in critical care and the ICU. Having worked with UG students for ICMR and other research projects, he is excited to mentor the budding doctors and engineers and nurture their ideas to improve healthcare.",
        image: SivamurukanPalaniswamyImg,
      },
    ],
  },
  {
    slug: "structural-heart-diseases", // Updated slug for clarity, or keep as cardiovascular-cerebrovascular-diseases if preferred
    title: "Targeted Innovation for Structural Heart Diseases: Screening, Diagnosis, and Follow-up",
    icon: "ri-heart-3-line", 
    color: "bg-cyan-500",
    description: "Structural heart diseases—including congenital defects, valvular disorders, and cardiomyopathies—are often underdiagnosed or diagnosed late, especially in low-resource settings. This theme focuses on addressing key gaps in the care pathway: limited early screening, delayed diagnosis, inadequate referral systems, and poor long-term follow-up. Participants are encouraged to identify bottlenecks in healthcare delivery and propose impactful solutions to improve detection, continuity of care, and outcomes for patients across age groups.",
    focusPoints: [
      "Missed or delayed diagnosis of congenital heart defects",
      "Limited access to cardiac screening in newborns and children",
      "Inadequate early detection of valvular and myocardial diseases",
      "Gaps in continuity of care after surgery or intervention"
    ],
    faculty: [
      {
        name: "Dr. Bhagwati prasad pant",
        designation: "Department of Cardiology",
        description: "Dr. Bhagwati Pant is an Assistant Professor in the Department of Cardiology with a strong foundation in adult cardiology and interventional techniques. His core interests lie in structural heart disease, complex coronary interventions, coronary imaging, and heart failure management. Having completed his DM Cardiology residency at JIPMER (2018–2021), he went on to pursue a Post-Doctoral Fellowship in Adult Cardiology and Interventions at SCTIMST, Thiruvananthapuram in 2022. Dr. Pant is actively engaged in clinical research and continues to contribute to advancements in interventional and diagnostic cardiology.",
        image: BhagwatiPrasadPantImg,
      },
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
