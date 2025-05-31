
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
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
      <SheetContent className="w-full sm:max-w-lg bg-white">
        <SheetHeader className="border-b border-gray-200 pb-4">
          <SheetTitle className="flex items-center gap-2 text-xl font-bold text-gray-800">
            <ShoppingBag className="h-6 w-6 text-orange-600" />
            Your Order
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 text-gray-500">
              <ShoppingBag className="h-16 w-16 mb-4 text-gray-300" />
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm">Add some delicious items to get started!</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <p className="text-orange-600 font-semibold">N${item.price.toFixed(2)}</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-orange-600">N${total.toFixed(2)}</span>
                </div>
                
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold"
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
