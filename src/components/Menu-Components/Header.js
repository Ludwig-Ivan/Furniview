import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton} from 'react-native-paper';

const Header = ({navigation}) => {
  return (
    <View style={style.head}>
      <IconButton
        size={40}
        onPress={() => {
          navigation.goBack();
        }}
        icon={require('./Menu-Img/back.png')}
      />
      <IconButton
        size={40}
        onPress={() => {}}
        icon={require('./Menu-Img/search.png')}
      />
      <IconButton
        size={40}
        onPress={() => {}}
        icon={require('./Menu-Img/filter.png')}
      />
      <IconButton
        size={40}
        onPress={() => {}}
        icon={require('./Menu-Img/user.png')}
      />
    </View>
  );
};

const style = StyleSheet.create({
  head: {
    backgroundColor: '#D4B89E',
    top: 0,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  icons: {
    width: 50,
    height: 50,
  },

  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
