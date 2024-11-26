import { View, Text, Modal, Pressable } from "react-native";
import React from "react";

const Modal = () => {
  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
    >
      <View className="flex-1 items-center justify-center bg-black/50">
        <View className="w-80 bg-white rounded-lg p-6">
          <Text className="text-lg font-semibold mb-4">This is a Modal!</Text>
          <Pressable
            className="bg-blue-500 px-4 py-2 rounded-md"
            onPress={() => setModalVisible(false)}
          >
            <Text className="text-white font-semibold text-center">Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default Modal;
