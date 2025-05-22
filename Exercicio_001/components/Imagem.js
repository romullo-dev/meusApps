import { StyleSheet, Text, View } from 'react-native';

const Imagem = () => {
    return (
        <>
            <Imagem source={require('./assets/Logo.png')}
                style={styles.imagem}
            />
        </>
    );
};


const styles = StyleSheet.create({
    imagem: {
        borderRadius: 90,
        height: 125,
        width: 125
    },

});

export default Imagem;
