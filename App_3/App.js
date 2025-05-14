import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.t1} >titulo</Text>
      <Text style={styles.t2} >subtitulo</Text>
      <Text style={styles.t3} >
        texto, texto, texto...
      </Text>

      <StatusBar style="auto" />
    </View>
  );s
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },t1: {
    fontSize : '30',
    color : '#4CA',
  },

  t2: {
    fontSize : '20',
    color : '#4CD',
  },
  t3: {
    fontSize : '10',
    color : '#4CD',
  },
});