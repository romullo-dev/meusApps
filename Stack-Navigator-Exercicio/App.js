import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home  from "./app/Home";
import Pagamento from './app/Pagamento';
import { NavigationContainer } from '@react-navigation/native';

const Stack  = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer
    >
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ADD8E6', 
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: '#f2f2f2', 
        },
        headerTitleAlign : 'center',
      }}
    >
      
        <Stack.Screen name='Home' component={Home}options={{ title: '🏠 Lanchonete da Maria' }}
  />
        <Stack.Screen name='Pagamento' component={Pagamento}       options={{ title: '💳 Pagamento' }}
 />
      </Stack.Navigator>
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
