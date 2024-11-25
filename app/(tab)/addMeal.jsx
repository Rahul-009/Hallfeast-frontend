import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { TailwindProvider } from "nativewind";

function Meal() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Top Section */}
      <View className="relative items-center p-4">
        {/* Dish Image */}
        <Image
          source={{
            uri: "https://via.placeholder.com/150", // Replace with your image URL
          }}
          className="w-40 h-40 rounded-full"
        />
        {/* Back Button */}
        <TouchableOpacity className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
          <Text>←</Text>
        </TouchableOpacity>
        {/* Favorite Button */}
        <TouchableOpacity className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
          <Text>❤️</Text>
        </TouchableOpacity>
      </View>

      {/* Dish Name */}
      <View className="px-4">
        <Text className="text-xl font-bold text-gray-800 mb-2">
          Bhuna Khichuri and Thai Chicken
        </Text>

        {/* Ratings, Calories, Time */}
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center space-x-2">
            <Text className="text-yellow-500">⭐ 4.8</Text>
            <Text className="text-gray-600">150 Kcal</Text>
            <Text className="text-gray-600">5-10 Min</Text>
          </View>
        </View>
      </View>

      {/* Tabs */}
      <View className="mt-4 px-4">
        <View className="flex-row justify-around">
          <Text className="text-green-500 border-b-2 border-green-500 pb-1">
            Description
          </Text>
          <Text className="text-gray-600">Ingredients</Text>
          <Text className="text-gray-600">Reviews</Text>
        </View>

        {/* Description */}
        <View className="mt-4">
          <Text className="text-gray-600">
            A delectable and aromatic Indian classic, Chicken Biryani is a
            flavorful rice dish that harmoniously blends tender chicken pieces
            with fragrant basmati rice. This dish is a symphony of spices...
          </Text>
        </View>
      </View>

      {/* Add to Meal Button */}
      <View className="px-4 mt-6">
        <TouchableOpacity className="bg-green-500 p-4 rounded-lg shadow-md">
          <Text className="text-center text-white font-bold">
            Add to my meal
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Meal;
