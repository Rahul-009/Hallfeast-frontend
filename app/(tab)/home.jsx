import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "@/constants/images";

const Home = () => {
  // State to track the selected date
  const [selectedDate, setSelectedDate] = useState("25");
  const [meal, setMeal] = useState("lunch");

  // Example data for dates (you can generate dynamically as needed)
  const dates = [
    { day: "SUN", date: "23" },
    { day: "MON", date: "24" },
    { day: "TUE", date: "25" },
    { day: "WED", date: "26" },
    { day: "THU", date: "27" },
    { day: "FRI", date: "28" },
    { day: "SAT", date: "29" },
  ];

  const meals = [
    { meal: "lunch", image: images.dish1 },
    { meal: "dinner", image: images.dish1 },
    { meal: "breakfast", image: images.dish1 },
    { meal: "snacks", image: images.dish1 },
  ];

  return (
    <SafeAreaView className="m-4">
      <View className="mb-4">
        <Text className="text-4xl">
          Good Afternoon, <Text className="text-primary-500">Rehan</Text>
        </Text>
        <Text className="text-gray-400">Choose the right meal for you</Text>
      </View>

      {/* Date Section */}
      <View className="py-4">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-semibold">Serving this Month</Text>
          <Text className="text-sm text-green-500">23-29 Jan (7 Days)</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dates.map((item) => (
            <TouchableOpacity
              key={item.date}
              onPress={() => setSelectedDate(item.date)}
              className={`w-20 h-20 items-center justify-center mx-2 rounded-xl ${
                selectedDate === item.date ? "bg-green-100" : "bg-gray-200"
              }`}
            >
              <Text className="text-sm font-semibold">{item.day}</Text>
              <Text
                className={`text-lg font-bold ${
                  selectedDate === item.date ? "text-green-600" : "text-black"
                }`}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Meal section */}
      <View className="py-4">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-semibold">Today's Meal</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {meals.map((item) => (
            <TouchableOpacity
              key={item.meal}
              onPress={() => setMeal(item.meal)}
              className={`w-20 h-20 items-center justify-center mx-2 rounded-full ${
                meal === item.meal ? "bg-green-100" : "bg-gray-200"
              }`}
            >
              <Image source={item.image} className="w-14 h-14" />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
