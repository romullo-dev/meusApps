import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Label from '../components/Label';




const Buscar = () => {
    return (


        <View style={styles.container}>
            <View style={styles.styleLabel}>
                <Label Label='Buscar Usuário' />
            </View>
            <StatusBar style="auto" />



        </View>



    );
};

export default Buscar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'null',
        alignItems: 'center',
        gap: 30,
        padding: 60,

    },
    imagem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    styleLabel: {

    },
    styleBotao: {

    }
});