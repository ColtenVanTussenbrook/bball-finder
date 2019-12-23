import React from 'react';
import View from 'react-native';
import AppNavigator from './app/AppNavigator';
import { createStackNavigator } from 'react-navigation'
import Authentication from './app/Authentication';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from 'aws-amplify-react-native'; // or 'aws-amplify-react-native';

Amplify.configure(awsconfig);

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
  return (
    <>
      {/* <Authenticator usernameAttributes="email" signUpConfig={signUpConfig} /> */}
      <AppNavigator />
    </>
  )
}

export default App;
