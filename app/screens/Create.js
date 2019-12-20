import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CreateGame from '../components/CreateGame';

export default class Create extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Create a new group here</Text>
        <CreateGame />
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