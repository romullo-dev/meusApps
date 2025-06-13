import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';



const Home = () => {
    const [coca, setCoca ] = useState(0);
    const [batata, setBatata ] = useState(0);
    const [hamg, setHamg ] = useState(0);
    const [total, seTotal] = useState(0);


    return (
        <View style={styles.container}>
            <Text style={styles.name} >Consumo</Text>
            <View style={styles.label}>
                <Image source={{ uri: 'https://th.bing.com/th/id/R.9ddd505bf89a46acac75dcf902f6e436?rik=w%2bEfZuu3fxxMpA&pid=ImgRaw&r=0' }}
                    style={{ width: 90, height: 90, borderRadius: 15 }} />
                <TouchableOpacity style={styles.botao} onPress={()=> setCoca(coca+1)} >
                    <Text style={styles.botaoTexto}>+</Text>
                </TouchableOpacity>
                <Text>{coca}</Text>
                <TouchableOpacity style={styles.botao} onPress={()=> setCoca(coca-1)}>
                    <Text style={styles.botaoTexto}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.label}>
                <Image source={{ uri: 'https://okdiario.com/img/recetas/2016/08/30/patatas-fritas-1.jpg' }}
                    style={{ width: 90, height: 90, borderRadius: 15 }} />
                <TouchableOpacity style={styles.botao} onPress={()=> setBatata(batata+1)} >
                    <Text style={styles.botaoTexto}>+</Text>
                </TouchableOpacity>
                <Text>{batata}</Text>
                <TouchableOpacity style={styles.botao} onPress={()=> setBatata(batata-1)} >
                    <Text style={styles.botaoTexto}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.label}>
                <Image source={{ uri: 'https://th.bing.com/th/id/R.8946e10a2dc06335176e66a895ebc187?rik=HkaV4oVqHS7bHQ&riu=http%3a%2f%2fimages.media-allrecipes.com%2fuserphotos%2f960x960%2f3757723.jpg&ehk=aFAF%2buIjH1v%2fJNECcIK41A8z255yDgsvBlm4u2pjzNE%3d&risl=&pid=ImgRaw&r=0' }}
                    style={{ width: 90, height: 90, borderRadius: 15 }} />
                <TouchableOpacity style={styles.botao}onPress={()=> setHamg(hamg+1)}>
                    <Text style={styles.botaoTexto}>+</Text>
                </TouchableOpacity>
                <Text>{hamg}</Text>
                <TouchableOpacity style={styles.botao} onPress={()=> setHamg(hamg-1)}>
                    <Text style={styles.botaoTexto}>-</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.totalView}>
                <Text>R$ </Text>


            </View>

            

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
    botao: {
        backgroundColor: '#ADD8E6',
        width: 50,
        height: 45,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        color: '#fff'
    },

    label: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
        padding: 10,
    },
    totalView :{
        backgroundColor: '#ADD8E6',
    },
});
