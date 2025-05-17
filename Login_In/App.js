import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput ,Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.container_3}>
        <Image source={require('./assets/Logo.png')}
          style={{ borderRadius: 90, height: 125, width: 125 }} />
      </View>

      <View style={styles.container_2}>
        <View style={styles.container_2    }> 
        <Text style={styles.Le} >Login</Text>
        <TextInput style={styles.entrada}
          placeholder='Login'
          placeholderTextColor="#888"
        />

<Text style={styles.Le} > Senha </Text>


        <TextInput style={styles.entrada}
          placeholder='Senha'
          placeholderTextColor="#888"

        />

<Button
    title="Acessar"
    color="#3182ce"
    style={{  height: 50, width: 20 }}   />


        </View>
        
        

      </View>

      <View style={styles.container_3}>

        <Text style={styles.Le} >© 2024 Entrega - Todos os direitos reservados.</Text>
      </View>






      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303a4a',
    alignItems: 'center',
    justifyContent: 'center',
    gap : 70,
  },
  entrada: {
    borderColor: '#fff',
    backgroundColor: '#4a5568',
    height: 58,
    width: 400,
    borderRadius: 10,
    color: "#fff"
  },
  container_2 : {
    flex : 0,
    justifyContent : 'center',
    alignItems : 'center',
    gap : 20,
    backgroundColor: '#3e7da6',
    height: 550,
    width: 450,
  },
  container_3 : {
    backgroundColor: '#303a4a',
    alignItems: 'center',
    justifyContent: 'center',
  },

Le : {
  color : '#ffffff'
}
});
