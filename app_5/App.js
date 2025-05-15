import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ImageBackground} from 'react-native';

export default function App() {
  return (
    <ImageBackground 
      source={require('./assets/KA.jpg')}
      style={styles.container}
    >
      <View>
        <Text>aaaaaaaaaaaaaaaaaaaaaaaaaaa</Text> 
       </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  container: {
    flex : 1,
    opacity : 50,
  },

});
