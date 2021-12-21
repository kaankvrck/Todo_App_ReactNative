import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Task = props => {
  return (
    <View style={styles.item}>
      <Icon
        name={
          props.todo.isChecked
            ? 'checkbox-marked-circle-outline'
            : 'checkbox-blank-circle-outline'
        }
        style={styles.leading}
        size={20}
        color={'red'}
        onPress={() => props.checkTodo(props.todo.key)}
      />
      <Text style={styles.itemText}>{props.todo.name}</Text>
      <Icon
        name={'delete'}
        style={styles.deleteButton}
        size={20}
        color={'red'}
        onPress={() => props.deleteTodo(props.todo.key)}
      />
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
});

export default Task;
