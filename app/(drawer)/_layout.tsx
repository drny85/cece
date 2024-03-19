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
    style={{
      fontSize: 30,
      fontFamily: "Genos-Bold",
      color: Colors.light.white,
    }}
    entering={FadeInUp}
  >
    {title}
  </Animated.Text>
);

const DrawerLayout = () => (
  <Drawer
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.light.ascent,
      },
      headerRight: () => {
        return (
          <ShoppingBasket
            containerStyle={{ marginRight: SIZES.padding * 1.5 }}
            onPress={() => {
              router.push("/cart");
            }}
          />
        );
      },
    }}
  >
    <Drawer.Screen
      name="(tabs)"
      options={{
        headerTitle: () => <HeaderTitle title="Cece Beachwear" />,
        drawerLabel: "Home",
        headerStyle: {
          backgroundColor: Colors.light.ascent,
        },
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
