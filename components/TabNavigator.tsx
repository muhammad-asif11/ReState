import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { categories } from "../constants/const";

const TabNavigator = () => {
  const [activeTab, setActiveTab] = useState(categories[0].title);
  return (
    <ScrollView>
      <View className="flex-row items-center justify-between py-4">
        <Text className="text-xl font-rubik-bold">Our Recommendation</Text>
        <Link href={"/sign-in"}>
          <Text className="text-lg font-rubik-bold text-primary-300">
            See All
          </Text>
        </Link>
      </View>
      <View className="flex-row items-center gap-8">
        {categories.slice(0, 4).map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveTab(category.title)} // Update active tab on press
            className={`py-3 px-5 rounded-full ${
              activeTab === category.title ? "bg-primary-300" : "bg-primary-100"
            }`}
          >
            <Text className={`${activeTab === category.title ? "text-white" : "text-black-300" }`}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default TabNavigator;
