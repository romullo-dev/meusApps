import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

 const Funcao_1 = () => {
  return (
    <View style={styles.container}>
      <Text>Minha primeira função</Text>
      <StatusBar style="auto" />
    </View>
  );
 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Funcao_1;
