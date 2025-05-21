import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [N1, setN1] = useState('');
  const [N2, setN2] = useState('');
  const [resultado, setResultado] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Numero 1</Text>
      <TextInput style={styles.input}
        keyboardType='numeric'
        value={N1}
        onChangeText={setN1}
      />

      <Text style={styles.label}>Número 2</Text>
      <TextInput style={styles.input}
        keyboardType='numeric'
        value={N2}
        onChangeText={setN2}
      />

      <Button
        title='Somar'
        onPress={() => {
          const Num_1 = parseFloat(N1);
          const Num_2 = parseFloat(N2);
          if (!isNaN(N1) && !isNaN(N2)) {
            setResultado(Num_1 + Num_2);
          } else {
            setResultado('Entrada inválida')
          }
        }}
      />
      {resultado !== null && (
        <Text  style={styles.resultado}>Resultado: {resultado}</Text>
      )}
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
