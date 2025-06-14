import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import ThemeToggle from "@/components/ui/theme-toggle";
import jipmerLogo from "@/assets/logos/jipmer-logo.png";
import iitbLogo from "@/assets/logos/iitb-logo-blue.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [location] = useLocation();

  useEffect(() => {
    // Set active link based on location
    const path = location === "/" ? "home" : location.slice(1);
    setActiveLink(path);
  }, [location]);

  // Calculate indicator position for desktop nav
  const getIndicatorPosition = () => {
    const indicator = document.querySelector(".nav-indicator");
    const activeNavLink = document.querySelector(`.nav-link.active`);
    
    if (indicator && activeNavLink) {
      const width = activeNavLink.getBoundingClientRect().width;
      const left = activeNavLink.getBoundingClientRect().left;
      const navLinks = document.querySelector(".nav-links");
      const leftOffset = navLinks ? navLinks.getBoundingClientRect().left : 0;
      
      indicator.setAttribute("style", `width: ${width}px; left: ${left - leftOffset}px`);
    }
  };

  useEffect(() => {
    getIndicatorPosition();
    window.addEventListener("resize", getIndicatorPosition);
    
    return () => {
      window.removeEventListener("resize", getIndicatorPosition);
    };
  }, [activeLink, isMenuOpen]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when selecting a link on mobile
  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-white/80 p-1 dark:bg-white/90">
              <img src={jipmerLogo} alt="JIPMER Logo" className="w-full h-full object-contain" />
            </div>
            <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-white/80 p-1 dark:bg-white/90">
              <img src={iitbLogo} alt="IIT Bombay Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-medium" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.05em' }}>
                <span className="text-[#a51c1c]">In</span><span className="text-[#cbb26a]">Cu</span><span className="text-black dark:text-white">bate</span>
              </h1>
              <p className="text-xs">Where <span className="text-[#cbb26a]">Curiosity</span> meets <span className="text-[#a51c1c]">Innovation</span></p>
            </div>
          </div>
        </Link>
        
        <div className="flex items-center">
          <nav className="hidden md:block relative mr-4">
            <ul className="flex space-x-6 text-sm font-medium nav-links">
              <li className="relative py-1">
                <Link 
                  href="/"
                  className={`nav-link ${activeLink === "home" ? "active" : ""} dark:text-white`}
                  onClick={() => handleLinkClick("home")}
                >
                  HOME
                </Link>
              </li>
              <li className="relative py-1">
                <Link 
                  href="/themes"
                  className={`nav-link ${activeLink === "themes" ? "active" : ""} dark:text-white`}
                  onClick={() => handleLinkClick("themes")}
                >
                  THEMES
                </Link>
              </li>
              <li className="relative py-1">
                <Link 
                  href="/about"
                  className={`nav-link ${activeLink === "about" ? "active" : ""} dark:text-white`}
                  onClick={() => handleLinkClick("about")}
                >
                  ABOUT US
                </Link>
              </li>
              <li className="relative py-1">
                <Link 
                  href="/faqs"
                  className={`nav-link ${activeLink === "faqs" ? "active" : ""} dark:text-white`}
                  onClick={() => handleLinkClick("faqs")}
                >
                  FAQs
                </Link>
              </li>
              <li className="ml-4">
                <a 
                  href="https://chat.whatsapp.com/LjKDX4bKnYq0X0TSH6FDqz"
                  target="_blank"
                  rel=" "
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-md shadow-md transition duration-300 border border-blue-400"
                >
                  REGISTER NOW
                </a>
              </li>
            </ul>
            <div className="nav-indicator absolute bottom-0 h-0.5 bg-primary dark:bg-blue-400 transition-all duration-300"></div>
          </nav>
          
          {/* Theme toggle button */}
          <ThemeToggle />
          
          <button 
            className="md:hidden text-gray-600 dark:text-gray-300 ml-4" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <i className="ri-close-line text-2xl"></i>
            ) : (
              <i className="ri-menu-line text-2xl"></i>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white dark:bg-gray-800 py-2 shadow-inner ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4">
          <ul className="space-y-3">
            <li>
              <Link 
                href="/"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white rounded"
                onClick={() => handleLinkClick("home")}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                href="/themes"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white rounded"
                onClick={() => handleLinkClick("themes")}
              >
                THEMES
              </Link>
            </li>
            <li>
              <Link 
                href="/about"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white rounded"
                onClick={() => handleLinkClick("about")}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link 
                href="/faqs"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white rounded"
                onClick={() => handleLinkClick("faqs")}
              >
                FAQs
              </Link>
            </li>
            <li>
              <a 
                href="https://chat.whatsapp.com/LjKDX4bKnYq0X0TSH6FDqz"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-center mt-2 border border-blue-400"
              >
                REGISTER NOW
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
