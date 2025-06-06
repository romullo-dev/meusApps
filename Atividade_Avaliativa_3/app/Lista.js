import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

const Lista = () => {
    const [lista, setLista] = useState();
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder='Itens'
        onChangeText={setLista}
        value='lista'
      />

      <Button style={styles.container}
        title='+'
        onPress={() = }
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
