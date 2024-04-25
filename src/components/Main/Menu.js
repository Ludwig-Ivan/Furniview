/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../Header/Header';
import {Card} from 'react-native-paper';
import {Furnitures} from '../../constants';

const Menu = props => {
  const {navigation, cli} = props;
  const {user, password} = cli;
  console.log(user, password);

  return (
    <View style={{flex: 1}}>
      <Header
        navigation_op={() => navigation.navigate('Home')}
        navigation={navigation}
      />
      <ScrollView>
        <View style={style.category}>
          <Card
            onPress={() => {
              navigation.navigate('MenuProd');
            }}
            style={style.card}>
            <Card.Cover style={style.card_cover} source={Furnitures.mueble1} />
            <Card.Title titleStyle={style.card_title} title="Comedores" />
          </Card>
          <Card
            onPress={() => {
              navigation.navigate('MenuProd');
            }}
            style={style.card}>
            <Card.Cover style={style.card_cover} source={Furnitures.mueble2} />
            <Card.Title titleStyle={style.card_title} title="Cocinas" />
          </Card>
          <Card
            onPress={() => {
              navigation.navigate('MenuProd');
            }}
            style={style.card}>
            <Card.Cover style={style.card_cover} source={Furnitures.mueble3} />
            <Card.Title titleStyle={style.card_title} title="Recamara" />
          </Card>
          <Card
            onPress={() => {
              navigation.navigate('MenuProd');
            }}
            style={style.card}>
            <Card.Cover style={style.card_cover} source={Furnitures.mueble4} />
            <Card.Title titleStyle={style.card_title} title="Sala" />
          </Card>
          <Card
            onPress={() => {
              navigation.navigate('MenuProd');
            }}
            style={style.card}>
            <Card.Cover style={style.card_cover} source={Furnitures.mueble5} />
            <Card.Title titleStyle={style.card_title} title="Baño" />
          </Card>
          <Card
            onPress={() => {
              navigation.navigate('MenuProd');
            }}
            style={style.card}>
            <Card.Cover style={style.card_cover} source={Furnitures.mueble6} />
            <Card.Title titleStyle={style.card_title} title="Tocadores" />
          </Card>
          <Card
            onPress={() => {
              navigation.navigate('MenuProd');
            }}
            style={style.card}>
            <Card.Cover style={style.card_cover} source={Furnitures.mueble7} />
            <Card.Title titleStyle={style.card_title} title="Alacenas" />
          </Card>
          <Card
            onPress={() => {
              navigation.navigate('MenuProd');
            }}
            style={style.card}>
            <Card.Cover style={style.card_cover} source={Furnitures.mueble9} />
            <Card.Title titleStyle={style.card_title} title="Escritorio" />
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  category: {
    flex: 1,
    backgroundColor: 'rgba(56,36,36,0.65)',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    paddingBottom: 15,
  },

  card: {
    padding: 5,
    width: 160,
    height: 175,
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: '#D4B89E',
  },
  card_cover: {
    width: 150,
    height: 130,
  },
  card_title: {
    alignSelf: 'center',
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});

export default Menu;
