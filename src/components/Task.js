import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {HStack, Text} from 'native-base';
import ReadMore from 'react-native-read-more-text';

const Task = props => {
  const giveAlert = () =>
    Alert.alert(
      'Delete Task',
      'This will remove your task. This action cannot be reserved. Deleted data can not be recovered.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Delete', onPress: () => props.deleteTodo(props.todo.key)},
      ],
    );
  return (
    <HStack style={styles.item}>
      <HStack space={'3'}>
        <Icon
          name={
            props.todo.isChecked
              ? 'checkbox-marked-circle-outline'
              : 'checkbox-blank-circle-outline'
          }
          size={20}
          color={'#AD40AF'}
          onPress={() => props.checkTodo(props.todo.key)}
        />
      </HStack>
      <HStack space={'3'} style={{maxWidth: '80%'}}>
        <ReadMore numberOfLines={2}>
          <Text
            strikeThrough={props.todo.isChecked}
            style={styles.itemText}
            _light={{
              color: props.todo.isChecked ? 'gray.400' : 'coolGray.800',
            }}>
            {props.todo.name}
          </Text>
        </ReadMore>
      </HStack>
      <HStack space={'3'}>
        <Icon
          name={'delete'}
          size={20}
          color={'#20315f'}
          onPress={() => giveAlert()}
        />
      </HStack>
    </HStack>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f5f5f6',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    textAlign: 'left',
  },
});

export default Task;
