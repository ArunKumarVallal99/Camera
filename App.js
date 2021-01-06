import {View, Text, Animated, TouchableOpacity, FlatList, StyleSheet,ScrollView,Picker} from 'react-native';
import React, { Component } from "react";
import Icon  from 'react-native-vector-icons/MaterialIcons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      casualLeave:12,
      sickLeave:12,
      leaveType:'Select Leave Type',
    };
  }  

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.insideContainer}>

          <View style={styles.totalDayContainer} >
            <Text style={styles.totalDayText}>Sick Leave: {this.state.sickLeave}</Text>
            <Text style={styles.totalDayText}>Casual Leave: {this.state.casualLeave}</Text>
          </View>

          <View style={styles.pickerView}>
            <Text style={styles.pickerText}>Leave Type</Text>
            <Picker style={styles.pickers}
            selectedValue={this.state.leaveType}
             onValueChange={(itemValue, itemIndex) => {this.setState({leaveType:itemValue});console.log(this.state.leaveType)}}>
            <Picker.Item label='Select Leave Type' value='default'/>
            <Picker.Item label="Sick Leave" value="sick" />
            <Picker.Item label="Casual Leave" value="casual"/>
            </Picker>
          </View>


        </View>
      </View>
      
      
    );
  }
}

const styles= StyleSheet.create({
  container:{
   padding:20,
   justifyContent:'center',
   alignItems:'center',
   alignContent:'center',
   flex:1,
  },
  insideContainer:{
    elevation:5,
    backgroundColor:'white',
    width:350,
    padding:20,
  },
  totalDayContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    elevation:4,
    backgroundColor:'white',
    borderRadius:5,
    marginBottom:10,
    borderWidth:.5,
  },
  totalDayText:{
    marginRight:20,
    fontSize:18,
    fontWeight:'bold',
  },
  pickerView:{
    flexDirection:'row',
  },
  pickerText:{
    marginRight:20,
    fontSize:18,
    marginTop:10,
  },
  pickers:{
    height: 50, 
    width: 200,
    borderWidth:1,
    borderColor:'blue',
  },
});
export default App;