import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Icons} from '../../constants';

const Item = () => {
  return (
    <View style={style.item}>
      <View>
        <Text style={style.info}>Mueble</Text>
        <Text style={style.info}>$--------</Text>
      </View>
      <View>
        <Text style={style.info}>Dtb -----</Text>
        <Text style={style.info}>Suc -----</Text>
      </View>
      <Pressable
        onPress={() => {
          console.log('delete');
        }}>
        <Image style={style.img} source={Icons.del} />
      </Pressable>
    </View>
  );
};
const style = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.18)',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  img: {
    height: 20,
    width: 25,
  },

  info: {
    fontSize: 16,
  },
});
export default Item;
