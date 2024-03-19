import Colors from "@/constants/Colors";
import { useCartStore } from "@/services/cart";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(drawer)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Genos: require("../assets/fonts/Genos-Regular.ttf"),
    "Genos-Bold": require("../assets/fonts/Genos-SemiBold.ttf"),
    Manjari: require("../assets/fonts/Manjari-Regular.ttf"),
    "Manjari-Bold": require("../assets/fonts/Manjari-Bold.ttf"),
    "Manjari-Thin": require("../assets/fonts/Manjari-Thin.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

export function RootLayoutNav() {
  const { clearCart, items } = useCartStore();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="(drawer)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="item-details"
          options={{
            presentation: "fullScreenModal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="checkout"
          options={{
            title: "Checkout",
            presentation: "fullScreenModal",
            headerTitleStyle: {
              color: Colors.light.white,
              fontFamily: "Manjari-Bold",
              fontSize: 22,
            },
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.light.ascent,
            },
            headerLeft: () => (
              <TouchableOpacity>
                <FontAwesome
                  name="chevron-left"
                  size={24}
                  color={Colors.light.white}
                  onPress={router.back}
                />
              </TouchableOpacity>
            ),
            //headerShown: false,
          }}
        />
        <Stack.Screen
          name="cart"
          options={{
            title: "Shopping Cart",
            presentation: "fullScreenModal",
            headerTitleStyle: {
              color: Colors.light.white,
              fontFamily: "Manjari-Bold",
              fontSize: 22,
            },
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.light.ascent,
            },
            headerLeft: () => (
              <TouchableOpacity>
                <FontAwesome
                  name="chevron-left"
                  size={24}
                  color={Colors.light.white}
                  onPress={router.back}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                disabled={items.length === 0}
                onPress={() => {
                  Alert.alert("Empty Cart", "Do you want to empty the cart?", [
                    { text: "Cancel", style: "cancel" },
                    { text: "Yes", style: "destructive", onPress: clearCart },
                  ]);
                }}
              >
                <Text style={{ fontFamily: "Genos-Bold", fontSize: 20 }}>
                  Clear
                </Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
