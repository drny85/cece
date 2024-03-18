import Colors from "@/constants/Colors";
import { SIZES } from "@/constants/Sizes";
import { Item } from "@/typing";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const WH = SIZES.width * 0.1;
type Props = {
  colors: Item["colors"];
  onColorSelected: (color: string) => void;
};
const ColorSelector = ({ colors, onColorSelected }: Props) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorPress = (color: string) => {
    setSelectedColor(color);
    onColorSelected(color);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Color:</Text>
      <View style={styles.colorContainer}>
        {colors.map((colorObj, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.colorItem,
              {
                backgroundColor: colorObj.color,
                borderWidth: selectedColor === colorObj.color ? 3 : undefined,
                borderColor:
                  selectedColor === "#fb6f92" ? "black" : Colors.light.ascent,
              },
            ]}
            onPress={() => handleColorPress(colorObj.color)}
          >
            <Text style={styles.colorText} />
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
  colorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  colorItem: {
    width: WH,
    height: WH,
    borderRadius: WH / 2,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  colorText: {
    fontSize: 16,
    color: "white",
  },
  selectedColor: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "lightgray",
  },
  selectedColorText: {
    fontSize: 16,
    color: "black",
  },
});

export default ColorSelector;
