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
      videoPaused: false,
      showSnap: false
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
             {/* Close video button -- THIS WILL NEED TO BE MOVED TO THE TOP OF THE SCREEN */}
             <View style={styles.closeVideo}>
               <TouchableHighlight onPress={() => this.closeVideo()} underlayColor="#DDF8F9">
                 <Image source={require("../assets/icons/X.png")} style={styles.xImage}></Image>

               </TouchableHighlight>
             </View>
             {/* Info button */}
             {!this.state.showSnap &&
             <TouchableHighlight onPress={() => this.showSnapInfo()} underlayColor="#DDF8F9">

               <Image source={require("../assets/icons/Info.png")}style={styles.infoImage}></Image>
             </TouchableHighlight>
             }
             {this.state.showSnapInfo &&
               <View style = {styles.snapInfo}>

                 <Text style = {styles.snapInfoText}>Tap to Snap</Text>
                 <Image source={require("../assets/icons/Snap_Active.png")}style={styles.snapImageInfo}></Image>
                 <Text style = {styles.snapInfoCaptionText}>Like an audience listening to spoken word, your snaps accumulate and result in a background noise of appreciation.</Text>
               </View>
             }
             {/* Pause button */}
             {!this.state.showSnap &&
             <TouchableHighlight onPress={() => this.pauseVideo()} underlayColor="#DDF8F9">
               <View>
                 {this.state.videoPaused &&
                   <Image source={require("../assets/icons/Play.png")}style={styles.pauseImage}></Image>
                 }
                 {!this.state.videoPaused &&
                   <Image source={require("../assets/icons/PauseVideo.png")}style={styles.pauseImage}></Image>
                 }
             </View>
             </TouchableHighlight>
             }
             {/* Snap button */}
             <TouchableHighlight onPress={() => this.snap()} underlayColor="#DDF8F9">
               <View>
                 {!this.state.showSnap &&
               <Image source={require("../assets/icons/Snap.png")}style={styles.snapImage}></Image>
                 }
                 {this.state.showSnap &&
                   <View style = {styles.snapEffect}>
                     <Image source={require("../assets/icons/Snap_Effect.png")}style={styles.snapEffectImage}></Image>
                     <Text style = {styles.snapEffectText}>SNAP!</Text>
                   </View>
                 }
               </View>
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
    this.setState({showSnap: true});
    setTimeout(
      () => {this.setState({showSnap: false})},
      200
    );
  }

  closeVideo() {
    // this.props.navigator.pop();
    this.setState({videoPaused: true});
    this.props.navigator.push({
        screen: 'ourstory.ReactionScreen',
        title: "Reactions",
      });
  }
}

var styles = StyleSheet.create({
  container: {

  },

  xImage: {
    position: 'absolute',
    top: -550,
    bottom: 0,
    left: 355,
  },

  snapImage: {
    position: 'absolute',
    top: -63,
    left: 340,
  },

  snapImageInfo: {
    position: 'absolute',
    top: 180,
    left: 175,
    height: 50,
    width: 40,
  },

  pauseImage: {
    position: 'absolute',
    top: -60,

    left: 175,
  },

  infoImage: {
    position: 'absolute',
    top: -60,

    left: 5,
  },

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  snapInfo: {
    position: 'absolute',
    top: -560,
    left: 0,
    backgroundColor: '#19202A',
    opacity: 0.85,
    width: 400,
    height: 500,
  },

  snapBar: {
    marginTop: 560,
  },

  snapEffect: {
    position: 'absolute',
    top: -60,

    left: 0,
  },

  snapEffectImage: {
    position: 'relative',
    //top: -60,
    //left: 0,
    width: 475,
    bottom: 0,
  },

  snapEffectText: {
    position: 'absolute',
    top: -560,
    left: 0,
    backgroundColor: '#4ECEC5',
    opacity: 0.5,
    width: 400,
    height: 700,
  },

  snapInfoText: {
    color: '#4ECEC5',
    opacity: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 150,
    fontSize: 20,
  },

  snapInfoCaptionText: {
    color: '#4ECEC5',
    opacity: 1,
    textAlign: 'center',
    fontSize: 16,
    position: 'absolute',
    top: 250,
    marginLeft: 15,
    marginRight: 35,
  },

  closeVideo: {

  }
});

AppRegistry.registerComponent('ViewVideo', () => ViewVideo);
