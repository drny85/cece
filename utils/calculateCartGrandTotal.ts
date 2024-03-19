import { CartItem } from "@/services/cart";
import { discountPrice } from "./discountPrice";

export const calculateCartGrandTotal = (items: CartItem[]) => {
  return items.reduce(
    (total, item) => total + discountPrice(item.item) * item.quantity,
    0
  );
};
