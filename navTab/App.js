import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Usuario from './app/Usuario';
import Home from './app/Home';
import Configuracao from './app/Configuracao';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle : {backgroundColor : '#6200ea'},
          tabBarActiveBackgroundColor : '#6200eb',
          headerStyle : {backgroundColor : '#6200eb'},
        }}
      >
        <Tab.Screen name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
            title : 'Home',
          }}
        />
        <Tab.Screen name='Usuario' component={Usuario}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-add" size={size} color={color} />
            ),
            title : 'Usuario',
          }}
        />
        <Tab.Screen name='Configuracao' component={Configuracao}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="construct" size={size} color={color} />
            ),
            title : 'Configuraçao',

          }}
        />
      </Tab.Navigator>
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
