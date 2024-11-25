import { View, Text, Image, TouchableOpacity } from "react-native";
import images from "@/constants/images";

const CartItem = ({ title, subtitle, quantity, image, isActive, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      className={`w-11/12 m-4 p-4 rounded-3xl bg-general-500 ${
        isActive ? "shadow-xl z-10" : "shadow-md"
      }`}
    >
      <View>
        <View className="flex-row justify-between">
          <View className="flex-row justify-between">
            <Image source={image} className="w-24 h-24" />
            <View className={`m-4 ${isActive ? "w-52" : "w-64"}`}>
              <Text className={`text-lg font-semibold text-gray-80 text-wrap`}>
                {title}
              </Text>
              <Text className={`text-sm text-gray-500`}>{subtitle}</Text>
            </View>
          </View>

          {isActive ? (
            <View className="bg-danger-500 rounded-xl p-2 items-center justify-center">
              <Image
                source={images.trash}
                className="w-8 h-8"
                resizeMode="contain"
              />
            </View>
          ) : (
            <View className="bg-primary-500"></View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;
