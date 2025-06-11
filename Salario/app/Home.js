import { NavigationRouteContext } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const Home = ({ navigation }) => {
    const [value, setValue] = useState();
    const [name, setName] = useState();

    return (
        <View style={styles.container}>
            <Text>Nome</Text>

            <TextInput
                placeholder='Digite o seu nome'
                value={name}
                onChangeText={setName}
            />

            <Text>Salário Bruto</Text>

            <TextInput
                placeholder='Digite o seu salário'
                value={value}
                onChangeText={setValue}
                keyboardType='numeric'
            />

            <Button title='Calcular'
                onPress={() => navigation.navigate('Resultado', {namePerson : `${name}`,  value : `${value}` } )}
            />
            <StatusBar style="auto" />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
