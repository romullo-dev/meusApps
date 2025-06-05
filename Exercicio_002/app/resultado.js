import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Cabecalho from "../Components/cabecalho";
import { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';




export default function App() {
    const { name, peso, altura } = useLocalSearchParams();
    //const [classificacao, setClassificacao] = useState ();
    const rota = useRouter();

    let result = 0;
    let classificacao = '';
    result = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

    if (result < 18.5) {
        classificacao = "Abaixo do peso"
    } else if (result< 24.9) {
        classificacao = "Peso ideal (Parabéns)";
    } else if (result< 29.9) {
        classificacao = "Atenção! Você está acima do peso";
    } else if (result < 34.9) {
        classificacao = "Obesidade Grau I";
    } else if (result < 39.9) {
        classificacao = "Obesidade Grau II (severa)";
    } else {
        classificacao = "Obesidade Grau III (Mórbida)";
    }

    return (
        <View style={styles.container}>
            <Cabecalho label='Meu ICM' />
            
            <Text>{name}, ICM é {result}</Text>
            <Text>Voce esta {classificacao}</Text>
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
