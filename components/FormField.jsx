import { useState } from "react";
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";

import images from "@/constants/images";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <View className={`space-y-2 `}>
      <Text className="text-base text-dark-900">{title}</Text>

      <View className={`w-full h-16 px-4 rounded-2xl items-center flex-row ${otherStyles}`}>
        <TextInput
          className="flex-1 text-gray-600 text-base focus:border-primary-100"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#f0f0f0"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
            <Image
              source={!showPassword ? images.eye : images.eyehide}
              resizeMode="contain"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
