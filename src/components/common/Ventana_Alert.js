import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';

const Ventana_Alert = ({vm, setVM, title, parag}) => {
  return (
    <Portal>
      <Modal visible={vm} onDismiss={() => setVM(false)}>
        <View style={style.modal}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.parag}>{parag}</Text>
        </View>
      </Modal>
    </Portal>
  );
};
const style = StyleSheet.create({
  modal: {
    backgroundColor: '#D4B89E',
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '50%',
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#000',
  },
  parag: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
export default Ventana_Alert;
