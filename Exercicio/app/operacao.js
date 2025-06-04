import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Cabecalho from '../components/cabecalho';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function App() {
    const {op, pessoa} = useLocalSearchParams(); // quando chamamos variáveis de outro lugar usamos chaves
    const [n1, setN1] = useState(); //quando criamos variáveis locais usamos o colchetes
    const [n2, setN2] = useState();
    const rota = useRouter();

  return (
    <View style={styles.container}>
      <Cabecalho titulo="MATEMÁTICA BÁSICA"/>
      <Text>Operação: {op}</Text>
      <TextInput
        placeholder='Digite o número 1:'
        value={n1}
        onChangeText={setN1}
      />
      <TextInput
        placeholder='Digite o número 2:'
        value={n2}
        onChangeText={setN2}
      />
      <Button title="calcular" onPress={()=>rota.push({
            pathname:"/resultado",
            params:{ 
                op: `${op}`, 
                pessoa: `${pessoa}`, 
                n1: `${n1}`, 
                n2: `${n2}`,
            },
        })
    } 
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