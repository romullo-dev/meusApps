import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; 



const Operadores =({texto, caminho, ico}) => {
  const router = useRouter();

  return (

    <>
  <TouchableOpacity 
      style={styles.botao}
      onPress={() => router.push({
        pathname : "../app/operacao",
        params : {Operador : "Adicao"}
      }

      )}

>
    <Ionicons name={ico} size={24} color="white" />
    </TouchableOpacity>

    </>
    
  );
};

export default Operadores;

const styles = StyleSheet.create({
  botao: {
    width : 50,
    height : 50,
    backgroundColor: '#dee2e6',
    borderColor : 'green',
    alignItems : 'center',
    justifyContent : 'center', 
    borderRadius : 15,
  },
});