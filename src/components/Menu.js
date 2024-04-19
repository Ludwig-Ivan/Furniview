import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

const Menu = props => {
  const {navigation, cli} = props;
  const {user, password} = cli;
  console.log(user, password);
  return (
    <View>
      <Button onPress={() => navigation.goBack()}>Regresar</Button>
      <Text>Hola</Text>
      <Text>{'Usuario: ' + user}</Text>
      <Text>{'Password: ' + password}</Text>
    </View>
  );
};

export default Menu;
