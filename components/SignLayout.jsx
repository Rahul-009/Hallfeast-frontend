import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRef } from "react";
import images from "@/constants/images";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

const SignLayout = ({ children, image }) => {
  const bottomSheetRef = useRef(null);

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1 bg-white">
        <View className="flex flex-col h-screen bg-primary-100">
          {/* <View className="flex flex-row absolute z-10 top-16 items-center justify-start px-5">
            <TouchableOpacity onPress={() => router.back()}>
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
                <Image
                  source={images.arrowLeft}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
              </View>
            </TouchableOpacity>
            <Text className="text-xl ml-5">{title || "Go Back"}</Text>
          </View> */}

          <Image source={image} resizeMode="contain" className="w-full" />
        </View>

        <BottomSheet ref={bottomSheetRef} snapPoints={["75%", "80%"]} index={0}>
          <BottomSheetView style={{ flex: 1, padding: 20 }}>
            {children}
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default SignLayout;
