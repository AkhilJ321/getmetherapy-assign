/// <reference types="nativewind/types" />
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Link, router } from "expo-router";
import { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const configGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId:
      "997907341285-7f9v6lq9csn39n5gb9dibc16l6im01ib.apps.googleusercontent.com",
  });
};

export default function HomeScreen() {
  useEffect(() => {
    configGoogleSignIn(); // will execute everytime the component mounts
  }, []);

  const handleSkip = () => {
    // router.navigate("login");
    router.navigate("tracking");
  };
  const handleNext = () => {
    router.navigate("onboarding3");
  };
  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../assets/images/bg.png")} // Replace with your image path
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

            <View className="flex flex-row justify-between mt-14">
              <TouchableOpacity
                onPress={handleSkip}
                className="bg-white rounded-full px-4 py-2"
              >
                <Text>Skip</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="bg-white rounded-full px-4 py-2"
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