import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Authentication from '../components/Authentication';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports.js';
import { Authenticator } from 'aws-amplify-react-native'; // or 'aws-amplify-react-native';

Amplify.configure(awsconfig);

class Home extends React.Component {
  state = {isLoggedIn: false};
  render() {
    if (this.state.isLoggedIn) {
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
    } else {
      return <Authentication />
    }
    
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});