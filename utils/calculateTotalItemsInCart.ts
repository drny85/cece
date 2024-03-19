import { CartItem } from "@/services/cart";

export const calculateTotalItemsInCart = (items: CartItem[]): number =>
  items.reduce((acc, item) => acc + item.quantity, 0);
