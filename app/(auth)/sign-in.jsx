import { Image, ScrollView, Dimensions, Alert, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

import images from "../../constants/images";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { useState, useEffect } from "react";
import { Link, router } from "expo-router";
import SignLayout from "@/components/SignLayout";

import axios from "axios";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password_hash: "",
  });

  const [isSubmitting, setisSubmitting] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const url = "https://api.hallfeast.com/api/v1/auth/login";

  const setAuthToken = async (token) => {
    await SecureStore.setItemAsync("authToken", token);
    set({ authToken: token });
  };

  const fetchData = async () => {
    try {
      setisLoading(true);
      const response = await axios.post(url, form);
      setAuthToken(response?.data.token);

      // console.log(decoded);
      router.replace("/(tab)/home");
    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data.message);
    } finally {
      setisLoading(false);
    }
  };

  const submit = () => {
    fetchData();
  };

  return (
    <SignLayout image={images.SignInBg}>
      <View className="w-full h-full px-4 my-6">
        <Text className="text-center text-2xl text-dark-900 font-semibold mb-10">
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
          handleChangeText={(e) => setForm({ ...form, password_hash: e })}
          otherStyles="mt-7"
          placeholder="password"
        />

        <CustomButton
          title="Sign In"
          handlePress={submit}
          containerStyles="mt-7 h-14"
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
