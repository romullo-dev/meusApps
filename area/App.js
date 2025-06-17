import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/Home';
import Quadra from './app/Quadra';
import Tri from './app/Tri';
import Circulo from './app/Circulo';
import { Ionicons } from '@expo/vector-icons';





const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}/>
        <Tab.Screen name='Quadradro' component={Quadra} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="square-outlin" size={size} color={color} />
          ),
        }}
        />
        <Tab.Screen name='Triangulo' component={Tri} 
        
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="triangle-outline" size={size} color={color} />
          ),
        }}/>
        <Tab.Screen name='Circulo' component={Circulo}
        
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ellipse-outline" size={size} color={color} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

