import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { PIC } from "@/constants/pics";
import { SIZES } from "@/constants/Sizes";
import { StatusBar } from "expo-status-bar";
import { router, useLocalSearchParams } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useItem } from "@/hooks/item/useItem";
import ColorSelector from "@/components/item/ColorSelector";
import SizeSelector from "@/components/item/SizeSelector";
import Animated, { FadeInUp } from "react-native-reanimated";
import AddToCart from "@/components/item/AddToCart";

const modal = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const btnDisabled = selectedColor === null || selectedSize === null;
  const { item, loading } = useItem(id);
  if (loading) return null;
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <ImageBackground source={PIC} resizeMode="cover" style={styles.image}>
        <TouchableOpacity style={styles.back} onPress={router.back}>
          <FontAwesome
            name="chevron-left"
            size={26}
            color={Colors.light.white}
          />
        </TouchableOpacity>
      </ImageBackground>
      <ScrollView contentContainerStyle={{ padding: SIZES.padding }}>
        <View>
          <View style={{ paddingVertical: SIZES.padding, gap: SIZES.padding }}>
            <Text style={styles.name}>{item?.name}</Text>

            <Text style={styles.price}>${item?.price}</Text>
          </View>
          <View style={{ width: "100%" }}>
            <ColorSelector
              colors={item?.colors!}
              onColorSelected={(color) => {
                setSelectedColor(color);
              }}
            />
            {selectedColor && (
              <Animated.View entering={FadeInUp}>
                <SizeSelector
                  item={item!}
                  selectedColor={selectedColor}
                  onSizeSelected={(size) => {
                    setSelectedSize(size);
                  }}
                />
              </Animated.View>
            )}
          </View>
        </View>
      </ScrollView>
      <View style={styles.btn}>
        <AddToCart
          onPressFavorite={() => {}}
          onPress={() => {
            console.log(btnDisabled);
            if (btnDisabled) {
              Alert.alert(
                "Color or Size Missing",
                "You must select a color then a size"
              );
              return;
            }
            console.log(selectedColor, selectedSize);
            router.push("/cart");
          }}
          disabled={btnDisabled}
        />
      </View>
    </View>
  );
};

export default modal;

const styles = StyleSheet.create({
  image: {
    height: SIZES.height * 0.4,
  },
  btn: {
    position: "absolute",
    bottom: 30,
    width: "90%",
    zIndex: 30,
    alignSelf: "center",
  },
  name: {
    color: Colors.light.gray,
    fontSize: 18,
    fontWeight: "600",
  },
  back: {
    position: "absolute",
    top: SIZES.statusBarHeight,
    left: 20,
    zIndex: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
