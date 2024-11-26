import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Link, router } from "expo-router";

import images from "@/constants/images";
import SignLayout from "@/components/SignLayout";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = () => {
    router.replace("/(tab)/home");
  };

  return (
    <SignLayout image={images.SignUpBg}>
      <View className="w-full h-full px-4 my-6 bg-general-100">
        <Text className="text-2xl text-dark-900 font-semibold mb-10 text-center">
          Sign Up
        </Text>

        <View className="flex-row justify-between">
          <Image source={images.facebook} resizeMode="contain" />
          <Image source={images.google} />
          <Image source={images.apple} />
        </View>

        <FormField
          title="Full Name"
          value={form.name}
          handleChangeText={(e) => setForm({ ...form, name: e })}
          otherStyles="mt-7"
          placeholder="John Doe"
        />
        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
          placeholder="john@gmail.com"
        />
        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
          placeholder="password"
        />

        <CustomButton
          title="Sign Up"
          handlePress={submit}
          containerStyles="mt-7 h-14"
          isLoading={isSubmitting}
        />
        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-500">
            Already have an account?
          </Text>
          <Link href="/sign-in">Login</Link>
        </View>
      </View>
    </SignLayout>
  );
};

export default SignUp;
