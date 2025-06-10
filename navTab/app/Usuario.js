import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

 const Usuario = () => {
  return (
    <View style={styles.container}>
      <Text>Usuario</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Usuario;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
