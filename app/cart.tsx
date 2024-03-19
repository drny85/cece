import CartListItem from "@/components/cart/CartListItem";
import Colors from "@/constants/Colors";
import { SIZES } from "@/constants/Sizes";
import { router } from "expo-router";
import React, { useCallback } from "react";
import { Button, FlatList, ListRenderItem, Text, View } from "react-native";
import { CartItem, useCartStore } from "../services/cart";

const Cart = () => {
  const items = useCartStore((s) => s.items);
  console.log(JSON.stringify(items[0], null, 2));

  const renderItems: ListRenderItem<CartItem> = useCallback(
    ({ item, index }) => {
      return <CartListItem item={item} index={index} />;
    },
    []
  );

  if (items.length === 0)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: SIZES.padding * 2,
        }}
      >
        <Text style={{ fontSize: 24, fontFamily: "Genos-Bold" }}>
          Cart is empty
        </Text>

        <Button
          color={Colors.light.ascent}
          title="Shop Now"
          onPress={() => router.back()}
        />
      </View>
    );
  return (
    <View>
      <FlatList
        contentContainerStyle={{ gap: SIZES.padding, padding: SIZES.padding }}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Cart;
