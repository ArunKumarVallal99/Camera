import React, { Component } from 'react'
import { StyleSheet, View, Alert ,TouchableOpacity,Text,ToastAndroid,CameraRoll} from 'react-native'
import { RNCamera } from 'react-native-camera'
class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          ref={ref => {
            this.camera = ref
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> Take Picture  </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

takePicture = async () => {
  if (this.camera) {
    const options = { quality: 0.5, base64: true };
    const data = await this.camera.takePictureAsync(options).then(data => {
      ToastAndroid.show(data.uri, ToastAndroid.SHORT);
      CameraRoll.saveToCameraRoll(data.uri);
      console.log(data);
    //console.log(data.uri);
    //this.saveImage(data.uri)
  })
}
};
saveImage = async filePath => {
  try {
    // set new image name and filepath
    const newImageName = `${moment().format('DDMMYY_HHmmSSS')}.jpg`;
    const newFilepath = `${dirPicutures}/${newImageName}`;
    // move and save image to new filepath
    const imageMoved = await moveAttachment(filePath, newFilepath);
    console.log('image moved', imageMoved);
  } catch (error) {
    console.log('Catch'+error);
  }
};

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
})

export default App