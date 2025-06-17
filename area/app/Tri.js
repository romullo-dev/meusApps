import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

const Tri = () => {
    const [b, setB] = useState('');
    const [a, setA] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularArea = () => {
        const base = parseFloat(b);
        const altura = parseFloat(a);
        const area = (base * altura) / 2;
        setResultado(area);
    }

    return (
        <View style={styles.container}>
            <Text>Base</Text>
            <TextInput
                placeholder='Digite a base'
                value={b}
                onChangeText={setB}
            />

            <Text>Altura</Text>
            <TextInput
                placeholder='Digite a altura'
                value={a}
                onChangeText={setA}
            />
            <Button title='Calcular' onPress={calcularArea} />

            <Text>{resultado}</Text>
            <StatusBar style="auto" />
        </View>
    );
}

export default Tri;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap : 20,
    },
});
