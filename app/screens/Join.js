import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Join extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Join a new group here</Text>
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