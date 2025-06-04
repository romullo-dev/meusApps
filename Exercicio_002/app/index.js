import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Cabecalho from "../Components/cabecalho";
import { useState } from 'react';
import { router } from 'expo-router';
import { useRouter } from 'expo-router';


export default function App() {

    const [name, setName] = useState();
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const rota = useRouter();


    return (
        <View style={styles.container}>
            <Cabecalho label='Meu ICM' />

            <TextInput
                placeholder='Digete seu nome '
                value = {name} 
                onChangeText = {setName}
            />
            <TextInput
                placeholder='Digete seu peso '
                value = {peso} 
                onChangeText = {setPeso}
            />
            <TextInput
                placeholder='Digete sua altura '
                value = {altura} 
                onChangeText = {setAltura}
            />

            <TouchableOpacity
                onPress={() => rota.push({
                    pathname : '/calculo',
                    params : {name : name , peso: peso, altura: altura }
                }
                ) }
            >

                </TouchableOpacity> 


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
