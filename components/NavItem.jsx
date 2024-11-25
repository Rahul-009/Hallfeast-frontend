import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const NavItem = ({ onPress, image, title, isActive }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} className="items-center">
        <Image source={image} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default NavItem;
