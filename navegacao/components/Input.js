import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';



const Input = ({ tag }) => {

  return (

    <>

      <TextInput
        style={styles.tag}

        placeholder={tag}>


          

      </TextInput>



    </>

  );
};

export default Input;

const styles = StyleSheet.create({
  tag: {
    width: 290,
    height: 50,
    backgroundColor: '#dee2e6',


    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,



  },
});
