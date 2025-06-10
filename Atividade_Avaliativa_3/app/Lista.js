import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button ,ScrollView} from 'react-native';
import { useState } from 'react';

const Lista = (navigation) => {
  const [lista, setLista] = useState([]);
  const [itens, setItens] = useState();

  const adicionarItem = () => {
    
     setLista ([...lista, itens]);
    setItens ('');
  }; 

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder='Itenaaaaaaaaaaaaaaas'
        onChangeText={setItens}
        value={itens}
      />

      <Button style={styles.container}
        title='+'
        onPress={adicionarItem}
      />


      <ScrollView style={styles.lista}>
        {lista.map((item, index) => (
          <Text key={index} style={styles.item}>
            • {item}
          </Text>
        ))}
      </ScrollView>


      <Button 
            title='Sair'
            onPress={() => navigation.navigate('Home') }
        />

    </View>

    
  );
}

export default Lista;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
