import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import CustomButton from "../components/CustomButton";

import { router } from "expo-router";

const MenuCard = ({ title, image }) => {
  return (
    <View className="bg-general-500 rounded-lg shadow-md p-4 mb-2 w-[48%] justify-center items-center">
      <Image source={image} className="w-36 h-36 rounded-md mb-4" />
      <Text className="text-center text-lg font-bold text-gray-800">
        {title}
      </Text>
      <CustomButton
        title="Grab It"
        containerStyles="w-3/4 mt-2"
        handlePress={() => {
          router.replace("/(tab)/addMeal");
        }}
      />
    </View>
  );
};

export default MenuCard;
