import React from "react";
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const OnBoardingLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="onboarding2"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="onboarding3"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="loginSuccess"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default OnBoardingLayout;
