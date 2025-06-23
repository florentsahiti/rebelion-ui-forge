
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-black">Rebelion</div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-black transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("shop")}
              className="text-gray-600 hover:text-black transition-colors"
            >
              Shop
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-600 hover:text-black transition-colors"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-black transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
