import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Cabecalho from '../components/cabecalho';
import { useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';

export default function App() {
    const {op, pessoa, n1, n2} = useLocalSearchParams();
    const rota = useRouter();
    let resultado = 0;
    let nome_operacao = "";

    switch (op) {
        case "+":
            resultado = parseInt(n1) + parseInt(n2);
            nome_operacao = "ADIÇÃO";
            break;

        case "-":
            resultado = parseInt(n1) - parseInt(n2);
            nome_operacao = "SUBTRAÇÃO";
            break;

        case "*":
            resultado = parseInt(n1) * parseInt(n2);
            nome_operacao = "MULTIPLICAÇÃO";
            break;

        case "/":
            resultado = parseInt(n1) + parseInt(n2);
            nome_operacao = "DIVISÃO";
            break;
    }

  return (
    <View style={styles.container}>
      <Cabecalho titulo="MATEMÁTICA BÁSICA"/>
      <Text>
        {pessoa}, o resultado da {nome_operacao} é
      </Text>
      <Text>{resultado}</Text>
      <Button title='RESET' onPress={()=>rota.push("/")}/>
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