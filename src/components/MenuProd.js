/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Image, Pressable} from 'react-native';
import Header from './Menu-Components/Header';
import {Card, Text, Title} from 'react-native-paper';
import Image_Prod from './Menu-Components/ImageProd';

const contenido = (can, navigation, setVM, setImg) => {
  let dir = [
    require('../img/mueble1.jpg'),
    require('../img/mueble2.jpg'),
    require('../img/mueble3.jpg'),
    require('../img/mueble4.jpg'),
    require('../img/mueble5.jpg'),
    require('../img/mueble6.jpg'),
    require('../img/mueble7.jpg'),
    require('../img/mueble8.jpg'),
    require('../img/mueble9.jpg'),
    require('../img/mueble1.jpg'),
  ];
  let cards = [];
  for (let i = 0; i < can; i++) {
    cards.push(
      <Card
        key={i}
        style={style.card}
        contentStyle={style.card_content}
        onPress={() => navigation.navigate('Producto', dir[i])}>
        <View style={style.card_content}>
          <Pressable
            onPress={() => {
              setImg(dir[i]);
              setVM(true);
            }}>
            <Image style={style.card_cover} source={dir[i]} />
          </Pressable>
          <View style={{justifyContent: 'space-around'}}>
            <Title style={style.card_title}>Comedores</Title>
            <Text style={style.card_title}>$100000</Text>
            <Text style={style.card_title}>Sahuayo</Text>
            <Text style={style.card_title}>Db. America</Text>
          </View>
        </View>
      </Card>,
    );
  }
  return cards;
};

const MenuProd = ({navigation}) => {
  const [vm, setVM] = useState(false);
  const [img, setImg] = useState('');
  return (
    <View style={{flex: 1}}>
      <Header
        navigation_op={() => navigation.goBack()}
        navigation={navigation}
      />

      <ScrollView>
        <View style={style.category}>
          {contenido(6, navigation, setVM, setImg)}
        </View>
      </ScrollView>

      <Image_Prod vm={vm} setVM={setVM} img={img} />
    </View>
  );
};
const style = StyleSheet.create({
  category: {
    padding: 10,
    backgroundColor: 'rgba(56,36,36,0.65)',
    gap: 10,
    minHeight: 546,
  },

  card: {
    padding: 8,
    backgroundColor: '#D4B89E',
  },
  card_cover: {
    width: 150,
    height: 130,
    borderRadius: 10,
  },
  card_title: {
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  card_content: {
    flexDirection: 'row',
    gap: 15,
  },
});
export default MenuProd;
