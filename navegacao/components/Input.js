import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


const Input  =({tag}) => {

    return (

    <>

    <TextInput 
    placeholder={tag}>

    </TextInput>
    


    </>
    
  );
};

export default Input;

const styles = StyleSheet.create({
  Botao: {
    width : 50,
    height : 50,

    
  },
});
