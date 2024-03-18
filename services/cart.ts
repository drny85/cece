import { Item } from "@/typing";
import { create } from "zustand";

type CartItem = {
  id: string;
  item: Item;
  total: number;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addToCart: (product) =>
    set((state) => ({ items: [...state.items, product] })),
  removeFromCart: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),
}));
