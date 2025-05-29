import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Label =(props) => {
  return (
    <Text style={styles.Label} >{props.Label}</Text>

    
  );
};

export default Label;

const styles = StyleSheet.create({
  Label: {
    color : 'white',
    fontSize : 40,
    fontWeight : 'bold',

    
  },
});
