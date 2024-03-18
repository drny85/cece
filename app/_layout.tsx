import Colors from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(drawer)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
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
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen
          name="item-details"
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="cart"
          options={{
            title: "Shopping Cart",
            presentation: "fullScreenModal",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.light.background,
            },
            headerLeft: () => (
              <TouchableOpacity>
                <FontAwesome
                  name="chevron-left"
                  size={24}
                  color="black"
                  onPress={router.back}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
