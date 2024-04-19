/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import Background from './Background';

const Registrarse = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function Registrar() {
    if (user.trim() !== '' || password.trim() !== '') {
      navigation.navigate('Menu', {user: user, password: password});
    } else {
      Alert.alert('Campos Vacios', 'Llene los campos para poder Registrarse');
      return;
    }
  }
  return (
    <Background>
      <View style={{flex: 1, position: 'absolute'}}>
        <Button
          buttonColor="#D4B89E"
          contentStyle={{justifyContent: 'flex-end'}}
          style={style.btn_top}
          mode="contained"
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={style.btn_reg}>INICIO</Text>
        </Button>

        <View style={style.login}>
          <View>
            <Text style={style.title}>REGISTRARSE</Text>
            <Text style={style.subtitle}>Registrarse para continuar</Text>
          </View>
          <View style={{gap: 10}}>
            <Text style={style.text_input}>Usuario</Text>
            <TextInput
              mode="flat"
              style={style.input}
              value={user}
              onChangeText={text => setUser(text)}
              textColor="#FFF"
              placeholderTextColor="#FFFD"
              underlineColor="#FFF0"
              placeholder={'Usuario'}
              activeUnderlineColor="#0000"
            />
            <Text style={style.text_input}>Contraseña</Text>
            <TextInput
              mode="flat"
              style={style.input}
              value={password}
              onChangeText={text => setPassword(text)}
              textColor="#FFF"
              placeholderTextColor="#FFFD"
              placeholder={'Contraseña'}
              underlineColor="#FFF0"
              activeUnderlineColor="#0000"
            />
          </View>
          <Button
            onPress={() => {
              navigation.navigate('Res_Contra');
            }}
            mode="text"
            style={{alignSelf: 'flex-start'}}>
            <Text style={style.record}>Recordar Contraseña</Text>
          </Button>
          <Button onPress={Registrar} buttonColor="#382424" style={style.btn}>
            <Text style={style.btn_text}>Registrarse</Text>
          </Button>
        </View>
      </View>
    </Background>
  );
};

const style = StyleSheet.create({
  login: {
    backgroundColor: '#D4B89E',
    width: 265,
    height: 405,
    borderRadius: 10,
    padding: 18.5,
    justifyContent: 'space-between',
    left: '36%',
    top: '34%',
  },

  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  text_input: {
    fontSize: 16,
    fontWeight: '900',
    color: '#000',
  },

  input: {
    backgroundColor: '#0003',
    borderRadius: 5,
    height: 50,
  },

  record: {
    fontSize: 13,
    fontWeight: '900',
    color: '#FFF',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    letterSpacing: 2,
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

  btn_top: {
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    width: 165,
    height: 55,
    justifyContent: 'center',
    top: 40,
  },

  btn_reg: {
    color: '#000',
    fontSize: 17,
    letterSpacing: 1,
    fontWeight: '900',
  },
});

export default Registrarse;
