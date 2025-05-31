
import { useState } from "react";
import { Button } from "@/components/ui/button";
import MenuItemCard from "./MenuItemCard";
import { MenuItem } from "@/types/restaurant";
import { menuData } from "@/data/menuData";

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

const MenuSection = ({ onAddToCart }: MenuSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Items" },
    { id: "traditional", name: "Traditional Kapana" },
    { id: "grilled", name: "Grilled Specialties" },
    { id: "sides", name: "Sides & Salads" },
    { id: "drinks", name: "Beverages" }
  ];

  const filteredItems = selectedCategory === "all" 
    ? menuData 
    : menuData.filter(item => item.category === selectedCategory);

  return (
    <section className="mb-12">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className={`${
              selectedCategory === category.id 
                ? "bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-purple-500/25" 
                : "border-purple-500/30 text-purple-400 hover:bg-purple-900/20 hover:border-purple-400 bg-slate-800/30 backdrop-blur-sm"
            } transition-all duration-300 rounded-full px-6 py-2`}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredItems.map(item => (
          <MenuItemCard
            key={item.id}
            item={item}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
