import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import home from './app/home';
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
          component={home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
            title : 'Home',
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