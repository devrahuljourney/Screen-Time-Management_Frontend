import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import WheelPickerExpo from 'react-native-wheel-picker-expo';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useProfileDataContext } from '../../hooks/ProfileData';

const SetTime = () => {
  const [hours, setHours] = useState(2);
  const [minutes, setMinutes] = useState('30');

  const hourOptions = [1, 2, 3, 4, 5];
  const minuteOptions = ['00', '10', '20', '30', '40', '50'];
  const { setScreenTime, screenTime } = useProfileDataContext();


  const onSubmit = (data) => {
    setScreenTime(data)
    navigate.navigate("ScreenTimePermission")
    
  }

  const navigate = useNavigation();


  return (
    <SafeAreaView className="flex-1 bg-black px-4 py-[5%] justify-evenly">
      {/* Header */}
  
<TouchableOpacity onPress={() => navigate.goBack()} className="bg-white rounded-full w-[50px] h-[35px] justify-center items-center">
  <Ionicons name="arrow-back" size={24} color="black" />
</TouchableOpacity>

      {/* Title Section */}
      <View className="mt-4">
        <Text className="text-white text-2xl font-bold text-center">
          What's your screen time goal 📱?
        </Text>
        <Text className="text-white text-base text-center mt-2 opacity-70">
          Let's light up your path with purpose! ✨
        </Text>
      </View>

      

      {/* Pickers */}
      <View className="flex-row justify-around bg-[#1E1E1E] rounded-xl p-4 mt-6">
        {/* Hour Picker */}
        <View className="items-center">
          <WheelPickerExpo
            height={180}
            width={120}
            initialSelectedIndex={hourOptions.indexOf(hours)}
            items={hourOptions.map((h) => ({ label: `${h} Hours`, value: h }))}
            onChange={({ item }) => setHours(item.value)}
            backgroundColor="#1E1E1E"
            selectedIndicatorColor="#333"
          />
        </View>

        {/* Minute Picker */}
        <View className="items-center">
          <WheelPickerExpo
            height={180}
            width={120}
            initialSelectedIndex={minuteOptions.indexOf(minutes)}
            items={minuteOptions.map((m) => ({ label: `${m} Mins`, value: m }))}
            onChange={({ item }) => setMinutes(item.value)}
            backgroundColor="#1E1E1E"
            selectedIndicatorColor="#333"
          />
        </View>
      </View>

      {/* Feedback */}
      <View className="bg-green-700 p-4 rounded-xl mt-6">
        <Text className="text-white text-lg font-bold mb-1">Excellent!</Text>
        <Text className="text-white text-sm leading-5">
          Stick to your screen time goal and earn{' '}
          <Text className="text-yellow-400 font-bold">200 Points</Text>, or get{' '}
          <Text className="text-yellow-400 font-bold">250 Points</Text> if you don't exceed it.
        </Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity onPress={() => onSubmit({hours,minutes})} className="bg-blue-600 py-4 rounded-xl mt-6 items-center">
        <Text className="text-white text-lg font-bold">Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SetTime;
