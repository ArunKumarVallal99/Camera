import {View, Text,TouchableOpacity, StyleSheet,Picker, TextInput, Modal} from 'react-native';
import React, { Component } from "react";
import Icon  from 'react-native-vector-icons/Feather';
import {Calendar} from 'react-native-calendars';

class PermissionApply extends Component {
    render(){
        return(
           <View style={styles.modalDate}>
                <Calendar
                style={styles.calendarDetails}
                current={new Date().getDate}
                hideExtraDays={true}
                onDayPress={(day) => {console.log('selected day', day);this.setState({isDateEnabled:false,dateApplied:day});}}
                maxDate={'2025-05-30'}
                minDate={new Date().getDate}
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
    )
    }
}