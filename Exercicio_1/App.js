import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default function App() {
  const [N1, setN1] = useState ('');
  const [N2, setN2] = useState ('');
  const [N3, setN3] = useState ('');
  const [media, setMedia] = useState ('');
  return (
    <View style={styles.container}>
      <Text style={styles.label} >Nota 1</Text>
      <TextInput style={styles.input}
        keyboardType='numeric'
        value={N1}
        onChangeText={setN1}
      />
      <Text style={styles.label} >Nota 2</Text>
      <TextInput style={styles.input}
        keyboardType='numeric'
        value={N2}
        onChangeText={setN2}
      />
      <Text style={styles.label} >Nota 3</Text>
      <TextInput style={styles.input}
        keyboardType='numeric'
        value={N3}
        onChangeText={setN3}
      />

      <Button 
      title='Calcular'
        onPress={() => {
          const note_1 = parseFloat (N1);
          const note_2 = parseFloat(N2);
          const note_3 = parseFloat(N3);
          if (!isNaN(N1) && !isNaN (N2)&& !isNaN (N3)) {
            setMedia ((note_1 + note_2 + note_3)/3);
          } else {
            setMedia ('Numero Invalido');
          } 
        }
        }
      />

      {media!== null && (

        <Text style={styles.media} >Media: {media}</Text>
      )  
    }

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
