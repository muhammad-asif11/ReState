import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";

const Avatar = () => {
  return (
    <ScrollView className="w-full ">
      <View className="flex-row justify-between items-center w-full bg-white rounded-lg">
        {/* ====== Left side (Avatar + Text) ======== */}
        <View className="flex-row gap-5 items-center">
          <Image source={images.avatar} className="w-[45px] h-[45px]" />
          <View>
            <Text className="font-rubik text-[12px] text-black-100">
              Good Morning
            </Text>
            <Text className="font-rubik text-[16px] text-black-300">
              Adrian Hajdin
            </Text>
          </View>
        </View>

        {/* ===== Bell icon ====== */}
        <Image source={icons.bell} className="w-[22px] h-[22px]" />
      </View>
    </ScrollView>
  );
};

export default Avatar;
