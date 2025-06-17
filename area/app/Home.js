import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
             <Image
          source={{ uri: 'https://th.bing.com/th/id/OIP.XwjxBlCRMZ_nSPogBMlJbQHaEK?rs=1&pid=ImgDetMain' }}
          style={{ width: 300, height: 200 }}         />
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
