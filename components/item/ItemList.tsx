import Colors from "@/constants/Colors";
import { PIC } from "@/constants/pics";
import { SIZES } from "@/constants/Sizes";
import { Item } from "@/typing";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  item: Item;
};

const ItemList = ({ item }: Props) => {
  return (
    <View
      style={{
        backgroundColor: Colors.light.white,
        borderRadius: SIZES.radius,
        shadowOffset: { width: 4, height: -3 },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 0.4,
        shadowColor: Colors.light.gray,
        width: SIZES.width * 0.48,
      }}
    >
      <Link
        asChild
        href={{ pathname: "/item-details", params: { id: item.id! } }}
      >
        <TouchableOpacity>
          <Image
            source={PIC}
            resizeMode="cover"
            style={{
              width: "100%",
              height: SIZES.height * 0.25,
              overflow: "hidden",
              borderTopLeftRadius: SIZES.radius,
              borderTopRightRadius: SIZES.radius,
            }}
          />
        </TouchableOpacity>
      </Link>
      <View style={{ padding: SIZES.padding, gap: SIZES.padding }}>
        <Text
          style={{
            color: Colors.light.gray,
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          {item.name}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "700" }}>${item.price}</Text>
          <Text style={{ color: Colors.light.gray }}>
            {item.colors.length} colors
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({});
