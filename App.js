/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import Main from './src/components/Introduccion/Main';
import Login from './src/components/Introduccion/Login';
import Registrarse from './src/components/Introduccion/Registrarse';
import {PaperProvider} from 'react-native-paper';
import Res_contra from './src/components/Main/Res_Contra';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from './src/components/Main/Menu';
import Welcome from './src/components/Introduccion/Welcome';
import MenuProd from './src/components/Main/MenuProd';
import Producto from './src/components/Main/Producto';
import Perfil from './src/components/Header/Perfil';

const Stack = createStackNavigator();

function Main_Screen({navigation}) {
  return <Main navigation={navigation} />;
}

function Login_Screen({navigation}) {
  return <Login navigation={navigation} />;
}

function Registrarse_Screen({route, navigation}) {
  return <Registrarse navigation={navigation} cli={route.params} />;
}

function Res_Contra_Screen({navigation}) {
  return <Res_contra navigation={navigation} />;
}

function Menu_Screen({route, navigation}) {
  return <Menu navigation={navigation} cli={route.params} />;
}

function Welcome_Screen({navigation}) {
  return <Welcome navigation={navigation} />;
}

function Menu_Prod_Screen({navigation}) {
  return <MenuProd navigation={navigation} />;
}

function Prod_Screen({navigation, route}) {
  return <Producto navigation={navigation} img={route.params} />;
}

function Perfil_Screen({navigation}) {
  return <Perfil navigation={navigation} />;
}

const App = () => {
  return (
    <PaperProvider>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              transitionSpec: {
                open: {animation: 'timing', config: {duration: 5}},
                close: {animation: 'timing', config: {duration: 0}},
              },
            }}>
            <Stack.Screen
              options={{title: 'Main', headerShown: false}}
              name="Home"
              component={Main_Screen}
            />
            <Stack.Screen
              options={{title: 'Login', headerShown: false}}
              name="Login"
              component={Login_Screen}
            />
            <Stack.Screen
              options={{title: 'Registrarse', headerShown: false}}
              name="Registrarse"
              component={Registrarse_Screen}
            />
            <Stack.Screen
              options={{title: 'Restablecer Contraseña', headerShown: false}}
              name="Res_Contra"
              component={Res_Contra_Screen}
            />
            <Stack.Screen
              options={{title: 'Menu', headerShown: false}}
              name="Menu"
              component={Menu_Screen}
            />

            <Stack.Screen
              options={{title: 'Welcome', headerShown: false}}
              name="Welcome"
              component={Welcome_Screen}
            />

            <Stack.Screen
              options={{title: 'MenuProd', headerShown: false}}
              name="MenuProd"
              component={Menu_Prod_Screen}
            />

            <Stack.Screen
              options={{title: 'Producto', headerShown: false}}
              name="Producto"
              component={Prod_Screen}
            />

            <Stack.Screen
              options={{title: 'Perfil', headerShown: false}}
              name="Perfil"
              component={Perfil_Screen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </PaperProvider>
  );
};

export default App;
