import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <div className="mr-4">
              <i className="ri-pulse-line text-primary text-3xl"></i>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-primary">Incubate</h1>
              <p className="text-xs text-gray-600">Where curiosity meets innovation</p>
            </div>
          </div>
        </Link>
        
        <nav className="hidden md:block relative">
          <ul className="flex space-x-6 text-sm font-medium nav-links">
            <li className="relative py-1">
              <Link href="/">
                <a 
                  className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                  onClick={() => handleLinkClick("home")}
                >
                  HOME
                </a>
              </Link>
            </li>
            <li className="relative py-1">
              <Link href="/themes">
                <a 
                  className={`nav-link ${activeLink === "themes" ? "active" : ""}`}
                  onClick={() => handleLinkClick("themes")}
                >
                  THEMES
                </a>
              </Link>
            </li>
            <li className="relative py-1">
              <Link href="/about">
                <a 
                  className={`nav-link ${activeLink === "about" ? "active" : ""}`}
                  onClick={() => handleLinkClick("about")}
                >
                  ABOUT US
                </a>
              </Link>
            </li>
            <li className="relative py-1">
              <Link href="/faqs">
                <a 
                  className={`nav-link ${activeLink === "faqs" ? "active" : ""}`}
                  onClick={() => handleLinkClick("faqs")}
                >
                  FAQs
                </a>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/register">
                <a 
                  className="bg-[#f97316] hover:bg-orange-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300"
                  onClick={() => handleLinkClick("register")}
                >
                  REGISTER NOW
                </a>
              </Link>
            </li>
          </ul>
          <div className="nav-indicator absolute bottom-0 h-0.5 bg-primary transition-all duration-300"></div>
        </nav>
        
        <button 
          className="md:hidden text-gray-600" 
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
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white py-2 shadow-inner ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4">
          <ul className="space-y-3">
            <li>
              <Link href="/">
                <a 
                  className="block py-2 px-4 hover:bg-gray-100 rounded"
                  onClick={() => handleLinkClick("home")}
                >
                  HOME
                </a>
              </Link>
            </li>
            <li>
              <Link href="/themes">
                <a 
                  className="block py-2 px-4 hover:bg-gray-100 rounded"
                  onClick={() => handleLinkClick("themes")}
                >
                  THEMES
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a 
                  className="block py-2 px-4 hover:bg-gray-100 rounded"
                  onClick={() => handleLinkClick("about")}
                >
                  ABOUT US
                </a>
              </Link>
            </li>
            <li>
              <Link href="/faqs">
                <a 
                  className="block py-2 px-4 hover:bg-gray-100 rounded"
                  onClick={() => handleLinkClick("faqs")}
                >
                  FAQs
                </a>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <a 
                  className="block py-2 px-4 bg-[#f97316] text-white rounded-md text-center mt-2"
                  onClick={() => handleLinkClick("register")}
                >
                  REGISTER NOW
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
