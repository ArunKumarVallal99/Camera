import {View, Text, Animated, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import React, { Component } from "react";
import Icon  from 'react-native-vector-icons/MaterialIcons';

 class App extends Component {
 
  state={
    datas:[
      {id:'1',title:'Veg Briyani',des:'dbjhdbadsnjdsa'},
      {id:'2',title:'Pizzas',des:'dakhsakhsadasd'},
      {id:'3',title:'Drink',des:'kjjhasdgasdasj'},
      {id:'4',title:'Deserets',des:'gsadfsadjgsadkusd'},

    ],
    expand:false,
  };
  isEnabled=()=>{
    this.setState({expand:! this.state.expand});
  }
  renderItems=({item})=>{
    const expands= this.state.expand;
    console.log(expands)
    return(
    <View style={styles.container}>

      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={()=>this.isEnabled} style={styles.row}>
         <Text style={styles.itemText}>{item.title}</Text>
          <Icon name={this.state.expand ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={10} color='grey' />
        </TouchableOpacity>
      </View>
      <View style={styles.parentHr}/>
            {this.state.expand && (
              <View style={styles.child}>
                <Text>{item.des}</Text>    
              </View>)
            }
    </View>
    )
  };
  render(){
    return(
        <View style={styles.container}>
            <FlatList 
            data={this.state.datas}
            renderItem={this.renderItems}
            />
        </View>
      );
    }
}
const styles=StyleSheet.create({
  container:{
   // backgroundColor:'green',
   justifyContent:'center',
  },
  itemContainer:{
    flexDirection:'row',
    padding:10,
    //elevation:5,
    backgroundColor:'white',
    borderRadius:10,
    borderColor:'black',
    marginBottom:5,
    height:56,
    paddingLeft:25,
    paddingRight:18,
    alignItems:'center',
  },
  row:{
    flexDirection:'row',
  },
  itemText:{
    width:310,
    fontSize:14,
    fontWeight:'bold',
    color:'grey',
  },
  parentHr:{
    height:1,
    color: 'white',
    width:'100%'
  },
  child:{
  backgroundColor: 'grey',
  padding:16,
  },
});

export default App;