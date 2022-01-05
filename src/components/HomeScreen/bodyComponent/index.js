import React, {useState} from 'react';
import {
  Box,
  HStack,
  KeyboardAvoidingView,
  ScrollView,
  TextArea,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import Task from '../../Task';
import {
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export const BodyComponent = () => {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task.length > 0) {
      setTaskItems([
        ...taskItems,
        {key: Date.now(), name: task, isChecked: false},
      ]);
      setTask('');
    }
  };

  const checkTodo = id => {
    // loop through todo list and look for the the todo that matches the given id param
    // update the state using setTodos function
    setTaskItems(
      taskItems.map(todo => {
        if (todo.key === id) {
          todo.isChecked = !todo.isChecked;
        }
        return todo;
      }),
    );
  };

  const deleteAllTodo = id => {
    setTaskItems(
      taskItems.map(todo => {
        if (todo.isChecked === true) {
          return deleteTodo(id);
        }
      }),
    );
  };

  const deleteTodo = id => {
    // loop through todo list and return todos that don't match the id
    // update the state using setTodos function
    setTaskItems(
      taskItems.filter(todo => {
        return todo.key !== id;
      }),
    );
  };

  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <>
      <Box style={{height: 615}}>
        <ScrollView>
          <Box pt={5} pb={1} px={4}>
            {/*This area for adding tasks*/}
            {taskItems.map(todo => (
              <Task
                key={todo.key}
                todo={todo}
                checkTodo={checkTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </Box>
        </ScrollView>
      </Box>
      <KeyboardAvoidingView
        px={2}
        mb={5}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeWrapper}>
        <HStack>
          <TextInput
            style={styles.textInput}
            maxLength={200}
            multiline={true}
            placeholder={'Write your tasks for today'}
            value={task}
            onChangeText={value => setTask(value)}
          />
        </HStack>
        <HStack>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <Icon name="pluscircleo" size={50} color="#AD40AF" />
          </TouchableOpacity>
        </HStack>
      </KeyboardAvoidingView>
    </>
  );
};
const styles = StyleSheet.create({
  writeWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 300,
    height: 70,
  },
});
export default BodyComponent;
