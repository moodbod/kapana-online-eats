
import { useState } from "react";
import { Plus, Flame, Star, Sparkles } from "lucide-react";
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
    <Card className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-purple-500/20 backdrop-blur-sm overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isPopular && (
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg animate-pulse">
              <Star className="h-3 w-3" fill="currentColor" />
              Popular
            </span>
          )}
          {item.isSpicy && (
            <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
              <Flame className="h-3 w-3" fill="currentColor" />
              Spicy
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <Sparkles className="h-5 w-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      
      <CardContent className="p-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
        <h3 className="font-bold text-lg text-white mb-2 line-clamp-1 group-hover:text-cyan-300 transition-colors duration-300">
          {item.name}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            N${item.price.toFixed(2)}
          </span>
          
          <Button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-purple-500/25 hover:shadow-cyan-500/25 transition-all duration-300 rounded-full ${
              isAdding ? "scale-95 from-green-600 to-emerald-600" : ""
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
