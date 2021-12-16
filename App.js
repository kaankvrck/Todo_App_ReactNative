import type {Node} from 'react';
import React from 'react';
import Task from './components/Task.js';
import {
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
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.sectionContainer}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/*Main Title for Todo app */}
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}> What Should I Do Today</Text>
            <View style={styles.items}>
              {/*This area for adding tasks*/}
              <Task text={'Hi'} />
              <Task text={'Naber'} />
            </View>
          </View>
        </ScrollView>
        {/*Write task for Todo app*/}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writeWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder={'Write your tasks for today'}
          />
          <TouchableOpacity>
            <View style={styles.addButton}>
              <Text>+</Text>
            </View>
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
    addingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});

export default App;
