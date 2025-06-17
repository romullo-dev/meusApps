import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const home = () => {
  return (
    <View style={styles.container}>
      <Text>Consultar</Text>
      <TextInput />
      <StatusBar style="auto" />
    </View>
  );
}

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
