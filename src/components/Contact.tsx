
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Create Something Together
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Ready to start your next project? I'm always interested in discussing 
          new opportunities and creative challenges.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg">
            Get In Touch
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg">
            View Resume
          </Button>
        </div>
        
        <div className="flex justify-center space-x-8 text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Email</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-gray-500">
          <p>&copy; 2024 Rebelion. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
