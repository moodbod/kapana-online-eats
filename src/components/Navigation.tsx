
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Settings, 
  ChefHat, 
  User, 
  BarChart3, 
  ClipboardList 
} from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Menu", icon: Home },
    { path: "/admin", label: "Admin", icon: Settings },
    { path: "/kitchen", label: "Kitchen", icon: ChefHat },
    { path: "/customer", label: "Customer", icon: User },
    { path: "/analytics", label: "Analytics", icon: BarChart3 },
    { path: "/orders", label: "Orders", icon: ClipboardList },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-900">
          Kapana Express
        </Link>
        
        <div className="flex space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Button
                key={item.path}
                asChild
                variant={isActive ? "default" : "ghost"}
                size="sm"
              >
                <Link to={item.path} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
