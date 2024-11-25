import { View, Text, TouchableOpacity, Image } from "react-native";
import React, {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../components/Header"
import Card from "../../components/Card";
import FormField from "../../components/FormField"

import images from "../../constants/images";
import CustomButton from "../../components/CustomButton";

const Checkout = () => {
  // State to manage the selected payment method
  const [selected, setSelected] = useState("visa");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Data for payment methods
  const paymentMethods = [
    { id: "visa", label: "Visa", icon: images.visa },
    { id: "bkash", label: "Bkash", icon: images.bkash },
    { id: "apple", label: "Apple Pay", icon: images.applePay },
  ];


  return (
    

    <SafeAreaView className="h-screen justify-between">
      <View>
        <Header title="Checkout"/>
        <Card
          plan="week"
          days="7"
          isActive={true}
          cost="2000"
          onPress={()=>{}}
        />
        <View className="px-4 py-4">
          <Text className="text-lg font-semibold mb-4">Payment method</Text>

          {/* Payment Options */}
          <View className="flex-row space-x-4 justify-between">
            {paymentMethods.map((method) => (
              <TouchableOpacity
                key={method.id}
                onPress={() => setSelected(method.id)}
                className={`flex-row items-center justify-center shadow-md px-4 py-2 rounded-lg w-32 h-16 ${
                  selected === method.id ? "bg-primary-100" : "bg-gray-200"
                }`}
              >
                <Image
                  source={method.icon}
                  className="w-14 h-10"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ))}
          </View>

        </View>
        </View>
        <CustomButton title="Proceed to pay" containerStyles="m-4"/>
    </SafeAreaView>
  );
};

export default Checkout;
