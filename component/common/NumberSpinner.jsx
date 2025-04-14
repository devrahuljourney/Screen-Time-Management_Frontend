import { View, Text, Animated, PanResponder } from 'react-native';
import React, { useState, useRef } from 'react';

export default function NumberSpinner({ min = 0, max = 100, value = 0, setValue, title = "" }) {
  const [fadeAnim] = useState(new Animated.Value(0)); // For fade animation
  const prevValue = Math.max(value - 1, min); // Previous value (clamped to min)
  const nextValue = Math.min(value + 1, max); // Next value (clamped to max)

  // Animate the fade effect
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // PanResponder setup
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true, // Enable gesture detection
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 20 && value > min) {
          setValue(value - 1); // Scroll down: decrease value
          fadeIn();
        } else if (gestureState.dy < -20 && value < max) {
          setValue(value + 1); // Scroll up: increase value
          fadeIn();
        }
      },
      onPanResponderRelease: () => {
        fadeOut(); // Fade out after gesture ends
      },
    })
  ).current;

  return (
    <View className=" bg-green-500 p-4 rounded-lg shadow-md">
      {/* Title */}
      <Text className="text-lg font-bold mb-2 text-center">{title}</Text>

      {/* Faded Previous Value */}
      <Animated.Text
        className="text-gray-400 text-sm text-center"
      >
        {prevValue}
      </Animated.Text>

      {/* Current Value (Scrollable Area) */}
      <View {...panResponder.panHandlers} className="justify-center items-center">
        <Text className="text-2xl font-bold text-center my-2">{value}</Text>
      </View>

      {/* Faded Next Value */}
      <Animated.Text
        className="text-gray-400 text-sm text-center"
        style={{ opacity: fadeAnim }}
      >
        {nextValue}
      </Animated.Text>
    </View>
  );
}