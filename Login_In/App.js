import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <Image source = {require('./assets/Logo.png')}
        style = {{borderRadius:10, height : 100, width : 100 }} />
      </View>

      <View style={styles.container}>
        
      </View>


      
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
