import { View, Text, Image, TouchableOpacity } from "react-native";
import images from "@/constants/images";

const ProfileCard = ({ image }) => {
  return (
    <TouchableOpacity
      className={`w-11/12 m-4 p-4 shadow-md rounded-3xl bg-primary-500`}
    >
      <View>
        {/* Title and Info */}
        <View className="p-4 flex-row items-center">
          <View className="flex-1">
            <Text className="text-2xl font-bold text-white">Hi Rehan,</Text>
            <Text className="text-lg text-white">rehanurraihan@gmail.com</Text>
          </View>
          <Image
            source={image} // Replace with your avatar URL
            className="w-20 h-20 rounded-full"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileCard;
