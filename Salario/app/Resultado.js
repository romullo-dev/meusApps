import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const Resultado = ({ navigation }) => {
  const router = useRoute();
  const { namePerson, value } = router.params;

  let Inss = (parseFloat(value) * 10) / 100;
  let fgts = (parseFloat(value) * 11) / 100;
  let Ir = 0;
  let porc = 0;

  if (value < 900) {
    Ir = 0;
  } else if (value < 1500) {
    Ir = (parseFloat(value) * 5) / 100;
    porc = 5;
  } else if (value < 2500) {
    Ir = (parseFloat(value) * 10) / 100;
    porc = 10;
  } else {
    Ir = (parseFloat(value) * 20) / 100;
    porc = 20;
  }

  let totalDesconto = Inss + fgts + Ir;
  let salarioLiquido = value - totalDesconto;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo do Cálculo</Text>

      <Text style={styles.label}>👤 Nome:</Text>
      <Text style={styles.value}>{namePerson}</Text>

      <Text style={styles.label}>💰 Salário Bruto:</Text>
      <Text style={styles.value}>R$ {parseFloat(value).toFixed(2)}</Text>

      <Text style={styles.label}>📉 IR ({porc}%):</Text>
      <Text style={styles.value}>R$ {Ir.toFixed(2)}</Text>

      <Text style={styles.label}>📉 INSS (10%):</Text>
      <Text style={styles.value}>R$ {Inss.toFixed(2)}</Text>

      <Text style={styles.label}>🏦 FGTS (11%):</Text>
      <Text style={styles.value}>R$ {fgts.toFixed(2)}</Text>

      <Text style={styles.label}>💸 Total de Descontos:</Text>
      <Text style={styles.value}>R$ {totalDesconto.toFixed(2)}</Text>

      <Text style={styles.label}>✅ Salário Líquido:</Text>
      <Text style={styles.liquido}>R$ {salarioLiquido.toFixed(2)}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title='Voltar'
          onPress={() => navigation.navigate('Home')}
          color="#007bff"
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default Resultado;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#343a40',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#495057',
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    marginBottom: 4,
    color: '#212529',
  },
  liquido: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745',
    marginTop: 8,
  },
  buttonContainer: {
    marginTop: 30,
    alignSelf: 'stretch',
  },
});
