/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Searchbar} from 'react-native-paper';

const Buscar = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={style.content}>
      <Searchbar
        inputStyle={{color: '#FFF'}}
        onChangeText={text => setSearch(text)}
        placeholder="Buscar"
        placeholderTextColor="rgba(255,255,255,0.8)"
        textAlign="center"
        value={search}
        style={style.serachbar}
        icon={require('./Menu-Img/search.png')}
        clearIcon={require('./Menu-Img/delete.png')}
        cursorColor={'#FFF'}
        selectionColor={'rgba(0,0,0,0.3)'}
      />
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    height: 70,
    backgroundColor: '#D4B89E',
    justifyContent: 'center',
    padding: 10,
  },
  serachbar: {
    height: 50,
    backgroundColor: 'rgba(0,0,0,0.18)',
    borderRadius: 15,
  },
});

export default Buscar;
