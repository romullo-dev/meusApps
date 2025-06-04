import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

 const  Cabecalho = ({label}) => {
  return (
      <>
        <Text style={styles.Letra}>{label}</Text>
      </>
  );
}
export default Cabecalho;

const styles = StyleSheet.create({
  Letra : {
    color : 'black',
  },
});