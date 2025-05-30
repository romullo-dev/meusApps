import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Label from '../components/Label';
import Botao from '../components/Botao';
import Input from '../components/Input';




const cadastro = () => {
  return (
    <ImageBackground source={require('../assets/Telafundo.jpg')}
      style={styles.imagem}>

<View style={styles.container}>
      <View style={styles.styleLabel}>
        <Label Label='Atualizar dados' />
      </View>
      <View style={styles.Imput}>
        <Input tag='Email' />
      </View>
      <View style={styles.Imput}>
        <Input tag='Nome de usuario' />
      </View>
      <View style={styles.Imput}>
        <Input tag='Telefone' />
      </View>
      <View style={styles.Imput}>
        <Input tag='Senha' />
      </View>
      <View style={styles.styleBotao}>
        <Botao texto='GRAVAR' caminho="" />
      </View>

</View>

    
      <StatusBar style="auto" />
    </ImageBackground>

  );
};

export default cadastro;

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

  }
});
