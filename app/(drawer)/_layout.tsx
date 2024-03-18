import ShoppingBasket from "@/components/item/ShoppingBasket";
import { Text, View } from "@/components/Themed";
import { SIZES } from "@/constants/Sizes";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Pressable, StyleSheet } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

const DrawerLayout = () => (
  <Drawer
    initialRouteName="index"
    screenOptions={{
      headerTitle: () => (
        <Animated.Text
          style={{ fontSize: 18, fontWeight: "600" }}
          entering={FadeInUp}
        >
          Cece Beachwear
        </Animated.Text>
      ),
      headerRight: () => {
        return (
          <View style={{ marginRight: SIZES.margin }}>
            <ShoppingBasket
              onPress={() => {
                router.push("/cart");
              }}
            />
          </View>
        );
      },
    }}
  >
    <Drawer.Screen
      name="index"
      options={{
        drawerLabel: "Home",
      }}
    />
    <Drawer.Screen
      name="(tabs)"
      options={{
        headerTitle: "Tabs",
        drawerLabel: "Tabs",
      }}
    />
  </Drawer>
);

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
});

export default DrawerLayout;
