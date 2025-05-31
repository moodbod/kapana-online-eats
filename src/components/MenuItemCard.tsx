
import { useState } from "react";
import { Plus, Flame, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MenuItem } from "@/types/restaurant";

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

const MenuItemCard = ({ item, onAddToCart }: MenuItemCardProps) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(item, 1);
    
    // Visual feedback
    setTimeout(() => {
      setIsAdding(false);
    }, 300);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-orange-100">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isPopular && (
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Star className="h-3 w-3" fill="currentColor" />
              Popular
            </span>
          )}
          {item.isSpicy && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Flame className="h-3 w-3" fill="currentColor" />
              Spicy
            </span>
          )}
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-1">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-orange-600">
            N${item.price.toFixed(2)}
          </span>
          
          <Button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`bg-orange-600 hover:bg-orange-700 text-white transition-all duration-200 ${
              isAdding ? "scale-95 bg-green-600" : ""
            }`}
          >
            <Plus className="h-4 w-4 mr-1" />
            {isAdding ? "Added!" : "Add"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
