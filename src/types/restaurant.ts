
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isPopular?: boolean;
  isSpicy?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
}
