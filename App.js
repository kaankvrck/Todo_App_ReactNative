import type {Node} from 'react';
import React from 'react';
import Task from './components/Task.js';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.sectionContainer}>
          {/*Main Title for Todo app */}
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}> What Should I Do Today</Text>
            <View style={styles.items}>
              {/*This area for adding tasks*/}
              <Task text={'Hi'} />
              <Task text={'Naber'} />
            </View>
          </View>
        </View>
      </ScrollView>
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
  items: {},
});

export default App;
