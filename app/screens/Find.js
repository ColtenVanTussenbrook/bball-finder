/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Geolocation from '@react-native-community/geolocation';
import FindGames from '../components/FindGames';

import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';

const googleApi = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

class Find extends React.Component {
  state = {
    region: {
      latitude: null,
      longitude: null,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    zip: null,
  };
  getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        });
        this.setState({map: true});
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  getLocationZip = () => {
    fetch(googleApi + this.state.zip + '&key=' + mapsApi)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          region: {
            latitude: responseJson.results[0].geometry.location.lat,
            longitude: responseJson.results[0].geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        });
      })
      .catch(error => console.log(error)); //to catch the errors if any
  };

  handleZip = e => {
    this.setState({zip: e});
  };

  handleSubmit = () => {
    if (this.state.zip !== null) {
      this.getLocationZip();
    } else {
      Alert.alert('Please enter a valid zip');
    }
  };

  render() {
    if (this.state.region.latitude !== null) {
      return <FindGames region={this.state.region} />;
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
          onChangeText={this.handleZip}
          onSubmitEditing={this.handleSubmit}
          maxLength={5}
        />
        <Button title={'Go'} onPress={this.handleSubmit} />
        <Text>OR</Text>
        <TouchableOpacity onPress={this.getLocation}>
          <Text>Use My Location</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Find;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});