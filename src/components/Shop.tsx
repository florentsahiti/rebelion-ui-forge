
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Rebellion Classic Tee - Royal Blue",
      price: "$45",
      image: "/lovable-uploads/eac52e01-4546-439d-b3bf-9bb37b8ee20d.png",
      category: "T-Shirts"
    },
    {
      id: 2,
      name: "Rebellion Classic Tee - Ice Blue",
      price: "$45",
      image: "/lovable-uploads/5ec62496-e8ee-40a2-9f74-371a55817578.png",
      category: "T-Shirts"
    },
    {
      id: 3,
      name: "Rebellion Classic Tee - Stone White",
      price: "$45",
      image: "/lovable-uploads/ee93a6b4-9986-4f43-9a23-c7b221dab899.png",
      category: "T-Shirts"
    },
    {
      id: 4,
      name: "Rebellion Classic Tee - Black",
      price: "$45",
      image: "/lovable-uploads/a47a658e-a9b1-4b53-b822-3dc42749e5a4.png",
      category: "T-Shirts"
    },
    {
      id: 5,
      name: "Rebellion Classic Tee - Navy",
      price: "$45",
      image: "/lovable-uploads/90362930-ec46-426d-861c-42fcd4265672.png",
      category: "T-Shirts"
    },
    {
      id: 6,
      name: "Rebellion Classic Tee - Forest Green",
      price: "$45",
      image: "/lovable-uploads/77d2b2a3-8f89-4e3b-9b70-f80ed59f3615.png",
      category: "T-Shirts"
    },
    {
      id: 7,
      name: "Rebellion Classic Tee - Natural",
      price: "$45",
      image: "/lovable-uploads/264fe735-158c-40d5-b80a-8c0db63c3d06.png",
      category: "T-Shirts"
    },
    {
      id: 8,
      name: "Rebellion Classic Tee - Mint",
      price: "$45",
      image: "/lovable-uploads/698c2f66-dbfe-4cda-a933-a213941a5e95.png",
      category: "T-Shirts"
    },
    {
      id: 9,
      name: "Rebellion Classic Tee - Lavender",
      price: "$45",
      image: "/lovable-uploads/f389e8d0-8c56-434a-a1c2-0e8dc2678e9b.png",
      category: "T-Shirts"
    },
    {
      id: 10,
      name: "Rebellion Classic Tee - Pink",
      price: "$45",
      image: "/lovable-uploads/4a5faae1-c8da-48d2-a236-05da522eb47c.png",
      category: "T-Shirts"
    }
  ];

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Shop Rebellion
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium streetwear. 
            Each piece embodies the spirit of creative rebellion.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-8 border-b border-gray-200">
            <button className="pb-4 px-2 text-black border-b-2 border-black font-medium">
              All Products
            </button>
            <button className="pb-4 px-2 text-gray-500 hover:text-black transition-colors">
              T-Shirts
            </button>
            <button className="pb-4 px-2 text-gray-500 hover:text-black transition-colors">
              New Arrivals
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer border-0 shadow-none hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden bg-gray-50 rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                
                {/* Quick Add Button */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    Quick Add
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium text-black text-sm leading-tight">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-xs uppercase tracking-wide">
                  {product.category}
                </p>
                <p className="font-bold text-black">
                  {product.price}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3">
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
