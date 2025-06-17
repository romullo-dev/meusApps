import 'react-native-gesture-handler'; // IMPORTANTE: sempre no topo
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './app/home';
import Autor from './app/autor';
import Editora from './app/editora';
import Genero from './app/genero';
import Livros from './app/livros';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        icon={({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />}
        onPress={() => props.navigation.navigate('home')}
      />
      <DrawerItem
        label="Autor"
        icon={({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />}
        onPress={() => props.navigation.navigate('autor')}
      />
      <DrawerItem
        label="Editora"
        icon={({ color, size }) => <Ionicons name="book-outline" size={size} color={color} />}
        onPress={() => props.navigation.navigate('editora')}
      />
      <DrawerItem
        label="Gênero"
        icon={({ color, size }) => <Ionicons name="albums-outline" size={size} color={color} />}
        onPress={() => props.navigation.navigate('genero')}
      />
      <DrawerItem
        label="Livros"
        icon={({ color, size }) => <Ionicons name="library-outline" size={size} color={color} />}
        onPress={() => props.navigation.navigate('livros')}
      />

      <DrawerItem
        label="Sair"
        icon={({ color, size }) => <Ionicons name="log-out-outline" size={size} color={color} />}
        onPress={() => {
          alert('Você saiu do app!');
        }}
      />
    </DrawerContentScrollView>
  );
}

function CenteredScreen({ children }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{children}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor: '#6200ee' },
          headerTintColor: '#fff',
          drawerActiveBackgroundColor: '#bb86fc',
          drawerActiveTintColor: '#000',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: { marginLeft: -20, fontSize: 15 },
        }}
      >
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="autor" component={Autor} />
        <Drawer.Screen name="editora" component={Editora} />
        <Drawer.Screen name="genero" component={Genero} />
        <Drawer.Screen name="livros" component={Livros} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
