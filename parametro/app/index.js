import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useRouter } from "expo-router";

export default function App() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
                title='Parametro URL'
                onPress={() =>
                    router.push({
                        pathname: "/usuario",
                        params: { id: 1, nome: "Maria" },
                    })
                }
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
