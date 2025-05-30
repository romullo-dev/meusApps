import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Label from '../components/Label';
import Botao from '../components/Botao';



const Index = () => {
  return (
    <ImageBackground source={require('../assets/Telafundo.jpg')}
      style={styles.imagem}>

      <View style={styles.container}>

        <View style={styles.styleLabel}>
          <Label Label='Home' />
        </View>
        <View style={styles.styleBotao}>
          <Botao  texto='BUSCAR USUÁRIO' caminho="buscar" />
          <Botao texto='CADASTRAR USUÁRIO' caminho="cadastro" />
          <Botao texto='CADASTRAR USUÁRIO' caminho="cadastro" />
          <Botao texto='CADASTRAR USUÁRIO' caminho="cadastro" />

        </View>

      </View>



      <StatusBar style="auto" />
    </ImageBackground>

  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'null',
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


  },
  styleBotao: {
    gap: 25,


  }
});
