import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useGlobalLoader } from "../../hooks/GloabalLoader";

const Loader = () => {
  const { showLoading } = useGlobalLoader();

  if (!showLoading) return null; 

  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
});

export default Loader;