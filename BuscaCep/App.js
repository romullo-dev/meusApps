import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import api from './src/services/api';
import { useState } from 'react';

export default function App() {

  const [cep, setCEP] = useState();
  const [lougradouro, setLougradouro] = useState();
  const [bairro, setBairro] = useState();
  const [localidade, setLocalidade] = useState()
  const [uf, setUf] = useState()

  function buscarCEP (cep) {
     if (cep =="") {
        Alert.alert('Cep invalido')
     } 
     try {
      
     } catch (error) {
      console.log(error);
      
     }
  }
  return (
    <View style={styles.container}>
      <Text>Buscador de CEP</Text>
      <TextInput 
      placeholder='Cep'
      value=''
      onChangeText={setCEP}
      />

      <Button title='Buscar' onPress={buscarCEP()} />
      <TextInput 
      value='LOGRADORA'
      onChangeText={setCEP}

      
      />
            <TextInput 
      value='bairro'
      onChangeText={setCEP}

      />      <TextInput 
      value='cidade'
      onChangeText={setCEP}

      />

<TextInput 
      value='estadoa'
      />

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
