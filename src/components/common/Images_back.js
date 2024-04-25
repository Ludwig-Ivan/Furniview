/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Furnitures} from '../../constants';

const Background = () => {
  return (
    <View style={style.view}>
      <View style={style.viewimg}>
        <View style={[style.rightview, {marginRight: -180}]}>
          <Image style={style.img} source={Furnitures.mueble1} />
        </View>
        <View style={[style.rightview, {marginRight: -30}]}>
          <Image style={style.img} source={Furnitures.mueble2} />
          <Image style={style.img} source={Furnitures.mueble3} />
        </View>
        <View style={[style.rightview, {marginRight: 0}]}>
          <Image style={style.img} source={Furnitures.mueble4} />
          <Image style={style.img} source={Furnitures.mueble5} />
          <Image style={style.img} source={Furnitures.mueble6} />
        </View>
        <View style={[style.rightview, {marginRight: 0}]}>
          <Image style={style.img} source={Furnitures.mueble7} />
          <Image style={style.img} source={Furnitures.mueble8} />
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
