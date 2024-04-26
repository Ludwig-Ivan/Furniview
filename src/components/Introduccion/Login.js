/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Surface, TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import Background from '../common/Background';
import Ventana_Alert from '../common/Ventana_Alert';
import {Functions} from '../../constants';
const {Vacio, Long} = Functions;

const Login = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [vm, setVM] = useState(false);
  const [title, setTitle] = useState('');
  const [parag, setParag] = useState('');

  function Ingresar() {
    if (!Vacio(user) && !Vacio(password)) {
      if (Long(user, 8) && Long(password, 6)) {
        setUser('');
        setPassword('');
        navigation.navigate('Menu', {user: user, password: password});
      } else {
        setVM(true);
        setTitle('Minimo de caracteres 8');
        setParag(
          'El usuario o la contraseña no son lo suficientemente largas ',
        );
      }
    } else {
      setVM(true);
      setTitle('Campos Vacios');
      setParag('Por favor llene todos los campos');
    }
  }

  return (
    <Background>
      <View
        style={{
          flex: 1,
          position: 'absolute',
        }}>
        <Ventana_Alert vm={vm} setVM={setVM} title={title} parag={parag} />
        <Button
          buttonColor="#D4B89E"
          contentStyle={{justifyContent: 'flex-start'}}
          style={style.btn_top}
          mode="elevated"
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={style.btn_reg}>INICIO</Text>
        </Button>
        <Surface elevation={4} style={style.login}>
          <View>
            <Text style={style.title}>INGRESAR</Text>
            <Text style={style.subtitle}>Ingresa para continuar</Text>
          </View>
          <View style={{gap: 10}}>
            <Text style={style.text_input}>Usuario</Text>
            <TextInput
              mode="flat"
              value={user}
              onChangeText={text => setUser(text)}
              style={style.input}
              placeholderTextColor="#FFFD"
              textColor="#FFF"
              underlineColor="#FFF0"
              placeholder={'Usuario'}
              activeUnderlineColor="#0000"
            />
            <Text style={style.text_input}>Contraseña</Text>
            <TextInput
              mode="flat"
              style={style.input}
              value={password}
              textColor="#FFF"
              onChangeText={text => setPassword(text)}
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
          <Button
            onPress={Ingresar}
            mode="elevated"
            buttonColor="#382424"
            style={style.btn}>
            <Text style={style.btn_text}>Ingresar</Text>
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
    height: 405,
    borderTopRightRadius: 10,
    padding: 18.5,
    justifyContent: 'space-between',
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
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    width: 165,
    height: 55,
    justifyContent: 'center',
    top: 40,
    left: 195,
  },

  btn_reg: {
    color: '#000',
    fontSize: 17,
    letterSpacing: 1,
    fontWeight: '900',
  },
});

export default Login;
