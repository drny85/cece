import { Item } from "@/typing";
export const discountPrice = (item: Item) => {
  return item.percentageOff
    ? item.price - item.price * (item.percentageOff / 100)
    : item.price;
};
