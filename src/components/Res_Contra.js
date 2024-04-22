/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Surface, TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import Background from './Background';

const Res_Contra = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [npassword, setNpassword] = useState('');
  const [code, setCode] = useState('');

  return (
    <Background>
      <View
        style={{
          flex: 1,
          top: -20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={style.login}>
          <View>
            <Text style={style.title}>RESTABLECER CONTRASEÑA</Text>
          </View>
          <View style={{gap: 5}}>
            <Text style={style.text_input}>Usuario</Text>
            <TextInput
              mode="flat"
              style={style.input}
              placeholderTextColor="#FFFD"
              underlineColor="#FFF0"
              value={user}
              onChangeText={text => setUser(text)}
              placeholder={'Usuario'}
              activeUnderlineColor="#0000"
            />
            <Text style={style.text_input}>Contraseña Antigua</Text>
            <TextInput
              mode="flat"
              style={style.input}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholderTextColor="#FFFD"
              placeholder={'Contraseña Antigua'}
              underlineColor="#FFF0"
              activeUnderlineColor="#0000"
            />
            <Text style={style.text_input}>Contraseña Nueva</Text>
            <TextInput
              mode="flat"
              style={style.input}
              value={npassword}
              onChangeText={text => setNpassword(text)}
              placeholderTextColor="#FFFD"
              placeholder={'Contraseña Nueva'}
              underlineColor="#FFF0"
              activeUnderlineColor="#0000"
            />
            <Text style={style.text_input}>Codigo</Text>
            <TextInput
              mode="flat"
              style={style.input}
              value={code}
              onChangeText={text => setCode(text)}
              placeholderTextColor="#FFFD"
              placeholder={'Codigo'}
              underlineColor="#FFF0"
              activeUnderlineColor="#0000"
            />
          </View>
          <Surface
            style={{
              width: 226,
              borderRadius: 20,
            }}
            elevation={2}>
            <Button
              onPress={() => {
                navigation.goBack();
              }}
              buttonColor="#382424"
              style={style.btn}>
              <Text style={style.btn_text}>Restablecer</Text>
            </Button>
          </Surface>
        </View>
      </View>
    </Background>
  );
};
const style = StyleSheet.create({
  login: {
    backgroundColor: '#D4B89E',
    width: 265,
    height: 555,
    borderRadius: 10,
    padding: 18,
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#382424',
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
export default Res_Contra;
