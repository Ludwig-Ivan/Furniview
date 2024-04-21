import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import Buscar from './Buscar';
import Filter from './Filter';

const Header = ({navigation_op, navigation}) => {
  const [bus, setBus] = useState(false);
  const [filt, setFilt] = useState(false);
  return (
    <View style={style.head}>
      <Buscar bus={bus} setBus={setBus} />
      <Filter filt={filt} setFilt={setFilt} />
      <IconButton
        size={40}
        onPress={navigation_op}
        icon={require('./Menu-Img/back.png')}
      />
      <IconButton
        size={40}
        onPress={() => {
          setBus(true);
        }}
        icon={require('./Menu-Img/search.png')}
      />
      <IconButton
        size={40}
        onPress={() => {
          setFilt(true);
        }}
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
