import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Botao =({texto, onPress}) => {
  return (
    <Button title={texto} onPress={onPress} />

    
  );
};

export default Botao;

const styles = StyleSheet.create({
  Label: {
    color : 'white',
    fontSize : 40,
    fontWeight : 'bold',

    
  },
});
