import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View style={styles.login} >
      <Ionicons name="person" size={32} color=''/>
      <TextInput 
      style={styles.input}
      placeholder='Digite seu login'

      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    borderRadius: 20,
  },
  login:{
    flexDirection: 'row',
    width: '80%',
    borderRadius: 20,
    backgroundColor: '#f1f1f1',
    

  },
});