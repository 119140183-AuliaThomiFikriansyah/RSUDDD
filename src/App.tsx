/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Roter from './Router';
const App = () => {
  return (
    <NavigationContainer>
      <Roter />
    </NavigationContainer>
  );
};

export default App;
