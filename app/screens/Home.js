import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Find A Crew"
          onPress={() => this.props.navigation.navigate('Find')}
        />
        <Button
          title="Create A Crew"
          onPress={() => this.props.navigation.navigate('Create')}
        />
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