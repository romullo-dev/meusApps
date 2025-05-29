import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Label from '../components/Label';
import Botao from '../components/Botao';
import Input from '../components/Input';




const Buscar = () => {
  return (
    <ImageBackground  source={require('../assets/Telafundo.jpg')}
      style={styles.imagem}>

      <View style={styles.styleLabel}>
        <Label Label='Buscar Usuário' />
      </View>
      <View style={styles.Imput}>
        <Input tag='Nome' />
      </View>
      <View style={styles.Imput}>
        <Input tag='CPF' />
      </View>
      <View style={styles.styleBotao}>
        <Botao texto='Buscar' caminho="" />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>

  );
};

export default Buscar;

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
