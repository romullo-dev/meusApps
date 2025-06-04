import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Cabecalho from '../components/cabecalho';
import {useState} from "react";
import { useRouter } from 'expo-router';


export default function App() {
  const [nome, setNome] = useState('');
  const rota = useRouter();

  return (
    <View style={styles.container}>
      <Cabecalho titulo="MATEMÁTICA BÁSICA" />

      <Text style={styles.label}>NOME:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <View style={styles.botoes}>
        <View style={styles.botao}>
          <Button
            title="+"
            onPress={() =>
              rota.push({
                pathname: '/operacao',
                params: { op: '+', pessoa: nome },
              })
            }
          />
        </View>

        <View style={styles.botao}>
          <Button
            title="-"
            onPress={() =>
              rota.push({
                pathname: '/operacao',
                params: { op: '-', pessoa: nome },
              })
            }
          />
        </View>

        <View style={styles.botao}>
          <Button
            title="*"
            onPress={() =>
              rota.push({
                pathname: '/operacao',
                params: { op: '*', pessoa: nome },
              })
            }
          />
        </View>

        <View style={styles.botao}>
          <Button
            title="/"
            onPress={() =>
              rota.push({
                pathname: '/operacao',
                params: { op: '/', pessoa: nome },
              })
            }
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap : 70,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#333',
    fontWeight: '600',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12, 
  },
  botao: {
    margin: 6,
    width: 70,
  },
});