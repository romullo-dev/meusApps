import { StyleSheet, Text, View } from 'react-native';

const SaudacaoProps = (props) => {
    return (
        <>
            <Text style={styles.titulo}>Bem-vindo</Text>
            <Text>{props.nome}</Text>
            <Text>{props.cpf}</Text>

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

      


export default SaudacaoProps;