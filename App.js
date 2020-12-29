import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import VideoRecorder from 'react-native-beautiful-video-recorder';
export default class App extends Component {
  start = () => {
  // 30 seconds
    this.videoRecorder.open({ maxLength: 30 },(data) => {
      console.log('captured data', data);
    });
  }
  
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.start}>
          <Text>Start</Text>
        </TouchableOpacity>
        <VideoRecorder ref={(ref) => { this.videoRecorder = ref; }} />
      </View>
    );
  }
}
