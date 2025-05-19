import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.button}
        activeOpacity={0.7}
        onPress={() => alert('Botão precionado com TouchableOpacity')}
      >
        <Text style={styles.button_txt} >Clique aqui</Text>
      </TouchableOpacity >
      <StatusBar style="auto" />

      <TouchableHighlight
        activeOpacity={0.7}
        onPress={() => alert('Botão precionado com TouchableHighlight')}
        style={styles.button}
        underlayColor={'#fff'} 
      >
        <Text style={styles.button_txt} >Clique aqui</Text>

      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, button: {
    borderWidth: 1,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
  },
  button_txt: {
    color: '#fff',
    fontSize: 16,
  },
});
