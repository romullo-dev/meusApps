import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.H}>
        <Text style={styles.H1} >Poesia</Text>
      </View>
      <View style={styles.M}>
        <Text style={styles.M1} >Tecnologia de viver {'\n'}{'\n'}

          Perdi minha poesia para a tecnologia
          Perdi meu sonho para a tecnologia
          Perdi minha literatura para a tecnologia.

          Apenas uma pessoa
          uma tecnologia
          destruiu o sonho
          de uma menina.
          Recnologia de viver.. 
        </Text>
      </View>
      <View style={styles.F}>
        <Text style={styles.F1} >Jade Suellen</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  H: {
    backgroundColor: '#3366CC',
    padding : 20,

  },
  M: {
    flex: 1,
    padding : 20,

    backgroundColor: '#A2B18F',
    alignItems: 'justify',
    justifyContent: 'center',
  },
  F: {
    backgroundColor: '#FFD700',
    padding : 20,

    flex: 0,

    justifyContent: 'flex-start',

    alignItems: 'center',
  },

  //Textos



  H1: {
    color : '#FFD700',
    textAlign : 'center',
    fontSize : 25,
    fontWeight : 'bold',
  },

  M1: {
    color : '#fff',
    textAlign : 'center',
    fontSize : 50,
  },

  
  F1: {
    color : '#fff',
    textAlign : 'center',
    fontSize : 20,
    fontWeight : 'bold',

  },




});
