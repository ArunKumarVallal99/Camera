import {View, Text, Animated, TouchableOpacity, FlatList, StyleSheet,ScrollView,Picker, TextInput, Modal} from 'react-native';
import React, { Component } from "react";
import Icon  from 'react-native-vector-icons/Feather';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import LeaveApply from './src/LeaveApply';
import PermissionApply from './src/PermissionApply';

class App extends Component {
render(){
  return(<PermissionApply/>)
}
}
export default App;