import React from 'react';
// import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';

import {StyleSheet, Text, View} from 'react-native';

export default class FindGames extends React.Component {
  render() {
    if (this.props.region) {
      return <MapView style={styles.map} region={this.props.region} />;
    } else {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});