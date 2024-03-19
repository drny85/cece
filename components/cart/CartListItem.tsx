import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CartItem } from "@/services/cart";
import Colors from "@/constants/Colors";
import { SIZES } from "@/constants/Sizes";
import { discountPrice } from "@/utils/discountPrice";
import { PIC, PIC2 } from "@/constants/pics";
import Animated, {
  FadeInUp,
  FadeOutLeft,
  FadeOutRight,
} from "react-native-reanimated";
import { Link } from "expo-router";

type Props = {
  item: CartItem;
  index: number;
};

const CartListItem = ({ item, index }: Props) => {
  const pic = parseInt(item.id) % 2 === 0 ? PIC : PIC2;
  return (
    <Animated.View
      entering={FadeInUp.delay(200 * index)}
      exiting={FadeOutLeft.duration(300)}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        shadowOffset: { height: -3, width: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: Colors.light.gray,
        elevation: 2,
        backgroundColor: "#ffffff",
        borderRadius: SIZES.radius * 0.6,
        overflow: "hidden",
      }}
    >
      <View>
        <Image
          resizeMode="cover"
          source={pic}
          style={{ width: 100, height: 100, borderRadius: 3 }}
        />
      </View>
      <View style={{ padding: SIZES.basic, flex: 1 }}>
        <View style={styles.nameView}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={{
              fontFamily: "Manjari-Bold",
              fontSize: 20,
            }}
          >
            {item.item.name.length > 40
              ? item.item.name + " ..."
              : item.item.name}
          </Text>
        </View>
        <View
          style={{
            marginTop: SIZES.basic,
            gap: SIZES.basic,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              gap: SIZES.padding,
            }}
          >
            <Text style={{ fontFamily: "Genos", fontSize: 18 }}>
              Size : {item.size}
            </Text>
            <View style={styles.color}>
              <Text style={{ fontFamily: "Genos", fontSize: 18 }}>Color:</Text>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  backgroundColor: item.color,
                  borderWidth: 1,
                  borderColor: Colors.light.ascent,
                }}
              />
            </View>
          </View>
          <View>
            <Text
              style={[
                styles.price,
                {
                  fontSize: item.item.percentageOff ? 16 : 22,
                  color: item.item.percentageOff
                    ? Colors.light.gray
                    : "#212121",
                  textDecorationColor: Colors.light.warning,
                  textDecorationLine: item.item.percentageOff
                    ? "line-through"
                    : undefined,
                },
              ]}
            >
              ${item.item.price}
            </Text>
            {item.item.percentageOff && (
              <Text style={styles.price}>
                ${discountPrice(item.item).toFixed(2)}
              </Text>
            )}
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default CartListItem;

const styles = StyleSheet.create({
  nameView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  color: {
    flexDirection: "row",
    alignItems: "center",
    gap: SIZES.padding * 0.6,
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
  },
});
