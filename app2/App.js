import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View  style={styles.container_1}>
        <Text>Cabeçalho</Text>
      </View>
      <View style={styles.container_2}></View>
        <Text>Conteúdo</Text>
      <View style={styles.container_3}>
        <Text>Rodapé</Text>
      </View>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space_between',
  },

  container_1: {
    backgroundColor : '#4CFf50',
    padding : 20,
  },
  container_2: {
    flex : 1,                                                                                                             
    padding : 20,
    backgroundColor : '#f0f0f0',

  },
  container_3: {
    backgroundColor : '#4CFf50',
    padding : 20,

  },
});





