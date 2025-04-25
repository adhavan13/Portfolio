import { useState, useEffect } from "react";
import DecryptedText from "./decryptedText";
import { Menu, X } from "lucide-react";
import Resume from "/resume.pdf";

function NavBar({ onNavigate }) {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close mobile menu when screen size increases past md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
    onNavigate(section);
    setIsMenuOpen(false); // Close menu after navigation
  };

  const navItems = ["Experience", "Skills", "Products", "Projects", "Contact"];

  return (
    <nav className="mt-7 neutral-100 bg-opacity-90 backdrop-filter backdrop-blur-lg sticky top-0 z-50">
      <div className="max-full mx-2 sm:mx-8 px-2 sm:px-4">
        <div className="flex items-center justify-between h-16">
          <div
            className="text-xl sm:text-2xl font-bold ml-2 sm:ml-4"
          >
            <DecryptedText
              text="Adhavan"
              animateOn="hover"
              speed={40}
              className="font-bold"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-3 lg:space-x-6 text-gray-600">
            {navItems.map((item) => (
              <button
                key={item}
                className={`font-special transition-colors hover:bg-gray-200 px-2 py-2 rounded-md ${
                  activeSection === item.toLowerCase() ? "text-blue-600" : ""
                }`}
                onClick={() => handleNavigation(item.toLowerCase())}
              >
                <span className="text-sm">{item}</span>
              </button>
            ))}

            <a
              href={Resume}
              target="_blank"
              className="px-4 lg:px-6 py-2 border border-gray-800 font-special rounded-md hover:bg-black hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-800 hover:bg-gray-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg mx-2">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-special ${
                  activeSection === item.toLowerCase()
                    ? "bg-gray-100 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleNavigation(item.toLowerCase())}
              >
                {item}
              </button>
            ))}
            <div className="pt-2 pb-1">
              <a
                href={Resume}
                target="_blank"
                className="block w-full text-center px-3 py-2 rounded-md border border-gray-800 font-special hover:bg-black hover:text-white transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;