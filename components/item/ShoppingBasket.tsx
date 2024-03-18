import { TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
};
const ShoppingBasket = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome name="shopping-bag" size={26} />
    </TouchableOpacity>
  );
};

export default ShoppingBasket;
