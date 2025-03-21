import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import icons from "../constants/icons";
const SingIn = () => {
  const handleLogin = () => {};
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="font-bold text-base font-rubik uppercase text-center text-black-200">
            Welcome to ReState
          </Text>
          <Text className="text-3xl font-rubik-bold text-center text-black-300 mt-12">
            Let’s Get You Closer to {"\n"}{" "}
            <Text className="text-primary-300"> Your Ideal Home</Text>
          </Text>
          <Text className="text-lg font-rubik text-center text-black-200 mt-12">
            Login to Real Scout with Google
          </Text>
          {/* ========= Button ========= */}
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingIn;
