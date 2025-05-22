import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saudacao from './components/Saudacao';
import SaudacaoProps from './components/SaudacaoProps'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Saudacao />

      <SaudacaoProps nome ='França' cpf =  '1234568578' />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
