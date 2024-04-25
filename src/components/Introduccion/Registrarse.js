/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Surface, TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import Background from '../common/Background';
import Ventana_Alert from '../common/Ventana_Alert';

const Registrarse = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [vm, setVM] = useState(false);

  function Registrar() {
    if (user.trim() !== '' && password.trim() !== '') {
      navigation.navigate('Menu', {user: user, password: password});
    } else {
      setVM(true);
      return;
    }
  }
  return (
    <Background>
      <View style={{flex: 1, position: 'absolute'}}>
        <Ventana_Alert
          vm={vm}
          setVM={setVM}
          title={'Campos Vacios'}
          parag={'Por favor llene los campos para ingresar'}
        />

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

        <Surface elevation={4} style={style.login}>
          <View>
            <Text style={style.title}>REGISTRARSE</Text>
            <Text style={style.subtitle}>Registrarse para continuar</Text>
          </View>
          <ScrollView>
            <View style={{gap: 10, marginVertical: 20}}>
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
                keyboardType="visible-password"
                style={style.input}
                value={password}
                onChangeText={text => setPassword(text)}
                textColor="#FFF"
                placeholderTextColor="#FFFD"
                placeholder={'Contraseña'}
                underlineColor="#FFF0"
                activeUnderlineColor="#0000"
              />
              <Text style={style.text_input}>Email</Text>
              <TextInput
                keyboardType="email-address"
                mode="flat"
                style={style.input}
                value={email}
                onChangeText={text => setEmail(text)}
                textColor="#FFF"
                placeholderTextColor="#FFFD"
                placeholder={'Email'}
                underlineColor="#FFF0"
                activeUnderlineColor="#0000"
              />
              <Text style={style.text_input}>Telefono</Text>
              <TextInput
                mode="flat"
                style={style.input}
                value={tel}
                onChangeText={text => setTel(text)}
                textColor="#FFF"
                placeholderTextColor="#FFFD"
                placeholder={'Telefono'}
                underlineColor="#FFF0"
                activeUnderlineColor="#0000"
              />
            </View>
          </ScrollView>

          <Button onPress={Registrar} buttonColor="#382424" style={style.btn}>
            <Text style={style.btn_text}>Registrarse</Text>
          </Button>
        </Surface>
      </View>
    </Background>
  );
};

const style = StyleSheet.create({
  login: {
    backgroundColor: '#D4B89E',
    width: 265,
    height: 505,
    borderTopLeftRadius: 10,
    padding: 18.5,
    justifyContent: 'space-between',
    left: '36%',
    top: '11%',
    gap: 15,
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
