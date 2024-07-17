import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Pressable, Share } from "react-native";
import { Slider } from "@react-native-assets/slider";
import * as Clipboard from "expo-clipboard";

const BASE_URL = "https://web-d1il0nx0p-akhilj321s-projects.vercel.app";
console.log(BASE_URL);

const Mark = ({ angle, type }: any) => {
  return (
    <View
      style={[
        styles.clockFaceMark,
        {
          transform: [{ rotate: `${angle}deg` }],
        },
      ]}
    >
      <View
        style={{
          width: 5,
          height: type === "hour" ? 30 : 10,
          backgroundColor: type === "hour" ? "#FE8C00" : "grey",
        }}
      />
    </View>
  );
};

const Hand = ({ type, angle }: any) => {
  return (
    <View
      style={[
        styles.clockHand,
        {
          transform: [{ rotate: `${angle}deg` }],
        },
      ]}
    >
      <View
        style={[
          styles.clockHandBody,
          { backgroundColor: type === "seconds" ? "#FE8C00" : "grey" },
          type === "hour" && styles.clockHandBodyHour,
        ]}
      />
    </View>
  );
};

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [speed, setSpeed] = useState(1);
  const [endTime] = useState(new Date(new Date().getTime() - 120 * 60 * 1000));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => new Date(prevTime.getTime() - 1000 * speed));
    }, 1000);
    if (currentTime <= endTime) {
      clearInterval(interval); // Stop the clock
    }
    return () => clearInterval(interval);
  }, [speed, currentTime, endTime]);

  const renderFaceMarks = () => {
    const marks = [];
    for (let i = 1; i <= 60; i++) {
      marks.push(
        <Mark key={i} angle={i * 6} type={i % 5 === 0 ? "hour" : "minute"} />
      );
    }
    return marks;
  };

  // Create a function to display time

  const handleSpeedChange = (value: any) => {
    setSpeed(value);
  };

  const handleShare = async () => {
    const currentTimeStamp = currentTime.getTime();
    const url = `${BASE_URL}/time=${currentTimeStamp}&speed=${speed}`;
    try {
      // Copy URL to clipboard
      await Clipboard.setStringAsync(url);

      // Share URL
      await Share.share({
        message: `Check out this clock: ${url}`,
      });
    } catch (error: any) {
      alert("Error sharing the clock: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.currentTime}>
        {`${currentTime.getHours().toString().padStart(2, "0")}:${currentTime
          .getMinutes()
          .toString()
          .padStart(2, "0")}`}
      </Text>
      <Text style={styles.endTime}>
        End Time: {endTime.toLocaleTimeString()}
      </Text>
      <View style={styles.clock}>
        <View style={styles.clockFace}>{renderFaceMarks()}</View>
        <Hand
          type="hour"
          angle={
            30 * ((currentTime.getHours() % 12) + currentTime.getMinutes() / 60)
          }
        />
        <Hand type="minutes" angle={6 * currentTime.getMinutes()} />
        <Hand type="seconds" angle={6 * currentTime.getSeconds()} />
      </View>
      <View className="mt-20 w-[300px] items-stretch  p-2 rounded-full">
        <Text className="text-black text-lg">Speed: {speed}x</Text>
        <Slider
          className="w-full"
          minimumValue={0}
          maximumValue={10}
          value={speed}
          onValueChange={handleSpeedChange}
          step={1}
        />
      </View>
      <View className="bg-orange w-full flex justify-center items-center py-3 px-5 rounded-full">
        <Pressable onPress={handleShare}>
          <Text className="text-white font-extrabold text-[18px]">Share</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  currentTime: {
    fontSize: 24,
    marginBottom: 20,
  },
  endTime: {
    fontSize: 18,
    marginBottom: 20,
  },
  clock: {
    width: 300,
    height: 300,
    backgroundColor: "white",
    borderRadius: 150,
    position: "relative",
  },
  clockFace: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  clockFaceMark: {
    position: "absolute",
    left: "50%",
    right: "50%",
    top: 0,
    bottom: 0,
    alignItems: "center",
  },
  clockHand: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%",
    right: "50%",
    alignItems: "center",
  },
  clockHandBody: {
    width: 8,
    height: "70%",
    backgroundColor: "black",
    position: "absolute",
    transform: [{ translateX: -4 }],
  },
  clockHandBodyHour: {
    height: "50%",
    backgroundColor: "grey",
  },
  sliderContainer: {
    marginTop: 20,
    width: 300,
    alignItems: "stretch",
  },
  slider: {
    width: 300,
  },
});

export default Clock;
