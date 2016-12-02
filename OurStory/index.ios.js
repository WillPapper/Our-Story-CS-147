/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ListViewHome from './grid/ListViewHome';
import MapViewHome from './map/MapViewHome';
import MapViewAnimatedMarkers from './map/MapViewAnimatedMarkers';
import MapViewFitToSuppliedMarkers from './map/MapViewFitToSuppliedMarkers';

export default class OurStory extends Component {
  render() {
    return (
      <MapViewFitToSuppliedMarkers style={styles.map}></MapViewFitToSuppliedMarkers>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Stories
          </Text>
        </View>
        <View style={styles.body}>
          {/*<ListViewHome></ListViewHome>*/}
          {/*<OverlayIcons></OverlayIcons>*/}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    width: 360,
    marginTop: 0,
    flex: 0,
    backgroundColor: '#293240',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    marginTop: 80,
    color: '#4ECDC4',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  tempMargin: {
    marginTop: 200,
  }
});

AppRegistry.registerComponent('OurStory', () => OurStory);
