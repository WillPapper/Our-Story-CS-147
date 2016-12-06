import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Text
} from 'react-native';
import Video from 'react-native-video';

export default class ViewVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSnapInfo: false,
      videoPaused: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Video source={require('../assets/videos/example-story.mp4')}
               ref={(ref) => {
                this.player = ref
                // Later to trigger fullscreen
                // To set video position in seconds (seek)
                // this.player.seek(0)
               }}                             // Store reference
               rate={1.0}                     // 0 is paused, 1 is normal.
               volume={1.0}                   // 0 is muted, 1 is normal.
               muted={false}                  // Mutes the audio entirely.
               paused={this.state.videoPaused}                 // Pauses playback entirely.
               resizeMode="cover"             // Fill the whole screen at aspect ratio.
               repeat={false}                  // Repeat forever.
               playInBackground={false}       // Audio continues to play when app entering background.
               playWhenInactive={false}       // [iOS] Video continues to play when control or notification center are shown.
               progressUpdateInterval={250.0} // [iOS] Interval to fire onProgress (default to ~250ms)
               onLoadStart={this.loadStart}   // Callback when video starts to load
               onLoad={this.setDuration}      // Callback when video loads
               onProgress={this.setTime}      // Callback every ~250ms with currentTime
               onEnd={this.onEnd}             // Callback when playback finishes
               onError={this.videoError}      // Callback when video cannot be loaded
               style={styles.backgroundVideo} />
           <View style={styles.snapBar}>
             {/* Info button */}
             <TouchableHighlight onPress={() => this.showSnapInfo()} underlayColor="#DDF8F9">
               <Image source={require("../assets/icons/Home.png")}></Image>
             </TouchableHighlight>
             {this.state.showSnapInfo &&
               <View>
                 <Image></Image>
                 <Text>This is info on the snap!</Text>
               </View>
             }
             {/* Pause button */}
             <TouchableHighlight onPress={() => this.pauseVideo()} underlayColor="#DDF8F9">
               <View>
                 {this.state.videoPaused &&
                   <Image source={require("../assets/icons/Home.png")}></Image>
                 }
                 {!this.state.videoPaused &&
                   <Image source={require("../assets/icons/Home_Active.png")}></Image>
                 }
             </View>
             </TouchableHighlight>
             {/* Snap button */}
             <TouchableHighlight onPress={() => this.snap()} underlayColor="#DDF8F9">
               <Image source={require("../assets/icons/Home.png")}></Image>
             </TouchableHighlight>
          </View>
        </View>
    );
  }

  showSnapInfo() {
    // Toggle visibility of the styles
    // Check this as an example: https://stackoverflow.com/questions/32347605/change-button-color-onpress-toggle-functionality-react-native
    // Code drawn from: https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react-js
    console.log("showSnapInfo " + this.state.showSnapInfo);
    console.log(this.state)
    oppositeState = !this.state.showSnapInfo;
    this.setState({showSnapInfo: oppositeState});
    console.log(this.state)
  }

  pauseVideo() {
    oppositeState = !this.state.videoPaused;
    this.setState({videoPaused: oppositeState});
    console.log(this.state.videoPaused)
  }

  snap() {

  }
}

var styles = StyleSheet.create({
  container: {

  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  snapBar: {

  },
});

AppRegistry.registerComponent('ViewVideo', () => ViewVideo);
