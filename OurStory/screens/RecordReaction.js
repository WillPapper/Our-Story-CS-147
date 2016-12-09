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
  Image,
} from 'react-native';
import Camera from 'react-native-camera';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

export default class RecordVideoReaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimeHours: "00",
      currentTimeMinutes: 0,
      currentTimeSeconds: 0,
      currentTimeDisplay: "00:00:00",
      showTeleprompter: false,
      recording: false,
      publish: false,
      confirmCloseShowed: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.timeStyle}>{this.state.currentTimeDisplay}</Text>
       {/* Teleprompter button */}
       <TouchableHighlight onPress={() => this.showTeleprompter()} underlayColor="#DDF8F9">
         <Image source={require("../assets/icons/Compose.png")}style={styles.composeImage}></Image>
       </TouchableHighlight>
       {this.state.showTeleprompter &&
        <View style={styles.teleprompterContainer}>
          <AutoGrowingTextInput style={styles.teleprompter} placeholder={"Start typing to use the teleprompter"} onChangeText={(text) => this.setState({text})}>
          </AutoGrowingTextInput>
        </View>
      }
       {this.state.publish &&
       <View>
         <TouchableHighlight onPress={() => this.closeVideo()} underlayColor="#DDF8F9">
           <Image source={require("../assets/icons/X.png")} style={styles.xImage}></Image>
         </TouchableHighlight>
       </View>
       }
       {this.state.confirmCloseShowed &&
         <View style={styles.confirmClose}>
           <Text style = {styles.confirmCloseText}>Are you sure you want to delete this video?</Text>
           <TouchableHighlight onPress={() => this.closeVideo()} underlayColor="#DDF8F9">
             <Text style = {styles.confirmCloseText}>YES</Text>
           </TouchableHighlight>
           <TouchableHighlight onPress={() => this.cancelClose()} underlayColor="#DDF8F9">
             <Text style = {styles.confirmCloseText}>NO</Text>
           </TouchableHighlight>
         </View>
       }
       {/* Recording button -- replace the text with the image and make it visible */}
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          type={Camera.constants.Type.front}>

         {this.state.recording &&
           <TouchableHighlight onPress={this.takePicture.bind(this)}>
             <Image source={require("../assets/icons/Record.png")}style={styles.recordImage} onPress={this.takePicture.bind(this)}></Image>

           </TouchableHighlight>

         }
         {!this.state.recording &&
            <TouchableHighlight onPress={this.takePicture.bind(this)}>
           <Image source={require("../assets/icons/Pause.png")}style={styles.recordImage}></Image>
           </TouchableHighlight>
         }


        </Camera>
       {/* Publish screen */}
       {this.state.publish &&
        <View style={styles.publishContainer}>
         <TouchableHighlight onPress={() => this.publish()} underlayColor="#DDF8F9">
           <Image source={require("../assets/icons/Publish.png")}style={styles.publishButton}></Image>
         </TouchableHighlight>
          <TextInput style={styles.publishInput} placeholder={"Story from Stanford, CA"} onChangeText={(text) => this.setState({text})}>
          </TextInput>
        </View>
       }
      </View>
    );
  }

  takePicture() {
    if (!this.state.recording) {
      this.camera.capture()
        .then((data) => console.log(data))
        .catch(err => console.error(err));
      this.updateTimer();
      this.setState({recording: true});
    }
    else if (this.state.recording) {
      this.setState({publish: true})
    }
  }
  updateTimer() {
    // TODO: Make the timer stop when recording stops
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
        if (this.state.publish == false) {
          this.setState({currentTimeDisplay: currentTimeDisplay, currentTimeSeconds: currentTimeSeconds, currentTimeMinutes: currentTimeMinutes});
        }
      },
      1000
    );
  }

  showTeleprompter() {
    var oppositeState = !this.state.showTeleprompter;
    this.setState({showTeleprompter: oppositeState});
  }

  publish() {
    this.props.navigator.switchToTab({
      tabIndex: 0
    });
  }

  closeVideo() {
    if (!this.state.confirmCloseShowed) {
      this.setState({confirmCloseShowed: true});
    }
    else if (this.state.confirmCloseShowed) {
      this.props.navigator.switchToTab({
        tabIndex: 0
      });
    }
  }
  cancelClose() {
    this.setState({confirmCloseShowed: false});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#293240',
    height: 200,
    position: 'relative',
    top: 0,
    paddingTop: 20,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  recordImage: {
    position: 'absolute',
    bottom: 20,

    left: -35,
  },
  composeImage: {
    position: 'relative',
    bottom: 20,

    left: 350,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 300,
    color: '#000',
    padding: 10,
    margin: 40,
    opacity: 0.05, //button is hidden, but is clickable
    position: 'absolute',
    bottom: 30,
    left: 120,
    fontSize: 25,
  },

  teleprompter: {
    height: 700,
    color: '#FFFFFF',
    fontStyle: 'italic',
    width: 300,
    backgroundColor: 'transparent',


  },

  teleprompterContainer: {
      backgroundColor: '#293240',
    backgroundColor: 'transparent',
  },

  timeStyle: {
      color: '#4ECEC5',
      textAlign: 'center',
      fontSize: 20,
      marginTop: 10,
  },

  xImage: {
    position: 'relative',
    bottom: 40,

    left: 5,
  },

  publishContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#4ECEC5',
    width: 400,
    height: 100,
  },

  confirmCloseText: {
    color: '#4ECEC5',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
    fontSize: 20,
  },

  publishButton: {
    position: 'relative',
    left: 300,
    bottom: -20,
  },
  publishInput: {
    color: '#FFFFFF',
    position: 'relative',
    bottom: 5,
    fontSize: 24,


  },
  closeVideo: {

  },
  confirmClose: {
    height: 700,
    backgroundColor: '#293240',
    opacity: 0.6,
  },

});

AppRegistry.registerComponent('RecordVideoReaction', () => RecordVideoReaction);
