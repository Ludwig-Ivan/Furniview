/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import Buscar from './Menu-Components/Buscar';
import Filter from './Menu-Components/Filter';
import Perfil from './Menu-Components/Perfil';

const Tab = createMaterialTopTabNavigator();

const Menu = props => {
  const {navigation, cli} = props;
  const {user, password} = cli;
  console.log(user, password);

  function SearchIcon() {
    return <Image style={style.icon} source={require('../img/search.png')} />;
  }

  function FilterIcon() {
    return <Image style={style.icon} source={require('../img/filter.png')} />;
  }

  function PerfilIcon() {
    return <Image style={style.icon} source={require('../img/user.png')} />;
  }

  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 60,
            justifyContent: 'center',
          },
        }}>
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: SearchIcon,
          }}
          name="Buscar"
          component={Buscar}
        />
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: FilterIcon,
          }}
          name="Filtrar"
          component={Filter}
        />
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: PerfilIcon,
          }}
          name="Perfil"
          component={Perfil}
        />
      </Tab.Navigator>
      <Button onPress={() => navigation.goBack()}>Regresar</Button>
    </View>
  );
};

const style = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
  },
});

export default Menu;
