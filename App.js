import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Video from 'react-native-video';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      pausedText: 'Play',
      hideControls: false,
    };
    this.video = Video;
  }

  onPressBtnPlay() {
    var pausedText = '';
    if(!this.state.paused){
      pausedText = 'Play';
    }
    else {
      pausedText = 'Pause';
    } 
    this.setState({ paused: !this.state.paused, pausedText: pausedText });
  }
  onPressVideo() {
    if(this.state.hideControls){
      this.setState({hideControls: false});
      this.timeoutHandle = setTimeout(()=>{
        this.setState({hideControls: true});
      }, 8000);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          style={styles.fullScreen}
          onPress={() => this.onPressVideo()}>
          <Video
            ref={(ref: Video) => { this.video = ref }}
            source={{ uri: 'https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4' }} 
           // source={require('./videos/mala.mp4')}
            style={styles.fullScreen}
            paused={this.state.paused}
           
          />
        </TouchableWithoutFeedback>
        {
          !this.state.hideControls ?
          (
            <View style={styles.controls}>
              <View style={styles.generalControls}>
                <View style={styles.playControl}>
                  <Text onPress={() => this.onPressBtnPlay()}>{this.state.pausedText}</Text>
                </View>         
              </View>
            </View>
          ) : (null)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  playButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  controls: {
    backgroundColor: 'white',
    opacity: 0.7,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  playControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});