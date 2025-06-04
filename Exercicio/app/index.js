import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Cabecalho from '../components/cabecalho';
import {useState} from "react";
import { useRouter } from 'expo-router';


export default function App() {
    const [nome, setNome] = useState();
    const rota = useRouter();
  return (
    <View style={styles.container}>
        <Cabecalho titulo="MATEMÁTICA BÁSICA"/>
        <Text>NOME:</Text>
        <TextInput
            placeholder="Digite seu nome: "
            value={nome}
            onChangeText={setNome}
        />
        <Button title="+" onPress={()=>rota.push({
            pathname:"/operacao",
            params:{ op: "+", pessoa: `${nome}`},
        })} />
        <Button title="-" onPress={()=>rota.push({
            pathname:"/operacao",
            params:{ op: "-", pessoa: `${nome}`},
        })} />
        <Button title="*" onPress={()=>rota.push({
            pathname:"/operacao",
            params:{ op: "*", pessoa: `${nome}`},
        })} />
        <Button title="/" onPress={()=>rota.push({
            pathname:"/operacao",
            params:{ op: "/", pessoa: `${nome}`},
        })} />
        
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
