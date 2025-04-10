import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { bgColor, ttColor } from "../constants/Colors";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";

const img = require("../assets/Frame.png");

export default function OnBoardingScreen() {
  const Navigator = useNavigation();

  const data = [
    {
      name: "Instagram",
      category: "Social",
      time: "1Hr",
    },
    {
      name: "Facebook",
      category: "Social",
      time: "2Hr",
    },
    {
      name: "Twitter",
      category: "Social",
      time: "30Min",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>
        Track, analyse, transform for a conscious living
      </Text>

      <View style={styles.up}>
        <Text style={[styles.text, styles.time]}>Total Screen Time</Text>
        <Text style={[styles.text, styles.title]}>1hr 15M</Text>
        <Image source={img} style={styles.image} />
      </View>

      <View style={styles.middle}>
        {data.map((item, index) => (
          <BlurView
            intensity={20}
            style={[styles.card, { width: 250 + index * 40 }]}
            key={index}
          >
            <View style={styles.cardLeft}>
              <Text style={[styles.text, styles.name]}>{item.name}</Text>
              <Text style={[styles.text, styles.category]}>{item.category}</Text>
            </View>
            <Text style={[styles.text, styles.cardRight, styles.category]}>
              {item.time}
            </Text>
          </BlurView>
        ))}
      </View>

      <View style={styles.down}>
        <TouchableOpacity
          onPress={() => Navigator.navigate("NamePage")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Navigator.navigate("Login")}>
          <Text style={styles.link}>I already have an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: bgColor.black,
    paddingVertical: 32,
    paddingHorizontal: 16,
    width: "100%",
  },
  title: {
    color: ttColor.white,
    fontSize: 25,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  up: {
    alignItems: "center",
    width: "100%",
  },
  middle: {
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  down: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    padding: 5,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 40,
    width: "100%",
    paddingVertical: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  link: {
    color: ttColor.white,
    marginTop: 10,
    fontSize: 14,
    textDecorationLine: "underline",
  },
  text: {
    color: ttColor.white,
  },
  time: {
    color: ttColor.gray700,
  },
  card: {
    backgroundColor: bgColor.tranparent,
    flexDirection: "row",
    marginBottom: 10,
    padding: 10,
    borderRadius: 6,
    shadowColor: "#ffffff",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.14,
    shadowRadius: 30,
    elevation: 5,
  },
  cardLeft: {
    flex: 1,
    justifyContent: "center",
  },
  cardRight: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  category: {
    color: ttColor.gray700,
  },
});
