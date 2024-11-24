import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="plans" options={{ headerShown: false }} />
      <Stack.Screen name="cart" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TabsLayout;
