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
              <List.Accordion title="Acordion 1" id="1">
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
              </List.Accordion>
            </List.Section>

            <List.Section>
              <List.Accordion title="Acordion 2" id="2">
                <List.Item title="Item 2" />
                <List.Item title="Item 2" />
                <List.Item title="Item 2" />
                <List.Item title="Item 2" />
                <List.Item title="Item 2" />
              </List.Accordion>
            </List.Section>
            <List.Section>
              <List.Accordion title="Acordion 3" id="3">
                <List.Item title="Item 3" />
                <List.Item title="Item 3" />
                <List.Item title="Item 3" />
                <List.Item title="Item 3" />
                <List.Item title="Item 3" />
              </List.Accordion>
            </List.Section>
            <List.Section>
              <List.Accordion title="Acordion 4" id="4">
                <List.Item title="Item 4" />
                <List.Item title="Item 4" />
                <List.Item title="Item 4" />
                <List.Item title="Item 4" />
                <List.Item title="Item 4" />
              </List.Accordion>
            </List.Section>
            <List.Section>
              <List.Accordion title="Acordion 5" id="5">
                <List.Item title="Item 5" />
                <List.Item title="Item 5" />
                <List.Item title="Item 5" />
                <List.Item title="Item 5" />
                <List.Item title="Item 5" />
              </List.Accordion>
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
});
export default Filter;
