import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider, { MarkerProps, SliderProps } from '@react-native-community/slider';
import { useState } from 'react';

export default function App() {
 

  
  return (
    <View style={styles.container}>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
