/// <reference types="nativewind/types" />

import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  ToastAndroid,
} from "react-native";

import { app } from "../../firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { router } from "expo-router";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    try {
      const res = await signInWithRedirect(auth, provider);
      if (res) {
        console.log("res", res);
        router.navigate("loginSuccess");
      }
    } catch (err) {
      console.log("err", err);
      ToastAndroid.show("Invalid email or password", ToastAndroid.SHORT);
    }
  };

  const handleRegisterClick = () => {
    router.navigate("register");
  };
  const handleLogin = async () => {
    // TODO: Handle login logic
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        console.log("res", res);
        router.navigate("loginSuccess");
      }
    } catch (err) {
      console.log("err", err);
      ToastAndroid.show("Invalid email or password", ToastAndroid.SHORT);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <View className=" flex-1  mt-12 items-center">
        <View className="w-4/5">
          <View className="mb-6">
            <Text className="text-4xl font-bold text-left ">
              Login to your account.
            </Text>
            <Text className=" font-normal text-gray-400">
              Please sign in to your account
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

          <Text className="mb-2">Password</Text>
          <TextInput
            className="border rounded-lg border-gray-300 p-4 mb-4"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <View className="w-full flex-row mb-4 justify-end ">
            <TouchableOpacity onPress={() => {}}>
              <Text className=" text-orange"> Forget Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className=" p-4 bg-orange rounded-full w-full"
            onPress={handleLogin}
          >
            <Text className="text-white font-extrabold text-center">
              Sign In
            </Text>
          </TouchableOpacity>

          <View className="w-full flex-row mb-6 items-center justify-center mt-6">
            <Text className="text-black">Or Sign in with</Text>
          </View>

          <View className="flex items-center justify-center"></View>

          <View className="w-full flex-row  items-center justify-center mt-10">
            <Text className="text-black">
              Don't have an account?
              <TouchableOpacity onPress={handleRegisterClick}>
                <Text className="text-orange">Register</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
