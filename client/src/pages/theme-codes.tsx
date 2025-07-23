import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'wouter';

const ThemeCodesPage = () => {
  useEffect(() => {
    document.title = "Theme Codes | Incubate";
    window.scrollTo(0, 0);
  }, []);

  const themeCodes = [
    {
      name: "Infection Control and Critical Care",
      code: "INF",
      slug: "infection-control-critical-care"
    },
    {
      name: "Neonatal and Infant Care Technologies",
      code: "NEO",
      slug: "neonatal-infant-care"
    },
    {
      name: "Integrated Disease Surveillance, Management, and Outbreak Detection",
      code: "OUT",
      slug: "disease-surveillance-outbreak"
    },
    {
      name: "Advancing Smart Screening and Diagnostics in Ophthalmology, and integrated Solutions for Neurological Disorders",
      code: "OPT",
      slug: "smart-screening-ophthalmology"
    },
    {
      name: "Clinical Trial Innovations: Enhancing Recruitment, Retention, and Adherence",
      code: "CT",
      slug: "clinical-trial-innovations"
    },
    {
      name: "Smart Surgery, Safer Operating Theaters, and Specialty-Specific Surgical Innovations",
      code: "SSOT",
      slug: "smart-surgery-operating-theaters"
    },
    {
      name: "Hypertension in Pregnancy and Maternal co-morbid Conditions: Integrated Monitoring and Management",
      code: "HTP",
      slug: "hypertension-pregnancy-maternal"
    },
    {
      name: "Optimizing Patient Safety and Toxicity Management in Oncotherapy via Integrated Pharmacovigilance, with Extensions to Rheumatology and Other Chronic Disorders",
      code: "ONC",
      slug: "patient-safety-oncotherapy"
    },
    {
      name: "Affordable Innovations for CPR, Emergency Response, and Life-Saving Interventions",
      code: "EMC",
      slug: "cpr-emergency-response"
    },
    {
      name: "Targeted Innovations in Vascular Health and Structural Heart Diseases: Screening, Diagnosis, and Comprehensive Care",
      code: "SHD",
      slug: "vascular-health-heart-diseases"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 text-foreground">
      <header className="mb-10 md:mb-16">
        <Link 
          href="/prelims"
          className="inline-flex items-center text-primary dark:text-primary-dark hover:text-secondary dark:hover:text-secondary-dark mb-6 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Back to Phase I
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark drop-shadow-md text-center">
          Theme Names
        </h1>
        {/* <p className="text-center text-lg text-gray-600 dark:text-gray-400 mt-4">
          Use these codes when formatting your video titles: &lt;Theme Code&gt; &lt;Registration ID&gt;
        </p> */}
      </header>

      <div className="space-y-6">
        <section className="bg-background-card dark:bg-gray-800 shadow-2xl rounded-xl p-6 md:p-10 transition-shadow duration-300 hover:shadow-lg">
          {/* <h2 className="text-3xl font-semibold text-secondary dark:text-secondary-dark mb-8 text-center flex items-center justify-center">
            Theme Names & Codes
          </h2> */}
          
          <div className="space-y-4">
            {themeCodes.map((theme, index) => (
              <div 
                key={index} 
                className="bg-background-alt dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                  
                      {theme.name}
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary text-white dark:bg-accent-dark">
                      Code: {theme.code}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ThemeCodesPage;
