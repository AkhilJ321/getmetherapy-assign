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

// import auth from "../../firebaseConfig";

import { router } from "expo-router";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId:
    "15976259242-hfp24bk087vuk3muo57dnt3n5atpnjsq.apps.googleusercontent.com",
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onAuthStateChanged(user: any) {
    console.log("auth changed", user);
    if (user) {
      router.navigate("loginSuccess");
    } else {
      router.navigate("login");
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      console.log("Google Play Services are available");
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      console.log("idToken", idToken);

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
      router.navigate("loginSuccess");
    } catch (err) {
      console.log("err", err);
      ToastAndroid.show("Error signing in with Google", ToastAndroid.SHORT);
    }
  }

  const handleRegisterClick = () => {
    router.navigate("register");
  };
  const handleLogin = async () => {
    // TODO: Handle login logic
    try {
      const res = await auth().signInWithEmailAndPassword(email, password);
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
      <View className=" flex-1 mt-[200px] items-center">
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

          <View className="flex items-center justify-center">
            <TouchableOpacity
              onPress={() =>
                onGoogleButtonPress().then(() =>
                  console.log("Signed in with Google!")
                )
              }
              className="bg-white rounded-full p-2"
            >
              <Image
                source={require("../../assets/images/google.png")}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
          </View>

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
