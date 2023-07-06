import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TodoListScreen } from '../Components/Pages';

const Stack = createNativeStackNavigator();

const options = { headerShown: false }

const MainNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TodoListScreen" component={TodoListScreen} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigationContainer;