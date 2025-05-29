import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Label from '../components/Label';
import Botao from '../components/Botao';
import Input from '../components/Input';




const cadastro = () => {
  return (
    <ImageBackground source={require('../assets/Telafundo.jpg')}
      style={styles.imagem}>

      <View style={styles.styleLabel}>
        <Label Label='Cadastrar Usuário' />
      </View>
      <View style={styles.Imput}>
          <Input tag = 'Email'/>
        </View>
      <View style={styles.styleBotao}>
        <Botao texto='CADASTRAR' caminho="" />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>

  );
};

export default cadastro;

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
  styleLabel: {

  },
  styleBotao: {

  }
});
