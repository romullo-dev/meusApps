import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import home from './app/home';


import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>

      <Drawer.Navigator>
      <Drawer.Screen name='home' component={home} />
        <Drawer.Screen name='telas_tabs' component={TelaTab} />
        
      </Drawer.Navigator>
    </NavigationContainer>

  );
}