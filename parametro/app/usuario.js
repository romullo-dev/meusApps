import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';


const usuario = () => {
  const {id, nome} = useLocalSearchParams ();
    return (
    <View style={styles.container}>
      <Text>Usuario</Text>

      <Text>Id : {id}</Text>
      <Text>Nome : {nome}</Text>


      <StatusBar style="auto" />
    </View>
  );
}

export default usuario;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
