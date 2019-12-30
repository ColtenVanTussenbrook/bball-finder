import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {Formik} from 'formik';
import {withNavigation} from 'react-navigation';

class Authentication extends React.Component {
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
          <Text>Not a member?</Text>
          <Button
              title="Create a free account"
              onPress={() => this.props.navigation.navigate('Account')}
            />
        </View>
      );
  }
}

export default withNavigation(Authentication);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});