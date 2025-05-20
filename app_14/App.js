import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {

  const [c, setC] = useState (0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto} >Contador : {c} </Text>
      <Button title= "Aumentar" onPress={ () => setC (c + 1)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },texto: {
    fontSize : 24,
    marginBottom : 20,
    color : 'black',
  },
});



