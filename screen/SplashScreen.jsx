import React, { useEffect } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import LogoPage from '../component/onBoardingScreen/LogoPage';
import { useNavigation } from '@react-navigation/native'; // ✅ Fixed
import { bgColor } from '../constants/Colors';

export default function SplashScreen() {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    console.log("SplashScreen mounted");

    const timer = setTimeout(() => {
      navigation.navigate("Onboarding");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bgColor,
      height: height,
      width: width,
    },
  });

  return (
    <View style={styles.container}>
      <LogoPage /> 
    </View>
  );
}
