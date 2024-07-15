import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { router } from "expo-router";

const LoginSuccessScreen = () => {
  const handleGoToTrackingScreen = () => {
    router.navigate("tracking");
  };

  const handleLogout = () => {
    // Handle logout logic
    console.log("Logout pressed");
  };

  return (
    <View className="flex h-full">
      <ImageBackground
        source={require("../../assets/images/bg.png")} // Replace with your image path
        className="h-full w-full"
      >
        <View className="absolute bottom-0 w-full bg-white rounded-t-3xl p-8">
          <View className="flex items-center justify-center mb-4">
            {/* Add your checkmark icon here */}
            <Image
              source={require("../../assets/images/tick.png")}
              className="w-20 h-20"
            />
          </View>
          <Text className="text-center text-2xl font-bold mb-6">
            Login Successful
          </Text>
          <TouchableOpacity
            onPress={handleGoToTrackingScreen}
            className="bg-orange  py-4 px-6 rounded-full mb-6 flex justify-center items-center"
          >
            <Text className="text-white font-bold ">Go to Tracking Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogout}
            className="flex justify-center items-center  mb-8"
          >
            <Text className="text-gray font-bold">Logout</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginSuccessScreen;