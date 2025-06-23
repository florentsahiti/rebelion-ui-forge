
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                I'm a passionate creative professional who believes in the power of design 
                to challenge conventions and inspire change. With expertise in both visual 
                design and development, I create digital experiences that resonate.
              </p>
              <p>
                My approach combines minimalist aesthetics with bold concepts, 
                always pushing the boundaries of what's possible while maintaining 
                functionality and user experience at the core.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-2">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-2">50+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-black rounded-lg opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
