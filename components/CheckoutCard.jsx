import { View, Text, Image, TouchableOpacity } from "react-native";
import images from "@/constants/images";

const CheckoutCard = ({children}) => {
  return (
    <TouchableOpacity
    //   onPress={onPress}
      activeOpacity={1}
      className={`w-11/12 m-4 p-4 shadow-md rounded-3xl ${
         "bg-gray-200"
      }`}
    >
      <View>
        {/* Title and Info */}
        <View className="justify-between">
        <View className="justify-between">
            <Text>Order Summary</Text>
            <View>
              <Text>Subtotal</Text>
              <Text>2000</Text>
            </View>
            <View>
              <Text>Delivery</Text>
              <Text>0</Text>
            </View>
            <View>
              <Text>Total</Text>
              <Text>2000</Text>
            </View>
        </View>
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default CheckoutCard