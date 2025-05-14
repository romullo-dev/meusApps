import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Meu Gato</Text>
      <Image source = {require('./assets/Gato.jpg')}
      style = {{borderRadius:90}} ></Image>
      <Text style={styles.text} >Gato da Net</Text>
      <Image
  source={{ uri: 'https://s2-oglobo.glbimg.com/02zLm72rJZd4SGYI6BPziT5N4gQ=/1590x0:7164x3373/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2025/w/w/6iNo9gTQAOdbEbRzNqGA/adorable-kitty-with-monochrome-wall-her.jpg' }}
  style={{ width: 200, height: 200, borderRadius:90 }}
/>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  }, text : {
    fontSize : 30,
    color : '#fff',
  },
});
