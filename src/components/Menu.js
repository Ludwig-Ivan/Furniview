/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from './Menu-Components/Header';
import {Card} from 'react-native-paper';

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
            <Card.Cover
              style={style.card_cover}
              source={require('../img/mueble1.jpg')}
            />
            <Card.Title titleStyle={style.card_title} title="Comedores" />
          </Card>
          <Card style={style.card}>
            <Card.Cover
              style={style.card_cover}
              source={require('../img/mueble2.jpg')}
            />
            <Card.Title titleStyle={style.card_title} title="Comedores" />
          </Card>
          <Card style={style.card}>
            <Card.Cover
              style={style.card_cover}
              source={require('../img/mueble3.jpg')}
            />
            <Card.Title titleStyle={style.card_title} title="Comedores" />
          </Card>
          <Card style={style.card}>
            <Card.Cover
              style={style.card_cover}
              source={require('../img/mueble4.jpg')}
            />
            <Card.Title titleStyle={style.card_title} title="Comedores" />
          </Card>
          <Card style={style.card}>
            <Card.Cover
              style={style.card_cover}
              source={require('../img/mueble5.jpg')}
            />
            <Card.Title titleStyle={style.card_title} title="Comedores" />
          </Card>
          <Card style={style.card}>
            <Card.Cover
              style={style.card_cover}
              source={require('../img/mueble6.jpg')}
            />
            <Card.Title titleStyle={style.card_title} title="Comedores" />
          </Card>
          <Card style={style.card}>
            <Card.Cover
              style={style.card_cover}
              source={require('../img/mueble7.jpg')}
            />
            <Card.Title titleStyle={style.card_title} title="Comedores" />
          </Card>
          <Card style={style.card}>
            <Card.Cover
              style={style.card_cover}
              source={require('../img/mueble8.jpg')}
            />
            <Card.Title titleStyle={style.card_title} title="Comedores" />
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
