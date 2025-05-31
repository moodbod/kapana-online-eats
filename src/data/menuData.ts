
import { MenuItem } from "@/types/restaurant";

export const menuData: MenuItem[] = [
  // Traditional Kapana
  {
    id: "1",
    name: "Classic Beef Kapana",
    description: "Tender grilled beef strips with traditional spices, served with fresh tomato and onion salsa",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "traditional",
    isPopular: true
  },
  {
    id: "2",
    name: "Chicken Kapana Deluxe",
    description: "Marinated chicken pieces grilled to perfection with aromatic herbs and spices",
    price: 42.00,
    image: "https://images.unsplash.com/photo-1532636804622-8155dcf80534?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "traditional",
    isPopular: true,
    isSpicy: true
  },
  {
    id: "3",
    name: "Mixed Meat Kapana",
    description: "A combination of beef and chicken kapana for the ultimate flavor experience",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1086&q=80",
    category: "traditional"
  },

  // Grilled Specialties
  {
    id: "4",
    name: "Grilled Fish Fillet",
    description: "Fresh catch of the day grilled with lemon and herbs, served with rice",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "grilled"
  },
  {
    id: "5",
    name: "BBQ Ribs",
    description: "Slow-cooked pork ribs with our signature BBQ sauce",
    price: 78.00,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "grilled",
    isSpicy: true
  },
  {
    id: "6",
    name: "Lamb Chops",
    description: "Premium lamb chops seasoned with rosemary and garlic",
    price: 95.00,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "grilled"
  },

  // Sides & Salads
  {
    id: "7",
    name: "Pap with Morogo",
    description: "Traditional maize porridge served with sautéed wild spinach",
    price: 25.00,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "sides"
  },
  {
    id: "8",
    name: "African Potato Salad",
    description: "Roasted sweet potatoes with indigenous vegetables and herbs",
    price: 30.00,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "sides"
  },
  {
    id: "9",
    name: "Grilled Vegetables",
    description: "Seasonal vegetables grilled with olive oil and African spices",
    price: 28.00,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "sides"
  },

  // Beverages
  {
    id: "10",
    name: "Oshikundu",
    description: "Traditional fermented pearl millet drink, refreshing and nutritious",
    price: 15.00,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "drinks",
    isPopular: true
  },
  {
    id: "11",
    name: "Rooibos Iced Tea",
    description: "Refreshing iced tea made from premium South African rooibos",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "drinks"
  },
  {
    id: "12",
    name: "Baobab Smoothie",
    description: "Creamy smoothie made with baobab fruit and local honey",
    price: 22.00,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "drinks"
  }
];
