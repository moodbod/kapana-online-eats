
import { ShoppingCart, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemCount, onCartClick }: HeaderProps) => {
  return (
    <header className="bg-white shadow-lg border-b-2 border-orange-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-orange-600">
              🥘 Kapana Express
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+264 61 123 456</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Open: 11AM - 10PM</span>
            </div>
          </div>

          <Button
            onClick={onCartClick}
            className="relative bg-orange-600 hover:bg-orange-700 text-white"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Cart
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
