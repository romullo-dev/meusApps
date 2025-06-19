import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import home from "./app/home";
import Senhas from "./app/Senhas";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
