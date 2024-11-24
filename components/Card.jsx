import { View, Text, Image, TouchableOpacity } from "react-native";
import images from "@/constants/images";

const Card = ({ plan, days, cost, isActive, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      className={`w-11/12 m-4 p-4 shadow-md rounded-3xl ${
        isActive ? "bg-primary-500" : "bg-general-500"
      }`}
    >
      <View>
        {/* Title and Info */}
        <View className="flex-row justify-between items">
          <View>
            <Text
              className={`"text-lg font-semibold text-gray-800" ${
                isActive ? "text-white" : "text-black"
              }`}
            >
              {plan} Plan
            </Text>
            <Text
              className={`text-sm text-gray-500 ${
                isActive ? "text-white" : "text-black"
              }`}
            >
              For {days} days
            </Text>
          </View>

          {isActive ? (
            <Image source={images.arrowCircle} resizeMode="contain" />
          ) : (
            <Image source={images.arrowCircleDark} resizeMode="contain" />
          )}
        </View>

        {/* Price Section */}
        <View className="mt-4 self-end">
          <Text
            className={`text-sm text-gray-500 ${
              isActive ? "text-white" : "text-black"
            }`}
          >
            Per month
          </Text>
          <Text
            className={`text-xl font-bold text-gray-800 ${
              isActive ? "text-white" : "text-black"
            }`}
          >
            {cost} BDT
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
