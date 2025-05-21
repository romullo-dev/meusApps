import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [nome , setNome ] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite seu nome:</Text>
      <TextInput 
      style={styles.input}
      placeholder='Seu nome aqui'
      value={nome}
      onChangeText={texto => setNome(texto)}
      />
      <Text style={styles.resultado}>Olá, {nome} !</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding : 20,
  }, 
  label : {
    fontSize : 18,
    marginBottom : 10,
  },
  input : {
    borderWidth : 1,
    borderColor : '#ccc',    
    padding : 10,
    fontSize : 16, 
    borderRadius : 5,
    marginBottom : 20,
  },

  resultado : {
    fontSize : 20,
    fontWeight :'bold',
  },

});
