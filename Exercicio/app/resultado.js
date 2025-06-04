import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Cabecalho from '../components/cabecalho';
import { useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';

export default function App() {
  const { op, pessoa, n1, n2 } = useLocalSearchParams();
  const rota = useRouter();

  let resultado = 0;
  let nome_operacao = "";

  switch (op) {
    case "+":
      resultado = parseFloat(n1) + parseFloat(n2);
      nome_operacao = "ADIÇÃO";
      break;
    case "-":
      resultado = parseFloat(n1) - parseFloat(n2);
      nome_operacao = "SUBTRAÇÃO";
      break;
    case "*":
      resultado = parseFloat(n1) * parseFloat(n2);
      nome_operacao = "MULTIPLICAÇÃO";
      break;
    case "/":
      resultado = parseFloat(n1) / parseFloat(n2);
      nome_operacao = "DIVISÃO";
      break;
    default:
      nome_operacao = "OPERAÇÃO INVÁLIDA";
      resultado = "Erro";
      break;
  }

  return (
    <View style={styles.container}>
      <Cabecalho titulo="MATEMÁTICA BÁSICA" />

      <Text style={styles.texto}>
        {pessoa}O resultado da {nome_operacao} é:
      </Text>

      <Text style={styles.resultado}>{resultado}</Text>

      <View style={styles.botao}>
        <Button title="RESET" onPress={() => rota.push("/")} />
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
  },
  texto: {
    fontSize: 20,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '600',
  },
  resultado: {
    fontSize: 40,
    color: '#0077FF',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  botao: {
    width: 150,
  },
});