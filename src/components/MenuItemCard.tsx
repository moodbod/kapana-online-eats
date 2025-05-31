
import { useState } from "react";
import { Plus, Star } from "lucide-react";
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
    
    setTimeout(() => {
      setIsAdding(false);
    }, 300);
  };

  return (
    <Card className="border border-gray-200 hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        {item.isPopular && (
          <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
            <Star className="h-3 w-3" fill="currentColor" />
            Popular
          </span>
        )}
        {item.isSpicy && (
          <span className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            Spicy
          </span>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            N${item.price.toFixed(2)}
          </span>
          
          <Button
            onClick={handleAddToCart}
            disabled={isAdding}
            size="sm"
            className="bg-gray-900 hover:bg-gray-800 text-white"
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
