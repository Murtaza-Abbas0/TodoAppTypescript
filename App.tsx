import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigationContainer } from './src/NavigationStack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <MainNavigationContainer />
  );
}

export default App;