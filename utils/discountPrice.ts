export const discountPrice = (price: number, discount: number) => {
  return price - price * (discount / 100);
};
