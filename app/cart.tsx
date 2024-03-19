import CartListItem from "@/components/cart/CartListItem";
import Colors from "@/constants/Colors";
import { SIZES } from "@/constants/Sizes";
import { calculateCartGrandTotal } from "@/utils/calculateCartGrandTotal";
import { router } from "expo-router";
import React, { useCallback } from "react";
import {
  Button,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CartItem, useCartStore } from "../services/cart";

const Cart = () => {
  const items = useCartStore((s) => s.items);
  const insets = useSafeAreaInsets();

  const handlePayment = () => {
    router.push("/checkout");
  };

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
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{ gap: SIZES.padding, padding: SIZES.padding }}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItems}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <TouchableOpacity
        onPress={handlePayment}
        style={[styles.checkout, { marginBottom: insets.bottom }]}
      >
        <Text style={styles.checkoutText}>
          Pay {calculateCartGrandTotal(items)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  checkout: {
    padding: SIZES.padding,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.ascent,
    borderRadius: SIZES.radius * 2,
    marginHorizontal: SIZES.padding,
  },
  checkoutText: {
    fontSize: 32,
    fontFamily: "Genos-Bold",
    //color: Colors.light.white,
  },
});
