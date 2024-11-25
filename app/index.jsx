import { Redirect } from "expo-router";
import { Image, StatusBar, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import images from "../constants/images";

const Home = () => {
  return (
    <Redirect href="/(tab)/home" />
    // <View className="bg-primary-100">
    //   <Text>Hello</Text>
    //   <Image source={images.img} />
    // </View>
  );
};

export default Home;
