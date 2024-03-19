import Colors from "@/constants/Colors";
import { useCartStore } from "@/services/cart";
import { calculateTotalItemsInCart } from "@/utils/calculateTotalItemsInCart";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  onPress: () => void;
  color?: string;
};
const ShoppingBasket = ({ onPress, color }: Props) => {
  const items = useCartStore((s) => s.items);

  return (
    <TouchableOpacity style={{ position: "relative" }} onPress={onPress}>
      <FontAwesome name="shopping-bag" size={26} color={color || "#212121"} />
      <View
        style={{
          height: 20,
          width: 20,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.light.ascent,
          position: "absolute",
          top: -7,
          right: -8,
        }}
      >
        <Text style={{ color: Colors.light.white, fontWeight: "700" }}>
          {calculateTotalItemsInCart(items)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ShoppingBasket;
