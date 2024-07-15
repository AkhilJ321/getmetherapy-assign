import React, { useEffect, useState, useRef } from "react";
import { View, ImageBackground, Dimensions, Text } from "react-native";

import Clock from "@/components/Clock";

const Tracking = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Clock />
    </View>
  );
};

export default Tracking;
