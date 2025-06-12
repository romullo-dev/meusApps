import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const Home = ({ navigation }) => {
    const [value, setValue] = useState("");
    const [name, setName] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite o seu nome'
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label}>Salário Bruto</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite o seu salário'
                value={value}
                onChangeText={setValue}
                keyboardType='numeric'
            />

            <View style={styles.buttonContainer}>
                <Button 
                    title='Calcular'
                    onPress={() => navigation.navigate('Resultado', { namePerson: name, value })}
                    color="#007bff"
                />
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        marginTop: 30,
        width: '100%',
    },
});
