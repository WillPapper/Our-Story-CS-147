'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
} from 'react-native';
import Camera from 'react-native-camera';

export default class RecordVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimeHours: "00",
      currentTimeMinutes: 0,
      currentTimeSeconds: 0,
      currentTimeDisplay: "00:00:00",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.currentTimeDisplay}</Text>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          type={Camera.constants.Type.front}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
        <View style={styles.teleprompterContainer}>
          <TextInput style={styles.teleprompter} placeholder={"This is a teleprompter example"} onChangeText={(text) => this.setState({text})}>
          </TextInput>
        </View>
      </View>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
    this.updateTimer();
  }
  updateTimer() {
    setInterval(
      () => {
        var currentTimeSeconds = Number.parseInt(this.state.currentTimeSeconds, 10) + 1;
        var currentTimeMinutes = Number.parseInt(this.state.currentTimeMinutes, 10);
        var currentTimeHours = this.state.currentTimeHours;
        var currentTimeDisplay = "" + this.state.currentTimeHours;
        if (currentTimeSeconds == 60) {
          currentTimeSeconds = 0;
          currentTimeMinutes += 1
        }
        currentTimeDisplay == currentTimeHours;
        if (currentTimeMinutes < 10) {
          currentTimeMinutes = "0" + currentTimeMinutes;
          currentTimeDisplay += ":" + currentTimeMinutes;
        }
        else {
          currentTimeDisplay += ":" + currentTimeMinutes;
        }
        if (currentTimeSeconds < 10) {
          currentTimeSeconds = "0" + currentTimeSeconds;
          currentTimeDisplay += ":" + currentTimeSeconds;
        }
        else {
          currentTimeDisplay += ":" + currentTimeSeconds;
        }
        console.log("currentTimeDisplay: " + currentTimeDisplay)
        this.setState({currentTimeDisplay: currentTimeDisplay, currentTimeSeconds: currentTimeSeconds, currentTimeMinutes: currentTimeMinutes});
      },
      1000
    );
  }
  // Use the photo as a thumbnail
  // Set a timer to simulate the record time and place the timer in the top menu bar
  // TimeAgo will work probably. Set the timestamp in TimeAgo to the time of the button press: https://www.npmjs.com/package/react-native-timeago
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  teleprompter: {
    height: 40
  }
});

AppRegistry.registerComponent('RecordVideo', () => RecordVideo);
