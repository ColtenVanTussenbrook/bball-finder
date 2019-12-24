import React from 'react';
import View from 'react-native';
import AppNavigator from './app/AppNavigator';
import { createStackNavigator } from 'react-navigation'

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Email',
      key: 'emailasdfasdf',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
    },
  ],
}

const App = () => {
  return <AppNavigator />
}

export default App;
