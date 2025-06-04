import { StyleSheet, Text, View } from "react-native";

const Cabecalho = ({ titulo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{titulo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  texto: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Cabecalho;
