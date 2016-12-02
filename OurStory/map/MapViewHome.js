import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default class MapViewHome extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MapView style={styles.map}
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
      >
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 10,
  },
});

// App registration and rendering
AppRegistry.registerComponent('MapViewHome', () => MapViewHome);
