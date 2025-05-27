import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'; 

const Index =() => {
  return (
    <View style={styles.container}>
      <Text>Aqui é o Index</Text>
      <Link href="/settings" >Ir para Settings</Link>

      <StatusBar style="auto" />
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
