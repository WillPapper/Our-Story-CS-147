import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View
} from 'react-native';

export default class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image></Image>
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
});

AppRegistry.registerComponent('OurStory', () => OurStory);
