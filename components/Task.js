import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.itemButton} />
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.itemRight} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemButton: {
    height: 24,
    width: 24,
    backgroundColor: '#55bef6',
    opacity: 0.4,
    borderRadius: 8,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  itemRight: {
    width: 12,
    height: 12,
    borderColor: '#5583f6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
