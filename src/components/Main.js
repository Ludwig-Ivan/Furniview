/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import Background from './Background';

const Main = ({navigation}) => {
  return (
    <Background>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={style.main}>
          <View style={{gap: 10}}>
            <Image
              style={style.logo}
              source={require('../img/LogoMuebleria.jpeg')}
            />
            <Text style={style.titulo}>FURNIVIEW</Text>
          </View>
          <View style={{gap: 20}}>
            <Button
              onPress={() => navigation.navigate('Login')}
              buttonColor="#382424"
              style={style.btn}>
              <Text style={style.btn_text}>Ingresar</Text>
            </Button>
            <Button
              onPress={() => {
                navigation.navigate('Registrarse');
              }}
              buttonColor="#382424"
              style={style.btn}>
              <Text style={style.btn_text}>Registrarse</Text>
            </Button>
          </View>
        </View>
      </View>
    </Background>
  );
};

const style = StyleSheet.create({
  main: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#D4B89E',
    width: 300,
    height: 460,
    borderRadius: 10,
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  titulo: {
    fontStyle: 'italic',
    fontSize: 32,
    fontWeight: '900',
    color: '#382424',
  },

  btn: {
    height: 50,
    width: 226,
    justifyContent: 'center',
  },

  btn_text: {
    color: '#FFF',
    fontWeight: '900',
    fontSize: 16,
    letterSpacing: 2,
  },
});

export default Main;
