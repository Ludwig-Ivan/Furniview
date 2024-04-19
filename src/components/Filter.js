import React from 'react';
import {View, StyleSheet} from 'react-native';

const Filter = () => {
  return <View style={style.colorOverlay} />;
};

const style = StyleSheet.create({
  colorOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(56, 36, 36, 0.4)',
  },
});

export default Filter;
