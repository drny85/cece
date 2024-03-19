import ShoppingBasket from "@/components/item/ShoppingBasket";
import { View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { SIZES } from "@/constants/Sizes";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { StyleSheet } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

const HeaderTitle = ({ title }: { title: string }) => (
  <Animated.Text
    style={{ fontSize: 30, fontFamily: "Genos-Bold" }}
    entering={FadeInUp}
  >
    {title}
  </Animated.Text>
);

const DrawerLayout = () => (
  <Drawer
    screenOptions={{
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
      name="(tabs)"
      options={{
        headerTitle: () => <HeaderTitle title="Cece Beachwear" />,
        drawerLabel: "Home",
      }}
    />
    <Drawer.Screen
      name="new-in"
      options={{
        drawerLabel: "New In",
        headerTitle: () => <HeaderTitle title="New In" />,
      }}
    />
    <Drawer.Screen
      name="sales"
      options={{
        drawerLabel: "Sales",
        headerTitle: () => <HeaderTitle title="Sales" />,
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
