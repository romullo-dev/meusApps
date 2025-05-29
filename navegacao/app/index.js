import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Label from '../components/Label'; 
import Botao from '../components/Botao'; 



const Index = () => {
  return (
    <ImageBackground source={require('../assets/Telafundo.jpg')}
      style={styles.imagem}>

        <View style={styles.styleLabel}>
          <Label Label = 'Home'/>
        </View>
        <View style={styles.styleBotao}>
          <Botao texto = 'BUSCAR USUÁRIO' caminho = "buscar" />
          <Botao texto = 'CADASTRAR USUÁRIO' caminho = "cadastro" />
        </View>
       
      <StatusBar style="auto" />
    </ImageBackground>

  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleLabel : {

  },
  styleBotao :{

  }});
