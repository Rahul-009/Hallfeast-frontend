import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="plans" options={{ headerShown: false }} />
      <Stack.Screen name="myMeal" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="checkout" options={{ headerShown: false }} />
      <Stack.Screen name="addMeal" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TabsLayout;
