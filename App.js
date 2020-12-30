import {View, Text, Animated, TouchableOpacity} from 'react-native';
import React, { Component } from "react";


 class App extends Component {
  
  state={value:new Animated.ValueXY({x:0,y:0})};

   moveBall=()=> {
    Animated.timing(this.state.value,
      {
        toValue:{x:100,y:100},
        duration:1000,
        useNativeDriver:false,

      }).start() 
  };

  bounce=()=>{
    Animated.spring(this.state.value,{
      toValue:{x:100,y:90},
      bounciness:50,
      useNativeDriver:false,
    }).start()
  }

  reset=()=>{
    Animated.timing(this.state.value,{
      toValue:{x:0,y:0},
      useNativeDriver:false,
      duration:1000,
    }).start()
  }
  render() {
    const Value=this.state.value;
    return (
      <View style={{flex:1}}>  
        <Animated.View style={Value.getLayout()}>
          <View
          style={{
              width:100,
              height:100,
              borderRadius:100/2,
              backgroundColor:'blue',
          }}/>   

        </Animated.View>
        <TouchableOpacity onPress={this.moveBall}>
         <Text>HELOO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.bounce}>
         <Text>Bounce</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.reset}>
         <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;