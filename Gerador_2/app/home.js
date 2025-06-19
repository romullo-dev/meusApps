
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider, { MarkerProps, SliderProps } from '@react-native-community/slider';
import { useState } from 'react';
import { ModalSenha } from "./components/modal";

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function App() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState('');
  const [modal, setModal] = useState (false)

  function Gerar_senha() {
    let password = '';
    for (let index = 0, n = charset.length; index < size; index++) {
      password += charset.charAt(Math.floor(Math.random()*n))
    }

    setPasswordValue(password); 
    setModal(true);

  }
  return (
    <View style={styles.container}>
      <Image source={require('./src/assets/logo (1).png')}
        style={styles.logo}
      />
      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#ff00200'
          minimumTrackTintColor='#000'
          thumbTintColor='#392de9'
          value={size}
          onValueChange={(value) => setSize(Number(value.toFixed(0)))}
        />

      </View>

      <TouchableOpacity style={styles.button} onPress={Gerar_senha}>
        <Text style={styles.button_text}>Gerar senhar</Text>
      </TouchableOpacity>

      <Modal visible={modal} animationType='fade' transparent={true} >
        <ModalSenha password={passwordValue} handleClose= {() => setModal(false)} />
      </Modal>


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
