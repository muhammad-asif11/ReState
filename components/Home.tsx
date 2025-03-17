import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Avatar from "./Avatar";
import SearchBar from "../components/Search";
import { Card, FeaturedCard } from "./Cards";
import { featuredCardData } from "@/constants/const";
import TabNavigator from "./TabNavigator";

const Home = () => {
  return (
    <SafeAreaView className="px-4 py-4">
      <ScrollView>
        <Avatar />
        <SearchBar />
        <View className="flex-row items-center justify-between py-4">
          <Text className="text-xl font-rubik-bold">Featured</Text>
          <Link href={"/sign-in"}>
            <Text className="text-lg font-rubik-bold text-primary-300">
              See All
            </Text>
          </Link>
        </View>
        <View className="flex-row items-center justify-between gap-5">
          <FeaturedCard item={featuredCardData[0]} />
          <FeaturedCard item={featuredCardData[1]} />
        </View>
        <TabNavigator />
        <View className="flex-row items-center justify-between gap-5">
          <Card
            item={featuredCardData[2]}
            onPress={() => console.log("Card Clicked")}
          />
          <Card
            item={featuredCardData[3]}
            onPress={() => console.log("Card Clicked")}
          />
        </View>
        <View className="flex-row items-center justify-between gap-5">
          <Card
            item={featuredCardData[4]}
            onPress={() => console.log("Card Clicked")}
          />
          <Card
            item={featuredCardData[5]}
            onPress={() => console.log("Card Clicked")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
