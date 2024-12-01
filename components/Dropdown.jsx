import React from "react";
import { TouchableOpacity, Text, FlatList, View } from "react-native";

const Dropdown = ({
  isVisible,
  setIsVisible,
  selectedItem,
  data,
  handleSelect,
}) => {
  return (
    <View className="w-full p-4">
      <TouchableOpacity
        className="flex-row items-center justify-between bg-general-500 p-3 rounded-lg"
        onPress={() => setIsVisible(!isVisible)}
      >
        <Text className="text-gray-800">{selectedItem.name}</Text>
        {/* ToDo : Logo  */}
      </TouchableOpacity>

      {isVisible && (
        <View className="bg-general-500 mt-2 rounded-lg">
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="p-3 border-b border-gray-300"
                onPress={() => {
                  handleSelect(item);
                }}
              >
                <Text className="text-gray-800">{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Dropdown;
