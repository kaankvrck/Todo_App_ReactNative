import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'native-base';
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
        color={'#3700B3'}
        onPress={() => props.checkTodo(props.todo.key)}
      />
      <Text
        strikeThrough={props.todo.isChecked}
        style={styles.itemText}
        _light={{
          color: props.todo.isChecked ? 'gray.400' : 'coolGray.800',
        }}>
        {props.todo.name}
      </Text>
      <Icon
        name={'delete'}
        style={styles.deleteButton}
        size={20}
        color={'black'}
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
    marginBottom: 10,
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
    textAlign: 'left',
  },
});

export default Task;
