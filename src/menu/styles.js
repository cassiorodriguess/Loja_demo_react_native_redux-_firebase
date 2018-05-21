import React from 'react';
import {StyleSheet} from 'react-native';

const styles =  StyleSheet.create({

containerImage:{
flex:1,
justifyContent:'center',
padding:20
},
logo:{
resizeMode:'contain',
height:300
},
icon:{
color:'#ff3a67'    
},
entrar:{
alignItems:'center',
flexDirection:'row',
marginTop:20
},
Text:{
color:'#ffffff',
fontSize:27,  
marginHorizontal: 20,
fontWeight:'bold'
},
menuDown:{
flexDirection:'row',
marginTop:50,
alignItems:'center',
justifyContent:'space-between'
},
menuTextDown:{
flexDirection:'row',
justifyContent:'space-around',
alignItems:'center',
},
TextDown:{
color:'#ffffff',
fontSize:20,
},
Entry:{
alignItems:'center',
height:120,
justifyContent:'center',
borderWidth:3,
borderColor:'#ff3a67'
},
encontre:{
color:'#ffffff',
fontSize:30,
textAlign:'center',
fontWeight:'bold'    
}
});

export default styles;
