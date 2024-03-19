import AddToCart from "@/components/item/AddToCart";
import ColorSelector from "@/components/item/ColorSelector";
import ShoppingBasket from "@/components/item/ShoppingBasket";
import SizeSelector from "@/components/item/SizeSelector";
import Colors from "@/constants/Colors";
import { PIC, PIC2 } from "@/constants/pics";
import { SIZES } from "@/constants/Sizes";
import { useItem } from "@/hooks/item/useItem";
import { CartItem, useCartStore } from "@/services/cart";
import { Item } from "@/typing";
import { discountPrice } from "@/utils/discountPrice";
import { FontAwesome } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";

const modal = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const addToCart = useCartStore((s) => s.addToCart);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const btnDisabled = selectedColor === null || selectedSize === null;
  const { item, loading } = useItem(id);
  if (loading || !item) return null;

  const handleAddToCart = () => {
    if (btnDisabled) {
      Alert.alert("Please select a color and size");
      return;
    }
    const newItem: CartItem = {
      id: new Date().getTime().toString(),
      item,
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
      total: discountPrice(item),
    };

    addToCart(newItem);
    router.push("/cart");
  };

  const pic = parseInt(id) % 2 === 0 ? PIC : PIC2;
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Animated.View style={{ flex: 0.4 }} entering={FadeIn}>
        <Animated.Image
          entering={FadeIn}
          source={pic}
          resizeMode="cover"
          style={styles.image}
        />
      </Animated.View>
      <View style={styles.back}>
        <TouchableOpacity style={styles.btnBack} onPress={router.back}>
          <FontAwesome
            name="chevron-left"
            size={26}
            color={Colors.light.white}
          />
        </TouchableOpacity>
        <ShoppingBasket
          color={Colors.light.ascent}
          onPress={() => {
            router.push("/cart");
          }}
        />
      </View>

      <Animated.View
        entering={FadeInDown.duration(600)}
        style={{ flex: 0.5 }}
        exiting={FadeInUp.duration(400)}
      >
        <ScrollView contentContainerStyle={{ padding: SIZES.padding }}>
          <View>
            <View
              style={{ paddingVertical: SIZES.padding, gap: SIZES.padding }}
            >
              <Text style={styles.name}>{item?.name}</Text>

              <View>
                <Text
                  style={[
                    styles.price,
                    {
                      fontSize: item.percentageOff ? 16 : 22,
                      color: item.percentageOff ? Colors.light.gray : "#212121",
                      textDecorationColor: Colors.light.warning,
                      textDecorationLine: item.percentageOff
                        ? "line-through"
                        : undefined,
                    },
                  ]}
                >
                  ${item.price}
                </Text>
                {item.percentageOff && (
                  <Text style={styles.price}>
                    ${discountPrice(item).toFixed(2)}
                  </Text>
                )}
              </View>
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
            <View>
              <Text style={styles.desc}>{item?.description}</Text>
            </View>
          </View>
        </ScrollView>
      </Animated.View>
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
            handleAddToCart();
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
    height: "100%",
    width: "100%",
  },
  btn: {
    position: "absolute",
    bottom: 30,
    width: "90%",
    zIndex: 30,
    alignSelf: "center",
  },
  btnBack: {
    padding: SIZES.basic,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  desc: {
    fontFamily: "Manjari-Thin",
    fontSize: 16,
    lineHeight: 24,
  },
  name: {
    color: Colors.light.gray,
    fontSize: 18,
    fontWeight: "600",
  },
  back: {
    position: "absolute",
    flexDirection: "row",
    top: SIZES.statusBarHeight,
    justifyContent: "space-between",
    paddingHorizontal: SIZES.padding,
    alignItems: "center",
    width: "100%",
    zIndex: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
