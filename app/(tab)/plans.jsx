import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import Card from "@/components/Card";
import Header from "@/components/Header";
import CustomButton from "@/components/CustomButton";

const Plans = () => {
  const [activeCard, setActiveCard] = useState("week");

  const handleBack = () => {
    router.replace("/(tab)/profile");
  };

  const handlePress = () => {
    router.replace("/(tab)/checkout");
  };

  const plans = [
    { planNo: 1, plan: "week", day: "7", cost: "2000" },
    { planNo: 2, plan: "month", day: "30", cost: "6000" },
  ];
  return (
    <SafeAreaView>
      <Header title="Plans" handleBack={handleBack} />
      <View className="justify-between ">
        <View className="m-4 mt-6 h-3/4">
          <Text className="ml-2 text-xl font-semibold">Your Plan</Text>

          {plans.map((plan) => (
            <Card
              key={plan.planNo}
              plan={plan.plan}
              days={plan.day}
              cost={plan.cost}
              isActive={activeCard === plan.plan}
              onPress={() => setActiveCard(`${plan.plan}`)}
            />
          ))}
        </View>

        <CustomButton
          title="Select your plan"
          containerStyles="m-6 h-14"
          handlePress={handlePress}
        />
      </View>
    </SafeAreaView>
  );
};

export default Plans;
