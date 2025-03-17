import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import icons from "../constants/icons";

const SearchBar = () => {
  return (
    <View className="flex-row items-center justify-between bg-accent-100 border-1 border-primary-100 px-4 rounded-md my-5">
      <View className="flex-row items-center gap-5">
        <Image source={icons.search} className="w-5 h-5" />
        <View className="p-2">
          <TextInput
            className="w-full"
            placeholder="Search something"
            placeholderTextColor="#999" // Optional: Change placeholder color
          />
        </View>
      </View>
      <Image source={icons.filter} className="w-5 h-5" />
    </View>
  );
};

export default SearchBar;
