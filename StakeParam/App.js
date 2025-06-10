import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Home  from "./app/home";
import  resultado   from './app/resultado';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stake = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stake.Navigator>
        <Stake.Screen name ="Home" component = {Home} />
        <Stake.Screen name ="resultado" component = {resultado} />
      </Stake.Navigator>

    </NavigationContainer>
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
