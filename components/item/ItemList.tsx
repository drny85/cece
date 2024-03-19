import Colors from "@/constants/Colors";
import { PIC } from "@/constants/pics";
import { SIZES } from "@/constants/Sizes";
import { Item } from "@/typing";
import { discountPrice } from "@/utils/discountPrice";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

type Props = {
  item: Item;
  index: number;
};

const ItemList = ({ item, index }: Props) => {
  const discount = item.percentageOff
    ? discountPrice(item.price, item.percentageOff)
    : item.price;

  return (
    <Animated.View
      entering={FadeIn.delay(index * 200)}
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
        href={{
          pathname: "/item-details",
          params: { id: item.id! },
        }}
      >
        <TouchableOpacity>
          <Animated.Image
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

        <View style={styles.priceContainer}>
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
              <Text style={styles.price}>${discount.toFixed(2)}</Text>
            )}
          </View>

          <Text style={{ color: Colors.light.gray }}>
            {item.colors.length} colors
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  price: {
    fontSize: 22,
    fontWeight: "700",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
