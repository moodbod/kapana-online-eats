
import { ShoppingCart, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemCount, onCartClick }: HeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-2xl border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ⚡ Kapana Express
            </div>
            <div className="hidden md:block w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
            <div className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2 border border-purple-500/20">
              <Phone className="h-4 w-4 text-cyan-400" />
              <span>+264 61 123 456</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2 border border-purple-500/20">
              <Clock className="h-4 w-4 text-purple-400" />
              <span>Open: 11AM - 10PM</span>
            </div>
          </div>

          <Button
            onClick={onCartClick}
            className="relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-purple-500/25 hover:shadow-cyan-500/25 transition-all duration-300"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Cart
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
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
