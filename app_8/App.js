import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Input</Text>
        <TextInput style={styles.entrada}
        placehoulder = 'Digite algo...'
        />
      </View>
      <></>
      
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
  entrada : {
    backgroundColor : 'blue'
  },
});
