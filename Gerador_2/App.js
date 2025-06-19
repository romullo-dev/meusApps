import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import home from "./app/home";
import Senhas from "./app/Senhas";
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer
    screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Senhas') {
              iconName = focused ? 'lock-closed' : 'lock-closed-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#392de9',
          tabBarInactiveTintColor: 'gray',
        })}
    
    >
      <Tab.Navigator>
        <Tab.Screen name="home" component={home} />
        <Tab.Screen name="Senhas" component={Senhas} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
