import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Pagamento = () => {
  return (
    <View style={styles.container}>
      <Text>Pagamento</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Pagamento; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
