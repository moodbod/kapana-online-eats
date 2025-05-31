
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ChefHat, CheckCircle } from "lucide-react";

interface KitchenTicket {
  id: string;
  orderNumber: string;
  items: Array<{
    name: string;
    quantity: number;
    notes?: string;
  }>;
  orderTime: string;
  estimatedTime: number; // in minutes
  priority: 'normal' | 'high' | 'urgent';
  status: 'new' | 'preparing' | 'ready';
}

const KitchenTickets = () => {
  const [tickets, setTickets] = useState<KitchenTicket[]>([
    {
      id: "1",
      orderNumber: "ORD-001",
      items: [
        { name: "Classic Beef Kapana", quantity: 1 },
        { name: "Rooibos Iced Tea", quantity: 1 }
      ],
      orderTime: "14:30",
      estimatedTime: 15,
      priority: "normal",
      status: "new"
    },
    {
      id: "2",
      orderNumber: "ORD-002",
      items: [
        { name: "Chicken Kapana Deluxe", quantity: 2, notes: "Extra spicy" },
        { name: "Pap with Morogo", quantity: 1 }
      ],
      orderTime: "14:25",
      estimatedTime: 20,
      priority: "high",
      status: "preparing"
    },
    {
      id: "3",
      orderNumber: "ORD-003",
      items: [
        { name: "Mixed Meat Kapana", quantity: 1 },
        { name: "Grilled Vegetables", quantity: 2 }
      ],
      orderTime: "14:15",
      estimatedTime: 18,
      priority: "urgent",
      status: "preparing"
    }
  ]);

  const updateTicketStatus = (id: string, newStatus: KitchenTicket['status']) => {
    setTickets(prev => prev.map(ticket => 
      ticket.id === id ? { ...ticket, status: newStatus } : ticket
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-gray-100 text-gray-800';
      case 'preparing': return 'bg-blue-100 text-blue-800';
      case 'ready': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const groupedTickets = {
    new: tickets.filter(t => t.status === 'new'),
    preparing: tickets.filter(t => t.status === 'preparing'),
    ready: tickets.filter(t => t.status === 'ready')
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <Clock className="h-5 w-5" />
          New Orders ({groupedTickets.new.length})
        </h2>
        
        {groupedTickets.new.map((ticket) => (
          <Card key={ticket.id} className="border-l-4 border-l-gray-400">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{ticket.orderNumber}</CardTitle>
                <div className="flex gap-2">
                  <Badge className={getPriorityColor(ticket.priority)}>
                    {ticket.priority}
                  </Badge>
                  <Badge className={getStatusColor(ticket.status)}>
                    {ticket.status}
                  </Badge>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Ordered: {ticket.orderTime} | Est: {ticket.estimatedTime}min
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {ticket.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.quantity}x {item.name}</span>
                    {item.notes && (
                      <span className="text-xs text-red-600 font-medium">
                        {item.notes}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={() => updateTicketStatus(ticket.id, 'preparing')}
                className="w-full"
              >
                <ChefHat className="h-4 w-4 mr-2" />
                Start Preparing
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <ChefHat className="h-5 w-5" />
          Preparing ({groupedTickets.preparing.length})
        </h2>
        
        {groupedTickets.preparing.map((ticket) => (
          <Card key={ticket.id} className="border-l-4 border-l-blue-400">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{ticket.orderNumber}</CardTitle>
                <div className="flex gap-2">
                  <Badge className={getPriorityColor(ticket.priority)}>
                    {ticket.priority}
                  </Badge>
                  <Badge className={getStatusColor(ticket.status)}>
                    {ticket.status}
                  </Badge>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Ordered: {ticket.orderTime} | Est: {ticket.estimatedTime}min
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {ticket.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.quantity}x {item.name}</span>
                    {item.notes && (
                      <span className="text-xs text-red-600 font-medium">
                        {item.notes}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={() => updateTicketStatus(ticket.id, 'ready')}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Mark Ready
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <CheckCircle className="h-5 w-5" />
          Ready ({groupedTickets.ready.length})
        </h2>
        
        {groupedTickets.ready.map((ticket) => (
          <Card key={ticket.id} className="border-l-4 border-l-green-400">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{ticket.orderNumber}</CardTitle>
                <div className="flex gap-2">
                  <Badge className={getPriorityColor(ticket.priority)}>
                    {ticket.priority}
                  </Badge>
                  <Badge className={getStatusColor(ticket.status)}>
                    {ticket.status}
                  </Badge>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Ordered: {ticket.orderTime} | Est: {ticket.estimatedTime}min
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {ticket.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.quantity}x {item.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center text-green-600 font-medium">
                Ready for Pickup/Delivery
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KitchenTickets;
