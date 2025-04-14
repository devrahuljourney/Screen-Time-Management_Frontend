import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';
import OnBoardingScreen from '../screen/OnBoardingScreen';
import NamePage from '../component/gettingStart/NamePage';
import SetTime from '../component/gettingStart/SetTime';
import ScreenTimePermission from '../component/gettingStart/ScreenTimePermission';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
      <Stack.Screen name="NamePage" component={NamePage} />
      <Stack.Screen name='SetTime' component={SetTime} />
      <Stack.Screen name='ScreenTimePermission' component={ScreenTimePermission} />
    </Stack.Navigator>
  );
}
