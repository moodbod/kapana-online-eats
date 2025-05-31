
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Plus, Edit, Trash2 } from "lucide-react";
import { menuData } from "@/data/menuData";
import { MenuItem } from "@/types/restaurant";

const MenuManagement = () => {
  const [items, setItems] = useState<MenuItem[]>(menuData);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAvailability = (id: string) => {
    setItems(prev => prev.map(item => 
      item.id === id 
        ? { ...item, isAvailable: !item.isAvailable }
        : item
    ));
  };

  const updatePrice = (id: string, newPrice: number) => {
    setItems(prev => prev.map(item => 
      item.id === id 
        ? { ...item, price: newPrice }
        : item
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex-1 max-w-md">
          <Input
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button className="ml-4">
          <Plus className="h-4 w-4 mr-2" />
          Add Item
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <Card key={item.id} className="border border-gray-200">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={item.isAvailable ?? true}
                    onCheckedChange={() => toggleAvailability(item.id)}
                  />
                  <span className="text-xs text-gray-500">
                    {item.isAvailable ?? true ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover rounded"
              />
              
              <p className="text-sm text-gray-600 line-clamp-2">
                {item.description}
              </p>
              
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">{item.category}</Badge>
                {item.isPopular && <Badge variant="default">Popular</Badge>}
                {item.isSpicy && <Badge variant="destructive">Spicy</Badge>}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">N$</span>
                  <Input
                    type="number"
                    value={item.price}
                    onChange={(e) => updatePrice(item.id, parseFloat(e.target.value))}
                    className="w-20 h-8"
                  />
                </div>
                
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MenuManagement;
