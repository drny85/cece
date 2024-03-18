import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { SIZES } from "@/constants/Sizes";

type Props = {
  onPress: () => void;
  onPressFavorite: () => void;
  disabled?: boolean;
};

const AddToCart = ({ disabled, onPress, onPressFavorite }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressFavorite}>
        <FontAwesome name="heart-o" size={32} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.btn,
          {
            opacity: disabled ? 0.6 : 1,
          },
        ]}
      >
        <Text style={styles.text}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: SIZES.padding,
  },
  btn: {
    paddingHorizontal: SIZES.padding * 2,
    backgroundColor: Colors.light.ascent,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: SIZES.padding,
    borderRadius: SIZES.radius * 2,
  },
  text: {
    color: Colors.light.white,
    fontSize: 20,
    fontWeight: "800",
  },
});
