
const Portfolio = () => {
  const projects = [
    {
      title: "Project Alpha",
      category: "Web Design",
      description: "Minimalist e-commerce platform with focus on user experience",
    },
    {
      title: "Project Beta", 
      category: "Brand Identity",
      description: "Complete brand redesign for emerging tech startup",
    },
    {
      title: "Project Gamma",
      category: "Mobile App",
      description: "Social platform connecting creatives worldwide",
    },
    {
      title: "Project Delta",
      category: "Web Development",
      description: "Custom CMS for content management and distribution",
    },
    {
      title: "Project Epsilon",
      category: "UI/UX Design",
      description: "Dashboard interface for data analytics platform",
    },
    {
      title: "Project Zeta",
      category: "Creative Direction",
      description: "Art direction for digital marketing campaign",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Selected Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated collection of projects that showcase creativity, 
            technical expertise, and attention to detail.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300"></div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
