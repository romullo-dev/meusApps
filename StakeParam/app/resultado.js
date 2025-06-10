import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';


const resultado = () => {
    const route = useRoute ();
    const {num1, num2} = route.params;
    let somar = parseInt(num1) + parseInt(num2);
 
  return (
    <View style={styles.container}>
      <Text>RESULTADO</Text>
      <Text>{num1}</Text>
      <Text>+</Text>
      <Text>{num2}</Text>
      <Text>=</Text>
      <Text>{somar}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default resultado;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

