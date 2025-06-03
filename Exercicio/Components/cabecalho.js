import { StyleSheet, Text, View } from 'react-native';


 const Cabecalho = ({titulo}) => {
  return (
    <>
      <Text style={styles.titulo}>{titulo}</Text>
    </>
  );
}


const styles = StyleSheet.create({
  titulo: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Cabecalho
