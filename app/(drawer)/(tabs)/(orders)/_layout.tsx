import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const OrderLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="index"
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default OrderLayout;
