import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from "react-native";
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
  const [modalVisible, setModalVisible] = useState(false);

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
              setModalVisible(true);
            }}
          />
        ))}
      </View>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 items-center justify-center bg-black/50">
          <View className="w-96 bg-white rounded-lg p-6 justify-center items-center">
            <Image source={images.dish1} className="mb-8 w-full h-80" />
            <Pressable
              className="bg-primary-500 px-4 py-2 rounded-xl w-60 mb-4"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-white font-semibold text-center">
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default myMeal;
