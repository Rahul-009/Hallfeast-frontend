import { View, Text, Image } from "react-native";
import React from "react";

const MealTags = ({ icon, str }) => {
  return (
    <View className="flex-row justify-center items-center shadow-md z-10 w-1/4 h-12 bg-general-500 m-2 rounded-xl">
      <Image source={icon} />
      <Text>{str}</Text>
    </View>
  );
};

export default MealTags;
