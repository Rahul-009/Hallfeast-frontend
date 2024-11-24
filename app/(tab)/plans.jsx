import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "@/components/Card";

const Plans = () => {
  const [activeCard, setActiveCard] = useState("weekly");

  const plans = [
    { planNo: 1, plan: "weekly", day: "7", cost: "2000" },
    { planNo: 2, plan: "monthly", day: "30", cost: "6000" },
  ];
  return (
    <SafeAreaView className="mx-4">
      <Text className="text-lg font-semibold">Your Plan</Text>

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
    </SafeAreaView>
  );
};

export default Plans;
