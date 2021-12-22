import type {Node} from 'react';
import React, {useState} from 'react';

import HeaderComponent from './src/components/headerComponent/index';
import BodyComponent from './src/components/bodyComponent';
import {NativeBaseProvider} from 'native-base';

const App: () => Node = () => {
  return (
    <NativeBaseProvider>
      <HeaderComponent />
      <BodyComponent />
    </NativeBaseProvider>
  );
};

export default App;
