import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import JWT, { SupportedAlgorithms } from "expo-jwt";
import axios from "axios";

import images from "@/constants/images";

import NavItem from "../../components/NavItem";
import MenuCard from "../../components/MenuCard";

const Home = () => {
  // State to track the selected date
  const [selectedDate, setSelectedDate] = useState("25");
  const [meal, setMeal] = useState("lunch");
  const [navActive, setNavActive] = useState("home"); // Track active tab
  const [user, setUser] = useState({});

  // Example data for dates (you can generate dynamically as needed)
  const dates = [
    { day: "SUN", date: "23" },
    { day: "MON", date: "24" },
    { day: "TUE", date: "25" },
    { day: "WED", date: "26" },
    { day: "THU", date: "27" },
    { day: "FRI", date: "28" },
    { day: "SAT", date: "29" },
  ];

  const meals = [
    { title: "Lunch", image: images.dish1 },
    { title: "Dinner", image: images.dish2 },
    { title: "Breakfast", image: images.dish3 },
    { title: "Snacks", image: images.dish4 },
  ];

  const item = [
    { nav: "home", image: images.home },
    { nav: "myMeal", image: images.catering },
    { nav: "profile", image: images.profile },
  ];

  const loadAuthToken = async () => {
    const token = await SecureStore.getItemAsync("authToken");
    return token;
  };

  // const n = JSON.stringify(user.name);
  // const firstname = n.split(" ")[0];
  const fetchData = async () => {
    try {
      const t = await loadAuthToken();
      console.log(t);

      const key = "team_pati_hash";
      const decoded = JWT.decode(t, key);
      const userId = decoded.user_id;
      const url = `https://api.hallfeast.com/api/v1/users/${userId}`;
      const res = await axios.get(url);
      console.log(res?.data);
      setUser(res?.data);
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView className="m-4 flex-1">
      <View className="flex-row justify-between">
        <Image source={images.grid} />
        <View className="flex-row justify-center items-center">
          <Image source={images.location} className="m-2" />
          <Text>Rajshahi</Text>
          <Image source={images.down} className="m-2" />
        </View>
        <Image source={images.notification} />
      </View>

      <View className="mb-4">
        <Text className="text-4xl">
          Good Afternoon, <Text className="text-primary-500">{user.name}</Text>
        </Text>
        <Text className="text-gray-400">{`Points ${user.points_balance}`}</Text>
      </View>

      {/* Date Section */}
      <View className="py-4">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-semibold">Serving this Month</Text>
          <Text className="text-sm text-green-500">23-29 Jan (7 Days)</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dates.map((item) => (
            <TouchableOpacity
              key={item.date}
              onPress={() => setSelectedDate(item.date)}
              className={`w-20 h-20 items-center justify-center mx-2 rounded-xl ${
                selectedDate === item.date ? "bg-green-100" : "bg-gray-200"
              }`}
            >
              <Text className="text-sm font-semibold">{item.day}</Text>
              <Text
                className={`text-lg font-bold ${
                  selectedDate === item.date ? "text-green-600" : "text-black"
                }`}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Meal section */}
      <ScrollView contentContainerStyle={{ padding: 8 }}>
        {meals
          .reduce((rows, item, index) => {
            // Every 2 cards, create a new row
            if (index % 2 === 0) rows.push([]);
            rows[rows.length - 1].push(item);
            return rows;
          }, [])
          .map((row, rowIndex) => (
            <View key={rowIndex} className="flex-row justify-between mb-4">
              {row.map((card) => (
                <MenuCard
                  key={card.title}
                  title={card.title}
                  image={card.image}
                />
              ))}
            </View>
          ))}
      </ScrollView>

      {/* NavBar */}
      <View className="absolute bottom-0 left-0 right-0 m-4 w-[90%] h-20 flex-row justify-around items-center bg-white py-2 shadow-lg border-t border-gray-200 rounded-xl">
        <NavItem
          key={item[0].nav}
          title={item[0].nav}
          onPress={() => {
            router.replace(`/(tab)/${item[0].nav}`);
            // router.replace("/(tab)/meal");
          }}
          isActive={navActive === item[0].nav}
          image={item[0].image}
        />
        <View className="bg-primary-100 rounded-full w-20 h-20 justify-center items-center">
          <NavItem
            key={item[1].nav}
            title={item[1].nav}
            onPress={() => {
              router.replace(`/(tab)/${item[1].nav}`);
            }}
            isActive={navActive === item[1].nav}
            image={item[1].image}
          />
        </View>
        <NavItem
          key={item[2].nav}
          title={item[2].nav}
          onPress={() => {
            router.replace(`/(tab)/${item[2].nav}`);
          }}
          isActive={navActive === item[2].nav}
          image={item[2].image}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
