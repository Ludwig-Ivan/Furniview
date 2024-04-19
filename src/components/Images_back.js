/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Background = () => {
  return (
    <View style={style.view}>
      <View style={style.viewimg}>
        <View style={[style.rightview, {marginRight: -180}]}>
          <Image style={style.img} source={require('../img/mueble1.jpg')} />
        </View>
        <View style={[style.rightview, {marginRight: -30}]}>
          <Image style={style.img} source={require('../img/mueble2.jpg')} />
          <Image style={style.img} source={require('../img/mueble3.jpg')} />
        </View>
        <View style={[style.rightview, {marginRight: 0}]}>
          <Image style={style.img} source={require('../img/mueble4.jpg')} />
          <Image style={style.img} source={require('../img/mueble5.jpg')} />
          <Image style={style.img} source={require('../img/mueble6.jpg')} />
        </View>
        <View style={[style.rightview, {marginRight: 0}]}>
          <Image style={style.img} source={require('../img/mueble7.jpg')} />
          <Image style={style.img} source={require('../img/mueble8.jpg')} />
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  view: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'space-around',
    transform: [{rotate: '135deg'}],
  },

  viewimg: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 50,
  },

  rightview: {
    flexDirection: 'row',
    gap: 30,
  },

  img: {
    height: 150,
    width: 300,
    borderRadius: 20,
    transform: [{rotate: '180deg'}],
  },
});
export default Background;
