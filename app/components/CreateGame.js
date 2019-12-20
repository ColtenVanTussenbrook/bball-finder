import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {Formik} from 'formik';

export const CreateGame = () => (
  <Formik
    initialValues={{groupName: ''}}
    onSubmit={values => console.log(values)}>
    {({handleChange, handleBlur, handleSubmit, values}) => (
      <View>
        <TextInput
          onChangeText={handleChange('groupName')}
          onBlur={handleBlur('groupName')}
          value={values.groupName}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

export default CreateGame;