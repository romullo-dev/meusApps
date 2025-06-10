import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

 const Configuracao = () => {
  return (
    <View style={styles.container}>
      <Text>Configuracao</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Configuracao;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
