import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Label } from '../components';
import { Input } from '../components';
import { Operadores } from '../components';
import { useLocalSearchParams } from 'expo-router';




const operacao = () => {
    const {Operador} = useLocalSearchParams ();

  return (
      
      <View style={styles.container}>

        <View style={styles.styleLabel}>
          <Label Label='MATEMATICA BASICA' />
        </View>

        <View style={styles.Imput}>
          <Text>Nome</Text>
          <Input tag='numero 1' />
          <Input tag='numero 2' />
        </View>

        <Text>{Operador}</Text>

        <View style={styles.styleBotao}>
          <Operadores  ico = 'add' caminho="buscar" />
          <Operadores  ico = 'remove-outline' caminho="buscar" />
          <Operadores  ico = 'close' caminho="buscar" />
          <Operadores  ico = 'percentage' caminho="buscar" />
        </View>

        <StatusBar style="auto" />


      </View>




  );
};

export default operacao;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    gap : 30,
    padding : 60,
  },
  imagem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 0,


  },
  styleLabel: {
    justifyContent : 'center',
    backgroundColor: 'blue',




  },
  styleBotao: {
    gap: 25,


  },
  Imput : {
    flex : 0,
    alignItems : 'center',
    gap : 20,
  },
});