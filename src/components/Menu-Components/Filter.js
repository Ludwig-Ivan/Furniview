import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, List} from 'react-native-paper';

const Filter = () => {
  return (
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
