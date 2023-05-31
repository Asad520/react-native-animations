import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {MyStack} from './src/navigation';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#212F3C" />
        <MyStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
