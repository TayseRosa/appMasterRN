import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { StateProvider } from './src/contexts/StateContext';
import AuthStack from './src/stacks/AuthStack';

export default () => {
  return (
    <StateProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </StateProvider>
  );
};
