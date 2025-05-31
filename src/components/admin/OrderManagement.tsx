
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, MapPin } from "lucide-react";

interface Order {
  id: string;
  customerName: string;
  items: string[];
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled';
  orderTime: string;
  deliveryAddress?: string;
}

const OrderManagement = () => {
  const [orders] = useState<Order[]>([
    {
      id: "ORD-001",
      customerName: "John Doe",
      items: ["Classic Beef Kapana", "Rooibos Iced Tea"],
      total: 63.00,
      status: "pending",
      orderTime: "14:30",
      deliveryAddress: "123 Main St, Windhoek"
    },
    {
      id: "ORD-002",
      customerName: "Jane Smith",
      items: ["Chicken Kapana Deluxe", "Pap with Morogo"],
      total: 67.00,
      status: "preparing",
      orderTime: "14:25"
    },
    {
      id: "ORD-003",
      customerName: "Mike Johnson",
      items: ["Mixed Meat Kapana", "Baobab Smoothie"],
      total: 77.00,
      status: "ready",
      orderTime: "14:15"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'preparing': return 'bg-blue-100 text-blue-800';
      case 'ready': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order) => (
          <Card key={order.id} className="border border-gray-200">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{order.id}</CardTitle>
                <Badge className={getStatusColor(order.status)}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <User className="h-4 w-4" />
                <span>{order.customerName}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{order.orderTime}</span>
              </div>
              
              {order.deliveryAddress && (
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="truncate">{order.deliveryAddress}</span>
                </div>
              )}
              
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Items:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {order.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="font-bold text-lg">N${order.total.toFixed(2)}</span>
                <div className="space-x-2">
                  {order.status === 'pending' && (
                    <Button size="sm">Accept</Button>
                  )}
                  {order.status === 'preparing' && (
                    <Button size="sm">Mark Ready</Button>
                  )}
                  {order.status === 'ready' && (
                    <Button size="sm">Complete</Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrderManagement;
