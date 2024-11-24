import { Stack } from "expo-router";
import React from "react";

import "../global.css";
import { StatusBar } from "react-native";

const RootLayout = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayout;
