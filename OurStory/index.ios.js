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

export default class OurStory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Stories
          </Text>
        </View>
        <View style={styles.body}>
          {/*<MapViewHome></MapViewHome>*/}
          <ListViewHome></ListViewHome>
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
  tempMargin: {
    marginTop: 200,
  }
});

AppRegistry.registerComponent('OurStory', () => OurStory);
