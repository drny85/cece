import { SIZES } from "@/constants/Sizes";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  colors: string[];
  onColorSelected?: (color: string) => void;
  small?: boolean;
  showTitle?: boolean;
};
const ColorSelector = ({
  colors,
  onColorSelected,
  small,
  showTitle = false,
}: Props) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorPress = (color: string) => {
    setSelectedColor(color);
    if (!onColorSelected) return;
    onColorSelected(color);
  };

  return (
    <View style={styles.container}>
      {showTitle && <Text style={styles.title}>Select a Color:</Text>}
      <View style={[styles.colorContainer, { gap: small ? 4 : SIZES.padding }]}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.colorItem,
              {
                backgroundColor: color,
                width: small ? 26 : 40,
                height: small ? 26 : 40,
                borderRadius: small ? 13 : 20,
                borderWidth: color === selectedColor ? 2 : undefined,
                borderColor:
                  color === selectedColor && selectedColor === "#212121"
                    ? "red"
                    : "#212121",
              },
            ]}
            onPress={() => handleColorPress(color)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  colorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    flexWrap: "wrap",
    //gap: SIZES.padding,
  },
  colorItem: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  selectedColor: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  selectedColorText: {
    fontSize: 16,
    color: "white",
  },
});

export default ColorSelector;
