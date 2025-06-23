
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 animate-fade-in">
          Rebelion
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
          Creative Designer & Developer pushing boundaries through innovative digital experiences
        </p>
        <Button 
          onClick={scrollToAbout}
          className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg animate-fade-in"
        >
          Explore My Work
        </Button>
      </div>
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;
