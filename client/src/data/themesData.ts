import aiHealthcareImg from "@/assets/themes/ai-healthcare.png";
import remoteMonitoringImg from "@/assets/themes/remote-monitoring.png";
import medicalDeviceImg from "@/assets/themes/medical-devices.png";

export const themesData = [
  {
    slug: "antimicrobial-resistance",
    title: "Combating Antimicrobial Resistance and Hospital Infections",
    icon: "ri-shield-cross-line",
    color: "bg-blue-500",
    description: "This theme revolves around prevention and management of Healthcare associated infections and emergence of MDR infections. Antimicrobial resistance (AMR) and hospital-acquired infections (HAIs) are escalating public health challenges that compromise patient safety and burden healthcare systems. This theme addresses the urgent need to identify, prevent, and control infections in clinical settings. Teams can also venture into prevention and treatment strategies for MDR infections which cause severe Hospital acquired infection.",
    image: remoteMonitoringImg,
    challenges: [
      "Prevention and management of Healthcare associated infections",
      "Emergence of MDR infections",
      "Identifying, preventing, and controlling infections in clinical settings",
      "Prevention and treatment strategies for MDR infections"
    ],
    resources: [], // Add relevant resources
    tags: ["AMR", "HAI", "Infection Control", "MDR"],
    mentors: "", // Add relevant mentors
    outcomes: "" // Add relevant outcomes
  },
  {
    slug: "sepsis-critical-care",
    title: "Early detection of sepsis and Intelligent Monitoring for Critical Care",
    icon: "ri-heart-pulse-line",
    color: "bg-red-500",
    description: "Sepsis remains a leading cause of ICU mortality, often progressing silently until it's too late. Critically ill patients require constant, high-stakes monitoring across multiple organ systems. This theme emphasizes the need for timely recognition, risk prediction, and comprehensive oversight to improve outcomes and optimize critical care delivery.",
    image: aiHealthcareImg,
    challenges: [
      "Timely recognition of sepsis",
      "Risk prediction for sepsis",
      "Comprehensive oversight for critically ill patients"
    ],
    resources: [], // Add relevant resources
    tags: ["Sepsis", "Critical Care", "Patient Monitoring"],
    mentors: "", // Add relevant mentors
    outcomes: "" // Add relevant outcomes
  },
  {
    slug: "neonatal-infant-care",
    title: "Neonatal and Infant Care Technologies",
    icon: "ri-bear-smile-line",
    color: "bg-green-500",
    description: "Neonates, particularly preterm and low-birth-weight infants, are highly vulnerable to temperature instability, infections, and inadequate nutrition. This theme focuses on innovative technologies that support essential interventions like Kangaroo Mother Care (KMC), breastfeeding, sepsis detection, thermoregulation, and hygiene. By addressing critical challenges in neonatal care—such as early sepsis identification, maintaining warmth, monitoring umbilical flow, and improving feeding and sanitation—this theme offers vast potential to reduce neonatal mortality and enhance the quality of care in resource-limited settings.",
    image: medicalDeviceImg,
    challenges: [
      "Temperature instability in neonates",
      "Infections in neonates",
      "Inadequate nutrition in neonates",
      "Early sepsis identification",
      "Maintaining warmth",
      "Monitoring umbilical flow",
      "Improving feeding and sanitation"
    ],
    resources: [], // Add relevant resources
    tags: ["Neonatal Care", "Infant Care", "KMC", "Pediatrics"],
    mentors: "", // Add relevant mentors
    outcomes: "" // Add relevant outcomes
  },
  {
    slug: "outbreak-detection",
    title: "Early Warning Systems for Outbreak Detection and management",
    icon: "ri-alarm-warning-line",
    color: "bg-yellow-500",
    description: "Early identification of infectious disease outbreaks is vital to preventing widespread transmission and protecting public health. This theme encourages participants to explore and enhance healthcare strategies that enable timely outbreak detection through improved surveillance, data analysis, and alert mechanisms. The goal is to strengthen the capacity of health systems to respond quickly and effectively, minimizing disease impact and safeguarding communities.",
    image: aiHealthcareImg,
    challenges: [
      "Improved surveillance for outbreak detection",
      "Data analysis for outbreak detection",
      "Alert mechanisms for outbreak detection"
    ],
    resources: [], // Add relevant resources
    tags: ["Outbreak Detection", "Public Health", "Surveillance"],
    mentors: "", // Add relevant mentors
    outcomes: "" // Add relevant outcomes
  },
  {
    slug: "vector-borne-diseases",
    title: "Surveillance, Prevention, and Diagnosis of Vector-Borne Diseases",
    icon: "ri-bug-line",
    color: "bg-purple-500",
    description: "Vector-borne diseases like malaria, dengue, and Zika pose ongoing public health risks in many regions. This theme focuses on strengthening healthcare responses through improved surveillance of vectors and cases, effective prevention strategies, and accessible, rapid diagnosis. The aim is to support healthcare systems in controlling transmission, providing timely treatment, and ultimately reducing the burden of these diseases on affected communities.",
    image: remoteMonitoringImg,
    challenges: [
      "Improved surveillance of vectors and cases",
      "Effective prevention strategies for vector-borne diseases",
      "Accessible, rapid diagnosis of vector-borne diseases"
    ],
    resources: [], // Add relevant resources
    tags: ["Vector-Borne Diseases", "Malaria", "Dengue", "Zika"],
    mentors: "", // Add relevant mentors
    outcomes: "" // Add relevant outcomes
  },
  {
    slug: "surgical-safety",
    title: "Surgical Safety and Smart Operating Theaters",
    icon: "ri-microscope-line",
    color: "bg-indigo-500",
    description: "Ensuring patient safety during surgery is a critical priority for healthcare systems worldwide. This theme invites participants to innovate ways to enhance surgical safety through smarter operating theaters that integrate advanced monitoring, communication, and automation technologies. The focus is on reducing errors, improving team coordination, and optimizing surgical workflows to deliver safer, more efficient care and better patient outcomes.",
    image: medicalDeviceImg,
    challenges: [
      "Advanced monitoring in operating theaters",
      "Communication technologies in operating theaters",
      "Automation technologies in operating theaters",
      "Reducing errors in surgery",
      "Improving team coordination in surgery",
      "Optimizing surgical workflows"
    ],
    resources: [], // Add relevant resources
    tags: ["Surgical Safety", "Smart Hospitals", "Operating Theaters"],
    mentors: "", // Add relevant mentors
    outcomes: "" // Add relevant outcomes
  },
  {
    slug: "poc-diagnostics-infectious-diseases",
    title: "Point of care diagnostics for Infectious Diseases",
    icon: "ri-test-tube-line",
    color: "bg-pink-500",
    description: "Several infectious diseases still lack reliable point-of-care (PoC) diagnostics. Conditions like melioidosis, leptospirosis, scrub typhus, histoplasmosis, and strongyloidiasis are often misdiagnosed due to slow or inaccessible testing. Diseases such as extrapulmonary tuberculosis, chikungunya, and neurocysticercosis also face diagnostic delays. Developing accurate, rapid, and affordable PoC tools is critical to improve early detection, treatment, and outcomes in resource-limited settings.",
    image: aiHealthcareImg,
    challenges: [
      "Developing PoC diagnostics for melioidosis",
      "Developing PoC diagnostics for leptospirosis",
      "Developing PoC diagnostics for scrub typhus",
      "Developing PoC diagnostics for histoplasmosis",
      "Developing PoC diagnostics for strongyloidiasis",
      "Developing PoC diagnostics for extrapulmonary tuberculosis",
      "Developing PoC diagnostics for chikungunya",
      "Developing PoC diagnostics for neurocysticercosis"
    ],
    resources: [], // Add relevant resources
    tags: ["POC Diagnostics", "Infectious Diseases", "Diagnostics"],
    mentors: "", // Add relevant mentors
    outcomes: "" // Add relevant outcomes
  },
  {
    slug: "hypertensive-disorders-pregnancy",
    title: "Monitoring and management hypertensive disorders in Pregnancy",
    icon: "ri-heart-2-line",
    color: "bg-teal-500",
    description: "Hypertensive disorders in pregnancy pose serious risks to both mother and baby. This theme focuses on developing medical technologies for effective monitoring and timely management to prevent complications. Solutions that enable early detection, continuous tracking, and better communication between patients and healthcare providers—especially in low-resource settings—can greatly improve maternal and fetal outcomes.",
    image: remoteMonitoringImg,
    challenges: [
      "Early detection of hypertensive disorders in pregnancy",
      "Continuous tracking of hypertensive disorders in pregnancy",
      "Better communication between patients and healthcare providers"
    ],
    resources: [], // Add relevant resources
    tags: ["Pregnancy", "Hypertension", "Maternal Health"],
    mentors: "", // Add relevant mentors
    outcomes: "" // Add relevant outcomes
  },
  {
    slug: "vision-health-children",
    title: "Innovative Screening Solutions for Vision Health in Children",
    icon: "ri-eye-2-line",
    color: "bg-cyan-500",
    description: "Early vision screening in children is vital to detect refractive errors, amblyopia, strabismus, and serious conditions like congenital glaucoma. Challenges include limited access, lack of awareness, and the need for specialized tools and training. This theme focuses on innovative, child-friendly screening solutions to enable timely detection and referral, improving long-term vision and developmental outcomes.",
    image: medicalDeviceImg,
    challenges: [
      "Child-friendly vision screening solutions",
      "Timely detection and referral for vision problems in children"
    ],
    resources: [], // Add relevant resources
    tags: ["Vision Health", "Pediatrics", "Screening"],
    mentors: "", // Add relevant mentors
    outcomes: "" // Add relevant outcomes
  },
  {
    slug: "cancer-therapy-monitoring",
    title: "Monitoring patients on Cancer Therapy and Prevention of its harmful sequelae",
    icon: "ri-capsule-line",
    color: "bg-orange-500",
    description: "Cancer therapy is known to have a prolonged course which results in deleterious side effects including Hair loss, Anemia, Immunosuppression, Chronic Fatigue amongst others. Continuous monitoring of cancer therapy and models to predict and manage side effects will ensure better compliance to the therapy, improving patient outcomes.",
    image: aiHealthcareImg,
    challenges: [
      "Continuous monitoring of cancer therapy",
      "Models to predict and manage side effects of cancer therapy"
    ],
    resources: [], // Add relevant resources
    tags: ["Cancer Therapy", "Patient Monitoring", "Oncology"],
    mentors: "", // Add relevant mentors
    outcomes: "" // Add relevant outcomes
  },
  {
    slug: "minimally-invasive-surgery-devices",
    title: "Smart devices for Minimally invasive Surgery",
    icon: "ri-robot-line",
    color: "bg-lime-500",
    description: "Minimally invasive surgery is the new meta for most surgical operations due to bloodless surgical fields, lesser chances of SSI, lesser scarring and better recovery. As this is a new and developing field there is scope for innovating the devices used to perform such surgeries like Endoscopes, imaging devices and surgical instruments.",
    image: remoteMonitoringImg,
    challenges: [
      "Innovating endoscopes",
      "Innovating imaging devices for surgery",
      "Innovating surgical instruments for minimally invasive surgery"
    ],
    resources: [], // Add relevant resources
    tags: ["Minimally Invasive Surgery", "Surgical Devices", "MedTech"],
    mentors: "", // Add relevant mentors
    outcomes: "" // Add relevant outcomes
  },
  {
    slug: "clinical-trial-design",
    title: "Clinical Trial Design- Recruitment and Execution",
    icon: "ri-clipboard-line",
    color: "bg-emerald-500",
    description: "Clinical trial success heavily depends on efficient recruitment and seamless execution. Challenges like low enrollment rates, high dropout, and protocol deviations often hinder progress. With growing emphasis on patient-centric approaches and streamlined processes, there is significant scope to innovate trial design and implementation methods to enhance participant engagement, compliance, and overall trial efficiency.",
    image: medicalDeviceImg,
    challenges: [
      "Efficient recruitment for clinical trials",
      "Seamless execution of clinical trials",
      "Innovating trial design and implementation methods"
    ],
    resources: [], // Add relevant resources
    tags: ["Clinical Trials", "Research", "Healthcare Innovation"],
    mentors: "", // Add relevant mentors
    outcomes: "" // Add relevant outcomes
  }
];

export type Theme = (typeof themesData)[0];
