import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Cabecalho from "../Components/cabecalho";
import { useState } from 'react';
import { router } from 'expo-router';
import { useRouter } from 'expo-router';
import Slider, { MarkerProps, SliderProps } from '@react-native-community/slider';



export default function App() {

    const [name, setName] = useState();
    const [peso, setPeso] = useState();
    const [value, setValue] = useState(0);

    const [altura, setAltura] = useState();
    const rota = useRouter();


    return (
        <View style={styles.container}>
            <Cabecalho label='Meu ICM' />

            <TextInput
                placeholder='Digete seu nome '
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder='Digete seu peso '
                value={peso}
                onChangeText={setPeso}
            />




            <TextInput
                /*placeholder='Digete sua altura '
                value={altura}
                onChangeText={setAltura}*/
            />

            <Slider
                value={altura}
                onValueChange={setAltura}
                minimumValue={1}
                maximumValue={2.5}
                minimumTrackTintColor="#FF0000"
                maximumTrackTintColor="#000000"
                thumbTintColor="red"
                style={{ width: '80%', height: 40 }}
            />
            <Text>{altura}</Text>

            <TouchableOpacity
                onPress={() => rota.push({
                    pathname: '/resultado',
                    params: { name: name, peso: peso, altura: altura }
                }
                )}
            >
                <Text>Button</Text>




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
