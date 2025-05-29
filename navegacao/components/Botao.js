import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router'; 


const Botao =({texto, caminho}) => {
  const router = useRouter();
  return (

    <>
    <Button 
    style={styles.Botao} 
    title={texto}  
    onPress={() => router.push (`/${caminho}`) }

    
    

    
    />  

    </>
    
  );
};

export default Botao;

const styles = StyleSheet.create({
  Botao: {
    width : 50,
    height : 50,

    
  },
});
