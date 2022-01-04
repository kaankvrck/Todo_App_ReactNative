import React from 'react';
import HeaderComponent from './headerComponent';
import BodyComponent from './bodyComponent';

export const HomeScreen = ({navigation}) => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
    </>
  );
};
export default HomeScreen;
