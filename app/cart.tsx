import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback } from "react";
import { CartItem, useCartStore } from "../services/cart";
import { PIC } from "@/constants/pics";

type Props = {};

const Cart = (props: Props) => {
  const items = useCartStore((s) => s.items);
  console.log(JSON.stringify(items[0], null, 2));

  const renderItems: ListRenderItem<CartItem> = useCallback(
    ({ item, index }) => {
      return (
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image source={PIC} style={{ width: 100, height: 100 }} />
          </View>
          <View>
            <Text>{item.item.name}</Text>
          </View>
        </View>
      );
    },
    []
  );
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItems}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
