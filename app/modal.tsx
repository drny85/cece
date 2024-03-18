import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { PIC } from "@/constants/pics";
import { SIZES } from "@/constants/Sizes";
import { StatusBar } from "expo-status-bar";
import { router, useLocalSearchParams } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useItem } from "@/hooks/item/useItem";
import ColorSelector from "@/components/item/ColorSelector";
import SizeSelector from "@/components/item/SizeSelector";

const modal = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
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
          <Text style={styles.price}>${item?.price}</Text>
          <View style={{ width: "100%" }}>
            <ColorSelector
              showTitle
              colors={item?.colors!}
              onColorSelected={() => {}}
            />
            <SizeSelector sizes={item?.sizes!} onSizeSelected={() => {}} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default modal;

const styles = StyleSheet.create({
  image: {
    height: SIZES.height * 0.4,
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
