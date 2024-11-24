import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import images from "@/constants/images";

const Header = ({ title, handleBack }) => {
  return (
    <View className="mt-6 flex-row items-center px-4 py-3 bg-gray-100 shadow-md">
      {/* Back Button */}
      <TouchableOpacity
        onPress={handleBack}
        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
      >
        <Image source={images.arrowLeft} />
      </TouchableOpacity>

      {/* Title */}
      <Text className="flex-1 text-center text-xl font-medium text-gray-800 mr-14">
        {title}
      </Text>
    </View>
  );
};

export default Header;
