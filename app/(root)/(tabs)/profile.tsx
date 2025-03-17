import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import images from "@/constants/images";

const profile = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
        <Text className="text-2xl font-rubik-bold">profile</Text>
        <View>
          <Image source={images.avatar} className="size-5" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
