import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';
import OnBoardingScreen from '../screen/OnBoardingScreen';
import NamePage from '../component/gettingStart/NamePage';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
      <Stack.Screen name="NamePage" component={NamePage} />
    </Stack.Navigator>
  );
}
