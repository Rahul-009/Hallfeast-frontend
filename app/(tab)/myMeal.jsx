import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import images from "@/constants/images";

import CartItem from "@/components/CartItem";
import Header from "@/components/Header";
import CustomButton from "@/components/CustomButton";

const cartData = [
  {
    id: 1,
    title: "Mexican Vegetables and Salad",
    subtitle: "Chicken Fried with Khichuri",
    quantity: 2,
    image: images.dish2,
  },
  {
    id: 2,
    title: "Sahi Polao and Korma Deshi Cuisine",
    subtitle: "Chicken Fried with Khichuri",
    quantity: 1,
    image: images.dish1,
  },
];

const myMeal = () => {
  const [activeItem, setactiveItem] = useState(1);

  return (
    <SafeAreaView className="h-screen flex justify-between">
      <View>
        <Header
          title="My Meals"
          handleBack={() => {
            router.replace("/(tab)/home");
          }}
        />
        {cartData.map((item) => (
          <CartItem
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            quantity={item.quantity}
            isActive={activeItem == item.id}
            onPress={() => {
              setactiveItem(item.id);
            }}
          />
        ))}
      </View>
      {/* <CustomButton title="Checkout" containerStyles="m-4" /> */}
    </SafeAreaView>
  );
};

export default myMeal;
