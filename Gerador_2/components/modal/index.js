import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { useState } from 'react';
import * as Clipboard from "expo-clipboard";

export function ModalSenha({password, handleClose}) {

  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password);
    alert ('Senha salva')
    handleClose ();
  }
  return (
    <View style={styles.container}>
      <View style={styles.cont}>
        <Text style={styles.title}>Senha Gerada</Text>

        <Pressable style={styles.inner} onLongPress={handleCopyPassword} >
          <Text style={styles.text}>{password}</Text>
        </Pressable>

        <View style={styles.area}>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonSave ]}>
            <Text style={styles.buttonTextSave}>Salvar Senha</Text>
          </TouchableOpacity>

        </View>
      </View>





    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(24,24,24,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  }, cont: {
    backgroundColor: '#fff',
    width: '85%',
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,


  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
  },
  inner: {
    backgroundColor: '#0e0e0e',
    width: '90%',
    padding: 14,
    borderRadius: 8,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
  },
  area: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'space-between',

  } ,
  button : {
    flex : 1,
    alignItems : 'center',
    marginTop : 14,
    marginBottom : 14,
    padding : 8,
  },
  buttonSave : {
    backgroundColor :  '#392DE9',
    borderRadius : 8,

  },
  buttonTextSave : {
    color : '#fff',
    fontWeight : 'bold'
  }





});
