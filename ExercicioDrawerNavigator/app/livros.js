import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const livros = () => {
  return (
    <View style={styles.container}>

      <Text>Consultar</Text>
      <TextInput
        placeholder="Digite aqui..."
        placeholderTextColor="#888"
      />    
      
        <StatusBar style="auto" />
    </View>
  );
}

export default livros;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});