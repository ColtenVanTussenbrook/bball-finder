import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {Formik} from 'formik';

export default class Authentication extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Bball Finder</Text>
        <Text>Login</Text>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder='Email'
              />
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder='Password'
              />
              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});