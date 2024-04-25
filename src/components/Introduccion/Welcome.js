/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Background from '../common/Background';
import {Logos} from '../../constants';
import Animated, {
  Easing,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const Welcome = ({navigation}) => {
  const fontSize = useSharedValue(32);
  const width = useSharedValue(300);
  const height = useSharedValue(460);

  useEffect(() => {
    fontSize.value = withDelay(
      1500,
      withTiming(fontSize.value - 32, {
        duration: 5000,
        easing: Easing.ease,
      }),
    );
    width.value = withDelay(
      5000,
      withTiming(width.value - 300, {
        duration: 5000,
        easing: Easing.sin,
      }),
    );
    height.value = withDelay(
      5000,
      withTiming(height.value - 460, {
        duration: 5000,
        easing: Easing.sin,
      }),
    );
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 10000);
    return () => clearTimeout(timer);
  });

  return (
    <Background>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View style={[style.main, {width, height}]}>
          <View style={{gap: 80, alignItems: 'center'}}>
            <Animated.Image
              style={[style.logo, {height, width}]}
              source={Logos.logo1}
            />
            <Animated.Text style={[style.titulo, {fontSize}]}>
              BIENVENIDO
            </Animated.Text>
          </View>
        </Animated.View>
      </View>
    </Background>
  );
};
const style = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4B89E',
    maxWidth: 300,
    maxHeight: 460,
    borderRadius: 10,
  },

  logo: {
    maxWidth: 150,
    maxHeight: 150,
    borderRadius: 100,
  },

  titulo: {
    fontStyle: 'italic',
    fontWeight: '900',
    color: '#382424',
  },
});
export default Welcome;
