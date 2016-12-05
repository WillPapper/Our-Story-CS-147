import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import Video from 'react-native-video';

export default class ViewVideo extends Component {
  render() {
    return (
      <Video source={require('../assets/videos/example-story.mp4')}
             ref={(ref) => {
              this.player = ref
              // Later to trigger fullscreen
              // To set video position in seconds (seek)
              this.player.seek(0)
             }}                             // Store reference
             rate={1.0}                     // 0 is paused, 1 is normal.
             volume={1.0}                   // 0 is muted, 1 is normal.
             muted={false}                  // Mutes the audio entirely.
             paused={false}                 // Pauses playback entirely.
             resizeMode="cover"             // Fill the whole screen at aspect ratio.
             repeat={true}                  // Repeat forever.
             playInBackground={false}       // Audio continues to play when app entering background.
             playWhenInactive={false}       // [iOS] Video continues to play when control or notification center are shown.
             progressUpdateInterval={250.0} // [iOS] Interval to fire onProgress (default to ~250ms)
             onLoadStart={this.loadStart}   // Callback when video starts to load
             onLoad={this.setDuration}      // Callback when video loads
             onProgress={this.setTime}      // Callback every ~250ms with currentTime
             onEnd={this.onEnd}             // Callback when playback finishes
             onError={this.videoError}      // Callback when video cannot be loaded
             style={styles.backgroundVideo} />
    );
  }
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

AppRegistry.registerComponent('ViewVideo', () => ViewVideo);
