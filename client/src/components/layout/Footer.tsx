import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition duration-300"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition duration-300"
                aria-label="Twitter"
              >
                <i className="ri-twitter-x-line text-xl"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition duration-300"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition duration-300"
                aria-label="YouTube"
              >
                <i className="ri-youtube-line text-xl"></i>
              </a>
            </div>
            <div className="flex items-center mb-4">
              <i className="ri-pulse-line text-primary text-2xl mr-2"></i>
              <h4 className="text-lg font-bold">Incubate</h4>
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
                <i className="ri-user-line text-primary mt-1 mr-3"></i>
                <div>
                  <p className="text-gray-300">Chinua – +91 7892615045</p>
                  <p className="text-gray-300">Taruna – +91 7760887335</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-mail-line text-primary mt-1 mr-3"></i>
                <div>
                  <p className="text-gray-300">incubate@jipmer.edu.in</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-map-pin-line text-primary mt-1 mr-3"></i>
                <div>
                  <p className="text-gray-300">JIPMER, Puducherry, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Incubate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
