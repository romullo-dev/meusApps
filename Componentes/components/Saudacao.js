import { StyleSheet, Text, View } from 'react-native';

const Saudacao = () => {
    return (
        <>
            <Text style={styles.titulo}>Bem-vindo</Text>
            <Text>Fulano</Text>
        </>
    );
};
const styles = StyleSheet.create({
    titulo: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

      


export default Saudacao;