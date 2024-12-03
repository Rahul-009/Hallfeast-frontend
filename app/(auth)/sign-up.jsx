import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { Link, router } from "expo-router";

import images from "@/constants/images";
import SignLayout from "@/components/SignLayout";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import Dropdown from "@/components/Dropdown";

import axios from "axios";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    hall_id: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [selectedUni, setSelectedUni] = useState({});
  const [universities, setUniversities] = useState([]);
  const [isSubmitting, setisSubmitting] = useState(false);

  const url = "https://api.hallfeast.com/api/v1/create-user";
  const url2 = "https://api.hallfeast.com/api/v1/universities";
  // const url3 = "http://api.hallfeast.com/api/v1/universities/a61dfece-d0b1-437a-95d6-05ef45cfa50a/halls";
  const url3 = `http://api.hallfeast.com/api/v1/universities/${selectedUni.id}/halls`;

  const handleUniversity = (item) => {
    setSelectedUni(item);
    setIsVisible(false);
  };

  const handleHall = (item) => {
    setSelectedHall(item);
    setIsVisible2(false);
    setForm({ ...form, hall_id: item.id });
  };

  const fetchUniversities = async () => {
    try {
      const response = await axios.get(url2);
      const uni = [];
      //   console.log(response?.data.result);
      response?.data.result.map((item) =>
        uni.push({ id: item.id, name: item.name })
      );

      setUniversities(uni);
      // console.log(uni);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const [isVisible2, setIsVisible2] = useState(false);
  const [selectedHall, setSelectedHall] = useState({});
  const [halls, setHalls] = useState([]);

  const fetchHalls = async () => {
    try {
      const response = await axios.get(url3);
      const h = [];
      //   console.log(response?.data.result);
      response?.data.result.map((item) =>
        h.push({ id: item.id, name: item.name })
      );

      setHalls(h);
      // console.log(h);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  useEffect(() => {
    fetchUniversities();
  }, []);

  useEffect(() => {
    fetchHalls();
  }, [selectedUni]);

  const fetchData = async () => {
    try {
      const response = await axios.post(url, form);
      // console.log(response?.data);
      router.replace("/(auth)/sign-in");
    } catch (error) {
      // console.log(error.response?.data);
      alert(error.response?.data.message);
    }
  };

  const submit = () => {
    fetchData();
    // console.log();
    // router.replace("/(tab)/sign-in");
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
        <Dropdown
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          data={universities}
          selectedItem={selectedUni}
          handleSelect={handleUniversity}
        />
        <Dropdown
          isVisible={isVisible2}
          setIsVisible={setIsVisible2}
          data={halls}
          selectedItem={selectedHall}
          handleSelect={handleHall}
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
      {/* {console.log(form)} */}
    </SignLayout>
  );
};

export default SignUp;
