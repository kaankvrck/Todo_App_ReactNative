import React from 'react';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import {Image, Text, TouchableOpacity, View} from 'react-native';

export const OnboardingScreen = ({navigation}) => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <View style={{marginTop: 60}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 30,
              color: '#20315f',
            }}>
            Welcome The Todo App
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/schedule.png')}
            style={{height: 240, width: 240}}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#AD40AF',
            padding: 20,
            width: '90%',
            borderRadius: 10,
            marginBottom: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Let's Begin To Task Manager
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};
export default OnboardingScreen;
