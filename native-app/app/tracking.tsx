import React, { useEffect, useState, useRef } from "react";
import { View, ImageBackground, Dimensions, Text } from "react-native";

import Clock from "@/components/Clock";

const Tracking = () => {
  const [quote, setQuote] = useState<string | null>("");

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      console.log("Quote", data.content);
      setQuote(data.content);
    };
    fetchQuote();

    const interval = setInterval(fetchQuote, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Clock />
      <Text className=" text-[18px] mb-8 italic">"{quote}"</Text>
    </View>
  );
};

export default Tracking;
