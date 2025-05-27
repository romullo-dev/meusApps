import{ useRouter} from "expo-router";

import { Text, View , Button} from 'react-native';
 
const Index = () => {
    const router = useRouter ();
    return (
        <View>
            <Text>Index</Text>
            <Button title = "Voltar" onPress={() => router.push("/settings") }  />
        </View>

    );
};

export default Index;

