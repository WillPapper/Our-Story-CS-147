import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
} from 'react-native';

export default class MapStanford extends Component {
  render() {
    return (


        <Image source={{uri: 'https://raw.githubusercontent.com/wpapper/Our-Story-CS-147/master/OurStory/assets/map/image/map.png'}} style={styles.image}></Image>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#293240',
  },
  header: {
    flex: 1,
    width: 360,
    marginTop: 0,
    backgroundColor: '#293240',
  },
  image: {
    flex: 1,
    height: 500,
        backgroundColor: '#293240',
  },
});

AppRegistry.registerComponent('OurStory', () => OurStory);
