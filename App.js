import type {Node} from 'react';
import React, {useState} from 'react';
import Task from './components/Task.js';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  Platform,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const App: () => Node = () => {
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
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.sectionTitle}> What Should I Do Today</Text>
      </View>
      <View style={styles.sectionContainer}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps="handled">
          {/*Main Title for Todo app */}
          <View style={styles.tasksWrapper}>
            <View style={styles.items}>
              {/*This area for adding tasks*/}
              {taskItems.map(todo => (
                <Task
                  key={todo.key}
                  todo={todo}
                  checkTodo={checkTodo}
                  deleteTodo={deleteTodo}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
      {/*Write task for Todo app*/}
      <View style={styles.footer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writeWrapper}>
          <TextInput
            style={styles.textInput}
            maxLength={150}
            multiline={true}
            placeholder={'Write your tasks for today'}
            value={task}
            onChangeText={value => setTask(value)}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <Icon name="pluscircleo" size={50} color="grey" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  sectionContainer: {
    flex: 5,
    flexDirection: 'row',
    backgroundColor: '#E8EAED',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 25,
    color: 'black',
  },
  tasksWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  writeWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  textInput: {
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 300,
    height: 50,
  },
  footer: {
    height: 80,
    backgroundColor: 'red',
  },
});

export default App;
