import {View, Text, Animated, TouchableOpacity, FlatList, StyleSheet,ScrollView,Picker, TextInput, Modal} from 'react-native';
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
      isDurationFromEnabled:false,
      date:[{dateString: "2012-03-14", day: 14, month: 3, timestamp: 1331683200000, year: 2012}],
      isDurationToEnabled:false,
      dateTo:[{dateString: "2012-03-14", day: 14, month: 3, timestamp: 1331683200000, year: 2012}],
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

          <Text style={styles.durationText}> Duration From </Text>
          <View style={styles.pickerView}> 
            <TextInput style={styles.durationFromInput} placeholder='20/12/2020' value={this.state.date.dateString}/>
            <Icon name='calendar-today' style={styles.CalendarIcon}
            size={20} color='blue' 
            onPress={()=>this.setState({isDurationFromEnabled:true})}/>
           
            <Modal style={styles.modalDurationForm}
            visible={this.state.isDurationFromEnabled}
            transparent={true}   >            
              <View style={styles.modalDurationForm}>
              <Calendar
              style={styles.calendarDetails}
              current={'2012-03-01'}
              hideExtraDays={true}
              onDayPress={(day) => {console.log('selected day', day);this.setState({isDurationFromEnabled:false,date:day})}}
              maxDate={'2012-05-30'}
              showWeekNumbers={true}
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#b6c1cd',
                textSectionTitleDisabledColor: '#d9e1e8',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 14,
                textMonthFontSize: 14,
                textDayHeaderFontSize: 14,
              }}
              enableSwipeMonths={true}/>
              </View>
            </Modal>
          </View>

          <Text style={styles.durationText}> Duration To </Text>
          <View style={styles.pickerView}> 
            <TextInput style={styles.durationFromInput} placeholder='20/12/2020' value={this.state.dateTo.dateString}/>
            <Icon name='calendar-today' style={styles.CalendarIcon}
            size={20} color='blue' 
            onPress={()=>this.setState({isDurationToEnabled:true})}/>
           
            <Modal style={styles.modalDurationForm}
            visible={this.state.isDurationToEnabled}
            transparent={true}   >            
              <View style={styles.modalDurationForm}>
              <Calendar
              style={styles.calendarDetails}
              current={'2012-03-01'}
              hideExtraDays={true}
              onDayPress={(day) => {console.log('selected day', day);this.setState({isDurationToEnabled:false,dateTo:day});}}
              maxDate={'2012-05-30'}
              showWeekNumbers={true}
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#b6c1cd',
                textSectionTitleDisabledColor: '#d9e1e8',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 14,
                textMonthFontSize: 14,
                textDayHeaderFontSize: 14,
              }}
              enableSwipeMonths={true}/>
              </View>
            </Modal>
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
    borderColor:'red',
  },
  durationText:{
    fontSize:18,
    marginBottom:10,
  },
  durationFromInput:{
    borderEndWidth:2,
    borderColor:'grey',
    height:40,
    width:110,
  },
  CalendarIcon:{
    marginTop:10,
  },
  modalDurationForm:{
    justifyContent:'center',
    alignItems:'center',
    elevation:4,
    height:150,
    marginTop:250,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'white',
    flex: .8,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding:10,
  },
  calendarDetails:{
    borderWidth: 1,
    borderColor: 'gray',
    //height: 200,
  },
});
export default App;