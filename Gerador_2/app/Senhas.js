
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';


export default function Senhas() {

  return (
    <View style={styles.container}>
        <Text>ssss</Text>


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

  logo: {
    marginBottom: 60,
  },

  area : {
    marginTop : 14,
    marginBottom: 14,
    width : '80%',
    backgroundColor : '#fff',
    borderRadius: 8 ,
    padding : 8,
  },
  button :{
    backgroundColor : '#392de9',
    width : '80%',
    height : 50 ,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 8,
  },
  button_text: {
    color : '#fff',
    fontSize : 20,
  },
  title: {
    fontSize : 30,
    fontWeight : 'bold',
  },
});
