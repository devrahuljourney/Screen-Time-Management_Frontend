import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { bgColor, ttColor } from '../../constants/Colors';
import { Controller, useForm } from 'react-hook-form';
import { useGlobalLoader } from '../../hooks/GloabalLoader';

export default function NamePage() {
  const { control, handleSubmit, formState: { errors }, watch } = useForm();
  const watchedName = watch('username');

  const { show, hide, showLoading } = useGlobalLoader();

  const onSubmit = async data => {
  

    try {
      show()
      console.log("Form Data:", data, showLoading);
      hide()
    } catch (error) {
      console.error("Error submitting form:", error);
      hide(); 
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.up}>
        <Text className="" style={[styles.text, styles.heading]}>
          What should we call you?
        </Text>
        <Text className="text-red-500 dark:text-white" >huiu</Text>
        <Text style={[styles.text, styles.title]}>
          It's always nice to be called by your name.
        </Text>
      </View>

      <Controller
        control={control}
        name="username"
        rules={{
          required: "Name is required",
          minLength: { value: 3, message: "Name must be at least 3 characters" },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="Your name, please?"
            placeholderTextColor="#aaa"
          />
        )}
      />

      {errors.username && (
        <Text style={{ color: 'red' }}>{errors.username.message}</Text>
      )}

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={[
          styles.button,
          (!watchedName || showLoading) && { opacity: 0.5 },
        ]}
        disabled={!watchedName || showLoading}
      >
        <Text style={styles.buttonText}>
          {showLoading ? "Submitting..." : "Continue"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor.black,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  up: {
    marginBottom: 30,
    alignItems: 'center',
  },
  text: {
    color: ttColor.white,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    color: ttColor.gray700,
    fontSize: 16,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    borderRadius: 8,
    color: '#fff',
    backgroundColor: bgColor.tranparent,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: bgColor.blue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});