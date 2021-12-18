import type {Node} from 'react';
import React, {useState} from 'react';
import Task from './components/Task.js';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  Keyboard,
  Platform,
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
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.sectionContainer}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps="handled">
          {/*Main Title for Todo app */}
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}> What Should I Do Today</Text>
            <View style={styles.items}>
              {/*This area for adding tasks*/}
              {taskItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => completeTask(index)}>
                    <Task text={item} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.textContainer}>
        {/*Write task for Todo app*/}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writeWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder={'Write your tasks for today'}
            value={task}
            onChangeText={text => setTask(text)}
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
  },
  sectionContainer: {
    flex: 5,
    backgroundColor: '#E8EAED',
  },
  textContainer: {
    flex: 1,
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
    bottom: 60,
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
  },
});

export default App;
