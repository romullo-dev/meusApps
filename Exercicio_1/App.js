import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [n1, setN1] = useState ('');
  const [n2, setN2] = useState ('');
  const [n3, setN3] = useState ('');
  const [media, setMedia] = useState ('');
  return (
    <View style={styles.container}>
      <Text style={styles.label} >Nota 1</Text>
      <TextInput style={styles.input}
        on
      />
      <Text style={styles.label} >Nota 2</Text>
      <Text style={styles.label} >Nota 3</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
