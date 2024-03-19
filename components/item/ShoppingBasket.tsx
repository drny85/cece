import Colors from "@/constants/Colors";
import { useCartStore } from "@/services/cart";
import { calculateTotalItemsInCart } from "@/utils/calculateTotalItemsInCart";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  onPress: () => void;
  color?: string;
  containerStyle?: StyleProp<ViewStyle>;
};
const ShoppingBasket = ({ onPress, color, containerStyle }: Props) => {
  const items = useCartStore((s) => s.items);

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <FontAwesome name="shopping-bag" size={30} color={color || "#212121"} />
      <View
        style={{
          height: 22,
          width: 22,
          borderRadius: 11,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.light.white,
          position: "absolute",
          top: -7,
          right: -8,
        }}
      >
        <Text
          style={{
            color: Colors.light.ascent,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {calculateTotalItemsInCart(items)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ShoppingBasket;
