/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Background from '../common/Background';
import {Button} from 'react-native-paper';
import Item from '../common/Item';

const Perfil = ({navigation}) => {
  return (
    <Background>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={style.content}>
          <View style={style.content_info}>
            <View>
              <Text style={style.title}>Perfil</Text>
              <Text style={style.info}>ID: {'--------------'}</Text>
            </View>
            <View>
              <Text style={style.info}>Usuario</Text>
              <Text style={style.info}>{'----------------'}</Text>
            </View>
            <View>
              <Text style={style.info}>Email</Text>
              <Text style={style.info}>{'----------------'}</Text>
            </View>
          </View>
          <View style={style.tbl}>
            <Text style={style.title_tbl}>Reservaciones</Text>
            <ScrollView>
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </ScrollView>
          </View>
          <Button
            onPress={() => {
              navigation.goBack();
            }}
            buttonColor="#382424"
            style={style.btn}>
            <Text style={style.btn_text}>Regresar</Text>
          </Button>
        </View>
      </View>
    </Background>
  );
};

const style = StyleSheet.create({
  content: {
    backgroundColor: '#D4B89E',
    height: '80%',
    width: '90%',
    padding: 20,
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
  },
  btn: {
    height: 50,
    width: 226,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  btn_text: {
    color: '#FFF',
    fontWeight: '900',
    fontSize: 16,
    letterSpacing: 2,
  },
  tbl: {
    borderWidth: 1,
    borderRadius: 10,
    maxHeight: 200,
    overflow: 'hidden',
  },

  title_tbl: {
    fontWeight: '900',
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  info: {
    fontWeight: '900',
    fontSize: 17,
  },

  content_info: {
    justifyContent: 'space-between',
    height: '40%',
  },
});

export default Perfil;
