import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Cabecalho = ({titulo}) => {
    return(
        <>
            <Text style={styles.texto}>{titulo}</Text>
        </>
    );
};

const styles = StyleSheet.create({
    texto: {
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Cabecalho;