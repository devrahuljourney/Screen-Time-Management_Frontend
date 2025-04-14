import { View, Text,SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function ScreenTimePermission() {

    const navigate = useNavigation();
  return (
    <SafeAreaView className="bg-black flex-1 justify-evenly items-center" >
        
<TouchableOpacity onPress={() => navigate.goBack()} className="bg-white rounded-full w-[50px] h-[35px] justify-center items-center">
  <Ionicons name="arrow-back" size={24} color="black" />
</TouchableOpacity>
      
    </SafeAreaView>
  )
}