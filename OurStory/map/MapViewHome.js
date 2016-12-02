import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import MapView from 'react-native-maps';

class MapViewHome extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MapView
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

// App registration and rendering
AppRegistry.registerComponent('MapViewHome', () => MapViewHome);
