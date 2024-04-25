/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import Header from '../Header/Header';
import {Button, DataTable} from 'react-native-paper';
import Image_Prod from './ImageProd';
import Ventana_Alert from '../common/Ventana_Alert';

const Producto = ({navigation, img}) => {
  const [vm, setVM] = useState(false);
  const [va, setVA] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(56,36,36,0.65)'}}>
      <Header
        navigation_op={() => navigation.goBack()}
        navigation={navigation}
      />
      <Image_Prod vm={vm} setVM={setVM} img={img} />
      <Ventana_Alert
        vm={va}
        setVM={setVA}
        title={'Reservacion Exitosa'}
        parag={'El mueble se reservo con exito'}
      />
      <View style={style.contenedor}>
        <Pressable onPress={() => setVM(true)}>
          <Image style={style.img} source={img} />
        </Pressable>
        <View style={style.info}>
          <Text style={style.title}>Tocador Minimalista</Text>
          <DataTable style={style.table}>
            <DataTable.Row style={style.row}>
              <DataTable.Cell style={{}}>Precio</DataTable.Cell>
              <DataTable.Cell style={style.cell} numeric>
                $100000
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={style.row}>
              <DataTable.Cell style={{}}>Dimesiones</DataTable.Cell>
              <DataTable.Cell style={style.cell} numeric>
                100m x 100m
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={style.row}>
              <DataTable.Cell>Sucursales</DataTable.Cell>
              <DataTable.Cell style={style.cell} numeric>
                -------------
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={style.row}>
              <DataTable.Cell>Empresa</DataTable.Cell>
              <DataTable.Cell style={style.cell} numeric>
                -------------
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={style.row}>
              <DataTable.Cell>Material</DataTable.Cell>
              <DataTable.Cell style={style.cell} numeric>
                -------------
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={[style.row, {borderBottomWidth: 0}]}>
              <DataTable.Cell>Disponibilidad</DataTable.Cell>
              <DataTable.Cell style={style.cell} numeric>
                100000
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>

          <Button
            onPress={() => setVA(true)}
            buttonColor="#382424"
            style={style.btn}>
            <Text style={style.btn_text}>Reservar</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  img: {
    height: 190,
    width: '100%',
  },
  contenedor: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#D4B89E',
  },
  info: {
    padding: 20,
    gap: 20,
  },

  table: {
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },

  row: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    minHeight: 30,
  },

  cell: {
    borderLeftWidth: 1,
  },

  btn: {
    height: 50,
    width: 226,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  btn_text: {
    color: '#FFF',
    fontWeight: '900',
    fontSize: 16,
    letterSpacing: 2,
  },

  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#000',
  },
});

export default Producto;
