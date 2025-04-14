import 'react-native-gesture-handler'; // ✅ Must come first!
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { GlobalLoaderProvider } from './hooks/GloabalLoader';
import Loader from './component/common/Loader';
import "./global.css"
import AppContextProvider from './hooks/AppContextProvider';

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1 bg-black">
      <NavigationContainer>
        <AppContextProvider>
        <AppNavigator />
        <Loader/>
        </AppContextProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
