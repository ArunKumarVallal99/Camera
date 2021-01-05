import {View, Text, Animated, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator,LayoutAnimation, Platform, UIManager} from 'react-native';
import React, { Component } from "react";
import Icon  from 'react-native-vector-icons/MaterialIcons';

 class App extends Component {
  constructor(props) {
    super(props);
    this.state={
    datas:[
      {id:'1',title:'Veg Briyani',des:'Biryani also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan.'
      ,isEnable:false},
      {id:'2',title:'Pizzas',des:'dakhsakhsadasd',isEnable:false},
      {id:'3',title:'Drink',des:'kjjhasdgasdasj',isEnable:false},
      {id:'4',title:'Deserets',des:'gsadfsadjgsadkusd',isEnable:false},

    ],  
    //expand:false,
  };
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
}
  isEnabled=({item,index})=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const data=this.state.datas;
    const target=data[index]; 
    target.isEnable=!target.isEnable;
    data[index]=target;
    this.setState({datas:data})
    console.log(this.state.datas[index])    
  }
  renderItems=({item,index})=>{
    console.log(item.isEnable)
    return(
    <View style={styles.containers}>

      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={()=>this.isEnabled({item,index})} style={styles.row}>
          <Text style={styles.itemText}>{item.title}</Text>
          <Icon name={item.isEnable? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='grey' />
        </TouchableOpacity>
      </View>
            <View style={styles.desView}/>
             {item.isEnable && (
              <View style={styles.desText}>
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
            extraData={this.state}
          />
        </View>
      );
    }
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:'#a4c639',
    justifyContent:'center',
    paddingTop:100,
    flex:1,
  },
  itemContainer:{
    flexDirection:'row',
    padding:10,
    backgroundColor:'white',
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
  desView:{
    height:1,
    color: 'white',
    width:'100%'
  },
  desText:{
  backgroundColor: 'grey',
  padding:16,
  },
});

export default App;