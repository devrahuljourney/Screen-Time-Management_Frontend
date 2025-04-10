import 'react-native-gesture-handler'; // ✅ Must come first!
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { GlobalLoaderProvider } from './hooks/GloabalLoader';
import Loader from './component/common/Loader';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <GlobalLoaderProvider>
        <AppNavigator />
        <Loader/>
        </GlobalLoaderProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
