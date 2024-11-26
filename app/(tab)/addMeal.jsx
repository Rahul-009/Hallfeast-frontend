import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import images from "../../constants/images";
import CustomButton from "@/components/CustomButton";
import MealTags from "@/components/MealTags";
import { router } from "expo-router";

function Meal() {
  const [isLoved, setIsLoved] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const favorite = () => {
    setIsLoved(!isLoved);
  };

  return (
    <SafeAreaView className="flex-1">
      {/* Top Section */}
      <View className="mt-6 flex-row justify-between items-center px-4 py-3 bg-gray-100 shadow-md">
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => {
            router.replace("/(tab)/home");
          }}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <Image source={images.arrowLeft} />
        </TouchableOpacity>

        {/* Love Button */}
        <TouchableOpacity
          onPress={favorite}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
        >
          {isLoved ? (
            <Image source={images.redHeart} />
          ) : (
            <Image source={images.heart} />
          )}
        </TouchableOpacity>
      </View>
      {/* Dish Name */}
      <View className="justify-center items-center m-4">
        <Image source={images.dish2} className="" />
      </View>
      <ScrollView className="flex-1 bg-gray-50 p-6">
        <View>
          <Text className="text-xl font-bold text-gray-800 mb-2">
            Bhuna Khichuri and Thai Chicken
          </Text>
        </View>
        {/* Tags */}
        <View className="flex-row justify-start items-center">
          <MealTags icon={images.star} str="4.8" />
          <MealTags icon={images.fire} str="150 Kcal" />
        </View>
        {/* Tabs */}
        <View className="mt-4">
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
      </ScrollView>
      <View className="px-4 mt-6">
        <CustomButton
          title="Add to my meal"
          containerStyles="h-16 absolute bottom-10 w-11/12 m-8"
          handlePress={() => {
            setModalVisible(true);
          }}
        />
      </View>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 items-center justify-center bg-black/50">
          <View className="w-80 bg-white rounded-lg p-6 justify-center items-center">
            <Text className="text-2xl text-bold mb-10"> Are you sure?</Text>
            <View className="flex-row justify-between w-64">
              <Pressable
                className="bg-primary-500 px-4 py-2 rounded-xl w-28 mb-4"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text className="text-white font-semibold text-center">
                  Go Back
                </Text>
              </Pressable>
              <Pressable
                className="bg-primary-500 px-4 py-2 rounded-xl w-28 mb-4"
                onPress={() => {
                  setModalVisible(false);
                  router.replace("/(tab)/myMeal");
                }}
              >
                <Text className="text-white font-semibold text-center">
                  Confirm
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default Meal;
