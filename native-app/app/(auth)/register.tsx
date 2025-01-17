/// <reference types="nativewind/types" />

import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
// import auth from "@react-native-firebase/auth";
import auth from "@react-native-firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function onAuthStateChanged(user: any) {
    console.log("auth changed", user);
    if (user) {
      router.navigate("loginSuccess");
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const handleGoogleSignUp = () => {};

  const handleSignInPress = () => {
    router.navigate("login");
  };

  const handleRegister = async () => {
    try {
      if (!isChecked) {
        alert("Please agree to the terms of service and privacy policy");
        return;
      }
      const res = await auth().createUserWithEmailAndPassword(email, password);
      if (res) {
        router.navigate("login");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className=" flex-1  mt-[120px] items-center">
        <View className="w-4/5">
          <View className="mb-6">
            <Text className="text-4xl font-bold text-left ">
              Create your new account
            </Text>
            <Text className=" font-normal text-gray-400">
              Create an account to start looking for the food you like
            </Text>
          </View>
          <Text className="mb-2">Email Address</Text>
          <TextInput
            className=" border rounded-lg border-gray-300 p-4 mb-4"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <Text className="mb-2">User Name</Text>
          <TextInput
            className=" border rounded-lg border-gray-300 p-4 mb-4"
            placeholder="User Name"
            value={userName}
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          <Text className="mb-2">Password</Text>
          <TextInput
            className="border rounded-lg border-gray-300 p-4 mb-4"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View className="flex flex-col mb-6">
            <TouchableOpacity
              className="flex-row items-center justify-start"
              onPress={() => {
                setIsChecked(!isChecked);
              }}
            >
              <View
                className={` w-4 h-4 mr-2 border border-gray-400 rounded-sm ${
                  isChecked ? "bg-orange" : ""
                }`}
              >
                {isChecked && (
                  <Image
                    source={require("../../assets/images/tick.png")}
                    style={{ width: 12, height: 12 }}
                  />
                )}
              </View>
              <View>
                <Text className="text-gray-400 text-sm">
                  I Agree with
                  <Text className="text-orange"> Terms of Service </Text> and
                  <Text className="text-orange"> Privacy Policy</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            className=" p-4 bg-orange rounded-full w-full"
            onPress={handleRegister}
          >
            <Text className="text-white font-extrabold text-center">
              Register
            </Text>
          </TouchableOpacity>

          <View className="w-full flex-row mb-6 items-center justify-center mt-6">
            <Text className="text-black">Or Sign in with</Text>
          </View>

          <View className="flex items-center justify-center">
            <TouchableOpacity onPress={handleGoogleSignUp}>
              <Image
                source={require("../../assets/images/google.png")}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          </View>

          <View className="w-full flex-row  items-center justify-center mt-10">
            <Text className="text-black">
              Have an account?
              <TouchableOpacity onPress={handleSignInPress}>
                <Text className="text-orange">Sign In</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
