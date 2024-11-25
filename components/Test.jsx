import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Card = ({ title, description, imageUrl, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className="bg-white rounded-lg shadow-md p-4 mb-4"
    >
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-40 rounded-md mb-4"
        />
      )}
      <Text className="text-lg font-bold text-gray-800">{title}</Text>
      <Text className="text-sm text-gray-600 mt-2">{description}</Text>
    </TouchableOpacity>
  );
};

export default Card;
