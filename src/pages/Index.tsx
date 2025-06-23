
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Shop from "@/components/Shop";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Shop />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;
