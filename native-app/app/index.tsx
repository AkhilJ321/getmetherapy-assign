/// <reference types="nativewind/types" />

import { router } from "expo-router";
import auth from "@react-native-firebase/auth";

import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useEffect, useState } from "react";

GoogleSignin.configure({
  webClientId:
    "15976259242-hfp24bk087vuk3muo57dnt3n5atpnjsq.apps.googleusercontent.com",
});

export default function HomeScreen() {
  const handleSkip = () => {
    // router.navigate("login");
    router.navigate("login");
  };
  const handleNext = () => {
    router.navigate("onboarding2");
  };
  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../assets/images/bg.png")} // Replace with your image path
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View className="flex-1 justify-center items-center">
          <View className="bg-orange rounded-[48px] h-[400px] w-[311px] top-1/4 py-4 px-12 mx-7">
            <Text className="text-white text-center font-bold text-[39px]">
              We serve incomparable delicacies
            </Text>
            <Text className="text-[18px] text-white text-center mt-2 mb-[130px]">
              All the best restaurants with their top menu waiting for you, they
              can't wait for your order!!
            </Text>

            <View className="flex flex-row justify-between mb-4">
              <TouchableOpacity onPress={handleSkip} className="">
                <Text className="text-white">Skip</Text>
              </TouchableOpacity>

              <TouchableOpacity className="" onPress={handleNext}>
                <Text className="text-white">Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
