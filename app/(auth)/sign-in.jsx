import { Image, ScrollView, Dimensions, Alert, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../../constants/images";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import { Link } from "expo-router";
import SignLayout from "@/components/SignLayout";

const SignIn = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SignLayout image={images.SignInBg}>
      <View className="w-full h-full px-4 my-6">
        <Text className="text-2xl text-dark-900 font-semibold mt-10">
          Sign In
        </Text>

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
          title="Sign In"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />
        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-500">Don't have an account?</Text>
          <Link href="/sign-up">Register Now</Link>
        </View>
      </View>
    </SignLayout>
  );
};

export default SignIn;
