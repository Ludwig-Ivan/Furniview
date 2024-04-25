/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Button, List, Modal, Portal} from 'react-native-paper';

const Filter = ({filt, setFilt}) => {
  return (
    <Portal>
      <Modal
        visible={filt}
        onDismiss={() => {
          setFilt(false);
        }}
        style={{flex: 1, justifyContent: 'flex-start'}}>
        <View style={style.content}>
          <ScrollView>
            <List.Section>
              <View style={style.list}>
                <List.Accordion
                  style={style.acord}
                  titleStyle={{color: '#FFF'}}
                  title="Acordion 1"
                  id="1">
                  <List.Item
                    style={[style.items, {borderBottomWidth: 1}]}
                    title="Item 1"
                  />
                  <List.Item
                    style={[style.items, {borderBottomWidth: 1}]}
                    title="Item 1"
                  />
                  <List.Item
                    style={[style.items, {borderBottomWidth: 1}]}
                    title="Item 1"
                  />
                  <List.Item
                    style={[style.items, {borderBottomWidth: 1}]}
                    title="Item 1"
                  />
                  <List.Item style={style.items} title="Item 1" />
                </List.Accordion>
              </View>
            </List.Section>

            <List.Section>
              <View style={style.list}>
                <List.Accordion
                  style={style.acord}
                  titleStyle={{color: '#FFF'}}
                  title="Acordion 2"
                  id="2">
                  <List.Item
                    style={[style.items, {borderBottomWidth: 1}]}
                    title="Item 1"
                  />
                  <List.Item
                    style={[style.items, {borderBottomWidth: 1}]}
                    title="Item 1"
                  />
                  <List.Item
                    style={[style.items, {borderBottomWidth: 1}]}
                    title="Item 1"
                  />
                  <List.Item
                    style={[style.items, {borderBottomWidth: 1}]}
                    title="Item 1"
                  />
                  <List.Item style={style.items} title="Item 1" />
                </List.Accordion>
              </View>
            </List.Section>
            <List.Section>
              <View style={style.list}>
                <List.Accordion
                  style={style.acord}
                  titleStyle={{color: '#FFF'}}
                  title="Acordion 3"
                  id="3">
                  <List.Item
                    style={[style.items, {borderBottomWidth: 1}]}
                    title="Item 1"
                  />
                  <List.Item
                    style={[style.items, {borderBottomWidth: 1}]}
                    title="Item 1"
                  />
                  <List.Item
                    style={[style.items, {borderBottomWidth: 1}]}
                    title="Item 1"
                  />
                  <List.Item
                    style={[style.items, {borderBottomWidth: 1}]}
                    title="Item 1"
                  />
                  <List.Item style={style.items} title="Item 1" />
                </List.Accordion>
              </View>
            </List.Section>
            <List.Section>
              <View style={style.list}>
                <List.Accordion
                  style={style.acord}
                  titleStyle={{color: '#FFF'}}
                  title="Acordion 4"
                  id="4">
                  <List.Item
                    style={[style.items, {borderBottomWidth: 1}]}
                    title="Item 1"
                  />
                  <List.Item
                    style={[style.items, {borderBottomWidth: 1}]}
                    title="Item 1"
                  />
                  <List.Item
                    style={[style.items, {borderBottomWidth: 1}]}
                    title="Item 1"
                  />
                  <List.Item
                    style={[style.items, {borderBottomWidth: 1}]}
                    title="Item 1"
                  />
                  <List.Item style={style.items} title="Item 1" />
                </List.Accordion>
              </View>
            </List.Section>
            <Button>
              <Text>Filtrar</Text>
            </Button>
          </ScrollView>
        </View>
      </Modal>
    </Portal>
  );
};
const style = StyleSheet.create({
  content: {
    height: 350,
    backgroundColor: '#D4B89E',
    padding: 10,
  },

  list: {
    borderRadius: 10,
    overflow: 'hidden',
  },

  items: {
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  acord: {
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
});
export default Filter;
