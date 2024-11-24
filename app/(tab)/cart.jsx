import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import images from "@/constants/images";

const Cart = () => {
  const title = "";
  return (
    <View className="flex-1 h-screen">
      <View className="flex flex-col h-screen">
        <View className="flex flex-row absolute z-10 top-16 items-center justify-start px-5">
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <View className="w-10 h-10 rounded-full items-center justify-center">
              <Image source={images.arrowLeft} />
            </View>
          </TouchableOpacity>

          <Text className="text-xl ml-5">{title || "Go Back"}</Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;
