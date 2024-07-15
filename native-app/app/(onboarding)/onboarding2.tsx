/// <reference types="nativewind/types" />
import React from "react";

import { router } from "expo-router";

import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";

export default function OnboardingThird() {
  const handleNext = () => {
    router.navigate("onboarding3");
  };
  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../../assets/images/bg.png")} // Replace with your image path
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View className="flex-1 justify-center items-center">
          <View className="bg-orange rounded-3xl py-4 px-12 mx-7">
            <Text className="text-white text-center font-bold text-3xl">
              We serve incomparable delicacies
            </Text>
            <Text className="text-white text-center mt-2 ">
              All the best restaurants with their top menu waiting for you, they
              can't wait for your order!!
            </Text>

            <View className="flex flex-row justify-center items-center mt-14 mb-8">
              <TouchableOpacity
                className="bg-white  rounded-full px-4 py-4"
                onPress={handleNext}
              >
                <Text>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
