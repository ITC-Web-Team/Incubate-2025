import { Link } from "wouter";
import jipmerLogo from "@/assets/jipmer-logo.png";
import iitbLogo from "@/assets/iitb-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://www.instagram.com/incubate_hackathon/" 
                className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center hover:bg-primary transition duration-300"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/incubate-hackathon-2936a236b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center hover:bg-primary transition duration-300"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a 
                href="https://youtube.com/@incubatehackathon?si=I7evmvBReFiILWZy" 
                className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center hover:bg-primary transition duration-300"
                aria-label="YouTube"
              >
                <i className="ri-youtube-line text-xl"></i>
              </a>
            </div>
            <div className="flex items-center mb-4">
              <div className="flex items-center space-x-4 mb-4">
                <img src={jipmerLogo} alt="JIPMER Logo" className="h-12 w-12 object-contain bg-white dark:bg-gray-200 rounded-full p-1" />
                <img src={iitbLogo} alt="IIT Bombay Logo" className="h-12 w-12 object-contain bg-white dark:bg-gray-200 rounded-full p-1" />
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              A national-level MedTech Hackathon creating the future of healthcare through innovation.
            </p>
          </div>
          
          {/* Right Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-user-line text-primary dark:text-blue-400 mt-1 mr-3"></i>
                <div>
                  <p className="text-gray-300">Chinua (JIPMER) – +91 7892615045 </p>
                  <p className="text-gray-300">Tarunasri (JIPMER) – +91 7760887335</p>
                  <p className="text-gray-300">Shahu (IITB) – +91 91460 50850</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-mail-line text-primary dark:text-blue-400 mt-1 mr-3"></i>
                <div>
                    <a href="mailto:incubatehackathon@gmail.com" className="text-gray-300 hover:underline">
                    incubatehackathon@gmail.com
                    </a>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-map-pin-line text-primary dark:text-blue-400 mt-1 mr-3"></i>
                <div>
                  <p className="text-gray-300">JIPMER, Puducherry, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Incubate. All rights reserved.</p>
          <p>
            Website by{" "}
            <a
              href="https://www.linkedin.com/in/lakshaditya-singh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Lakshaditya Singh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
