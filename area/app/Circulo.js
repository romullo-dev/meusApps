import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

const Circulo = () => {
    const [r, setR] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularArea = () => {
        const raio = parseFloat(r);
        const area = Math.PI * Math.pow(raio, 2);
        setResultado(area);
    }

    return (
        <View style={styles.container}>
            <Text>Raio</Text>
            <TextInput
                placeholder='Digite o raio'
                value={r}
                onChangeText={setR}
            />

            <Button title='Calcular' onPress={calcularArea} />

            <Text>{resultado}</Text>
            <StatusBar style="auto" />
        </View>
    );
}

export default Circulo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap : 20,
    },
});
