import type {Node} from 'react';
import React from 'react';

import {NativeBaseProvider} from 'native-base';
import HomeScreen from './src/components/HomeScreen/homeScreen';

const App: () => Node = () => {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
};

export default App;
