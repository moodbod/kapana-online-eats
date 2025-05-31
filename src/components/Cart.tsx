
import { X, Plus, Minus, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CartItem } from "@/types/restaurant";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  total: number;
}

const Cart = ({ isOpen, onClose, items, onUpdateQuantity, total }: CartProps) => {
  const handleCheckout = () => {
    // Here you would typically integrate with a payment system
    alert("Checkout functionality would be implemented here!");
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg bg-gradient-to-br from-slate-900 to-slate-800 border-l border-purple-500/20">
        <SheetHeader className="border-b border-purple-500/20 pb-6">
          <SheetTitle className="flex items-center gap-3 text-2xl font-bold text-white">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            Your Order
            <Sparkles className="h-5 w-5 text-cyan-400" />
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 text-gray-400">
              <div className="p-4 bg-slate-800/50 rounded-full mb-6 border border-purple-500/20">
                <ShoppingBag className="h-16 w-16 text-purple-400" />
              </div>
              <p className="text-xl font-medium text-gray-300 mb-2">Your cart is empty</p>
              <p className="text-sm text-gray-500">Add some delicious items to get started!</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-6">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-xl p-4 border border-purple-500/10 backdrop-blur-sm">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg border border-purple-500/20"
                      />
                      
                      <div className="flex-1">
                        <h4 className="font-medium text-white">{item.name}</h4>
                        <p className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">N${item.price.toFixed(2)}</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0 border-purple-500/30 text-purple-400 hover:bg-purple-900/20 hover:border-purple-400"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        
                        <span className="w-8 text-center font-medium text-white">{item.quantity}</span>
                        
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0 border-purple-500/30 text-purple-400 hover:bg-purple-900/20 hover:border-purple-400"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-purple-500/20 pt-6 space-y-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span className="text-gray-300">Total:</span>
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">N${total.toFixed(2)}</span>
                </div>
                
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-4 text-lg font-semibold border-0 shadow-lg shadow-purple-500/25 hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
