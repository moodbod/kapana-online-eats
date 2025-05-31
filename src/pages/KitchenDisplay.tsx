
import Navigation from "@/components/Navigation";
import KitchenTickets from "@/components/kitchen/KitchenTickets";

const KitchenDisplay = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Kitchen Display System
        </h1>
        
        <KitchenTickets />
      </main>
    </div>
  );
};

export default KitchenDisplay;
