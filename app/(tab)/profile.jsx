import React from "react";
import {
  View,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

import ProfileCard from "../../components/ProfileCard";
import Header from "@/components/Header";

import images from "@/constants/images";

export default function ProfileScreen() {
  const [isPushNotificationEnabled, setIsPushNotificationEnabled] =
    React.useState(true);

  const toggleSwitch = () =>
    setIsPushNotificationEnabled(!isPushNotificationEnabled);

  const handleBack = () => {
    router.replace("/(tab)/home");
  };

  const handlePress = () => {
    router.replace("/(tab)/checkout");
  };

  const menuItems = [
    { title: "Profile information", pagePath: "" },
    { title: "Order History", pagePath: "" },
    { title: "Select your plan", pagePath: "/(tab)/plans" },
    { title: "Location", pagePath: "" },
    { title: "Gift Voucher", pagePath: "" },
    { title: "Refer a friend", pagePath: "" },
    { title: "Push notification", isSwitch: true },
    { title: "Contact Us", pagePath: "" },
    { title: "Logout", pagePath: "" },
  ];

  return (
    <ScrollView className="flex-1 bg-white mt-6">
      <Header title="Profile" handleBack={handleBack} />
      <View className="m-4">
        <ProfileCard image={images.avatar} />

        {/* Menu Items */}
        <View className="m-5 ">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              onPress={
                item.pagePath
                  ? () => {
                      router.replace(item.pagePath);
                    }
                  : () => {}
              }
              key={index}
              className="flex-row items-center justify-between px-4 py-3"
              // activeOpacity={item.isSwitch ? 1 : 0.7} // Disable click opacity for switch rows
            >
              <Text className="text-base text-gray-800">{item.title}</Text>
              {item.isSwitch ? (
                <Switch
                  trackColor={{ false: "#E5E7EB", true: "#10B981" }}
                  thumbColor={isPushNotificationEnabled ? "#ffffff" : "#f4f4f4"}
                  ios_backgroundColor="#E5E7EB"
                  onValueChange={toggleSwitch}
                  value={isPushNotificationEnabled}
                />
              ) : (
                <Image source={images.chevronRight} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
