import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Image, Text, Animated } from "react-native";

const logo = require("../../assets/Variant=2.png");
const { bgColor, ttColor } = require("../../constants/Colors");

export default function LogoPage() {
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity = 1
  const scaleAnim = useRef(new Animated.Value(1)).current; // Initial scale = 1

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 3,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        logoStyles.container,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <Image source={logo} style={{ width: 100, height: 100 }} />
      <Text style={[logoStyles.text, logoStyles.heading]}>Focusly</Text>
      <Text style={[logoStyles.text, logoStyles.title]}>
        Focus on what matters!
      </Text>
    </Animated.View>
  );
}

const logoStyles = StyleSheet.create({
  container: {
    backgroundColor: bgColor.black,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: ttColor.white,
    fontSize: 20,
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
  },
  title: {
    color: ttColor.gray700,
  },
});
