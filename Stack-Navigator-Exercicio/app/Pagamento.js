import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Pagamento = ({ navigation }) => {
  const router = useRoute();
  const { total } = router.params;


  return (
    <View style={styles.container}>
      <Text style={styles.botaoTexto2}>Pagamento</Text>

      <View style={styles.totalView}>
        <Text style={styles.botaoTexto}>R$ {total} </Text>
      </View>
      <View style={styles.Image}>
        <TouchableOpacity onPress={() => alert('Pagamento realizado no dinheiro!')}>
          <Image source={{ uri: 'https://thumbs.dreamstime.com/z/dinheiro-brasileiro-com-um-monte-de-notas-reais-na-sua-m%C3%A3o-muitas-r-206670557.jpg' }}
            style={{ width: 315, height: 90, borderRadius: 15 }}
          /></TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Pagamento realizado no pix!')}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.CASqCA5UISzNu9vsNvQ74wHaE0?rs=1&pid=ImgDetMain&cb=idpwebp1&o=7&rm=3' }}
            style={{ width: 315, height: 90, borderRadius: 15 }}
          /></TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Pagamento realizado no cartão!')}>
          <Image source={{ uri: 'https://tecnograna.com.br/wp-content/uploads/2019/07/Nubank.jpg' }}
            style={{ width: 315, height: 90, borderRadius: 15 }}
          /></TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default Pagamento;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap : 60
  },
  totalView: {
    backgroundColor: '#ADD8E6',
    width: 250,
    height: 89,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto2 : {
    fontSize : 25,
    fontWeight : 'bold'

},
Image : {
  gap : 20
},
botaoTexto: {
  color: '#fff',
  fontSize : 50,
  fontWeight : 'bold'
},
});
