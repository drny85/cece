import Colors from "@/constants/Colors";
import { ItemSizes } from "@/typing";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
type Props = {
  sizes: string[];
  onSizeSelected: (size: string) => void;
};
const SizeSelector = ({ sizes, onSizeSelected }: Props) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizePress = (size: string) => {
    setSelectedSize(size);
    onSizeSelected(size);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Size:</Text>
      <View style={styles.sizeContainer}>
        {sizes.map((size, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.sizeItem,
              selectedSize === size && styles.selectedSize,
            ]}
            onPress={() => handleSizePress(size)}
          >
            <Text
              style={[
                styles.sizeText,
                selectedSize === size && { fontWeight: "800" },
              ]}
            >
              {size}
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
  },
  sizeItem: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  sizeText: {
    fontSize: 16,
  },
  selectedSize: {
    borderColor: "black",
    borderWidth: 2,
  },
  selectedSizeText: {
    fontSize: 16,
    color: "black",
  },
});

export default SizeSelector;
