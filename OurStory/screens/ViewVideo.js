import React, { Component } from 'react';

export default class ViewVideo extends Component {
  render() {
    return (
      <Video source={{uri: 'https://doc-0s-5o-docs.googleusercontent.com/docs/securesc/ifhot9j0bnq51t1kdo02lntvau0ng1rm/04k9ifk3j28utjcto0selsojbe8uh4of/1480816800000/14132123247478813179/11356378469260161532/0B4_8jxNJHJhoQm1Va0tyT0k1bVU?e=download&nonce=0qqkcbt8c4o56&user=11356378469260161532&hash=al9smqgumcs65vuoh6bvpoa81om1de01'}}   // Can be a URL or a local file.
             ref={(ref) => {
               this.player = ref
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


// Later to trigger fullscreen
this.player.presentFullscreenPlayer()

// To set video position in seconds (seek)
this.player.seek(0)

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
