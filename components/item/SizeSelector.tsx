import Colors from "@/constants/Colors";
import { Item } from "@/typing";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown, FadeOut } from "react-native-reanimated";

type SizeSelectorProps = {
  item: Item;
  selectedColor: string | null;
  onSizeSelected: (size: string) => void;
};

const SizeSelector: React.FC<SizeSelectorProps> = ({
  item,
  selectedColor,
  onSizeSelected,
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [qty, setQty] = useState<number | null>(null);

  const handleSizePress = (size: string) => {
    setSelectedSize(size);
    onSizeSelected(size);
  };

  const availableSizes = selectedColor
    ? item.colors.find((colorObj) => colorObj.color === selectedColor)
        ?.availableSizes
    : [];

  return (
    <View style={styles.container}>
      {selectedSize && qty === 1 && (
        <Animated.Text
          entering={FadeInDown}
          exiting={FadeOut}
          style={{ color: Colors.light.warning, fontSize: 14, marginBottom: 4 }}
        >
          Hurry, it's almost sold out
        </Animated.Text>
      )}
      <Text style={styles.title}>Select a Size:</Text>
      <View style={styles.sizeContainer}>
        {availableSizes &&
          availableSizes.map((sizeObj, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.sizeItem,
                {
                  backgroundColor: Colors.light.background,
                  borderColor:
                    selectedSize === sizeObj.size
                      ? Colors.light.ascent
                      : "gray",
                  borderWidth: selectedSize === sizeObj.size ? 2 : 1,
                  borderStyle: sizeObj.quantity === 0 ? "dashed" : "solid",
                },
              ]}
              onPress={() => {
                handleSizePress(sizeObj.size);
                setQty(sizeObj.quantity);
              }}
              disabled={sizeObj.quantity === 0}
            >
              <Text
                style={[
                  styles.sizeText,
                  {
                    fontWeight:
                      selectedSize === sizeObj.size ? "800" : "normal",
                  },
                ]}
              >
                {sizeObj.size}
              </Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: Colors.light.background,
  },
  sizeItem: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  sizeText: {
    fontSize: 16,
  },
  selectedSize: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
});

export default SizeSelector;
