import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

const Home = ({ navigation }) => {
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Text>Numero 1</Text>
            <TextInput
                value={n1}
                onChangeText={setN1}
                keyboardType='numeric'
            />
            <Text>Numero 2</Text>
            <TextInput
                value={n2}
                onChangeText={setN2}
                keyboardType='numeric'
            />
            <Button title='somar'
                onPress={() => navigation.navigate('resultado', { num1 : `${n1}`, num2 : `${n2}` })
            }
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
