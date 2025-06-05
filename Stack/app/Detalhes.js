import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Detalhes = () => {
  return (
    <View style={styles.container}>
      <Text>Detalhes</Text>
      <StatusBar style="auto" />
    </View>
  );
} 

export default Detalhes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
