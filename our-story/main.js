import Exponent from 'exponent';
import React from 'react';
import ListViewHome from "grid-story";
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Stories</Text>
        </View>
        <ListViewHome></ListViewHome>
        <OverlayIcons></OverlayIcons>
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

Exponent.registerRootComponent(App);
