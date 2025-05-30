import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router'; 


const Botao =({texto, caminho}) => {
  const router = useRouter();
  return (

    <>
   <TouchableOpacity 
      style={styles.botao} 
      onPress={() => router.push(`/${caminho}`)}
    >
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>

    </>
    
  );
};

export default Botao;

const styles = StyleSheet.create({
  botao: {
    width : 290,
    height : 50,
    backgroundColor: '#dee2e6',
    borderColor : 'green',
    alignItems : 'center',
    justifyContent : 'center', 
    borderRadius : 30,
  },
});
