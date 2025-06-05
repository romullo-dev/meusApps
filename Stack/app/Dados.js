import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Dados = () => {
  return (
    <View style={styles.container}>
      <Text>Dados</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Dados;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
