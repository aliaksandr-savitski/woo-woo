export interface CartItem {
  id: number;
  quantity: number;
  name: string;
  price: number;
  subtotal: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}
