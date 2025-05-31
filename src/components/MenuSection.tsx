
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
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(category => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className={`${
              selectedCategory === category.id 
                ? "bg-orange-600 hover:bg-orange-700" 
                : "border-orange-200 text-orange-600 hover:bg-orange-50"
            }`}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
