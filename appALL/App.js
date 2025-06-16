import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import tela_stack1 from './app/telas_stack/tela_stack1';
import tela_stack2 from './app/telas_stack/tela_stack2';
import telas_tabs1 from './app/telas_tabs/telas_tabs1';
import telas_tabs2 from './app/telas_tabs/telas_tabs2';
import Home from './app/Home';


import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function TelaStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='TelaStack1' component={tela_stack1} />
      <Stack.Screen name='TelaStack2' component={tela_stack2} />
    </Stack.Navigator>

  );
}



function TelaTab () {
  return(
    <Tab.Navigator>
      <Tab.Screen name='TAB1' component={telas_tabs1} />
      <Tab.Screen name='TAB2' component={TelaStack} />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>

      <Drawer.Navigator>
      <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='telas_tabs' component={TelaTab} />
        
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

