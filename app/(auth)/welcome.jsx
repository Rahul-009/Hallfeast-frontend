import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import React from "react";

import images from "@/constants/images";
import CustomButton from "../../components/CustomButton";

const Onboarding = () => {
  const submit = async () => {
    router.replace("/(auth)/sign-in");
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1">
          <Image
            source={images.welcomebg}
            className="absolute top-0 w-full h-2/3"
            resizeMode="cover"
          />

          <View className="absolute bottom-[0] w-full">
            <Image
              source={images.ellipse}
              className="w-full h-100"
              resizeMode="cover"
            />
            <View className="absolute inset-0 justify-center items-center">
              <View className="flex items-center">
                <Text className="text-5xl font-bold text-gray-800">
                  The Fastest
                </Text>
                <Text className="text-5xl font-bold">
                  <Text className="text-primary-500">Token </Text>
                  <Text className="text-black">Provider</Text>
                </Text>
              </View>
              <Text className="text-lg font-bold text-gray-300 mt-3">
                Our job is to filling your tummy with delicious
              </Text>
              <Text className="text-lg font-bold text-gray-300">
                food with convenience
              </Text>
              <View className="w-10 h-4 rounded-lg mt-5" />
              <CustomButton
                title="Get Started"
                handlePress={submit}
                containerStyles="w-80 mt-7 h-14"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Onboarding;
