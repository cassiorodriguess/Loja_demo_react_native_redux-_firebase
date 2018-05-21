import React from 'react';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

container:{
padding:10,
backgroundColor:'#ffffff',  
flex :1,
justifyContent:'center',
alignItems:'center'
},  
containerInput:{
flexDirection:'row',
alignItems:'center',
marginTop:35
},
Input:{
flex:1,    
marginHorizontal:20,
color:'#000000',
fontSize:20
},
icon:{
color:'#ccc'    
},
img:{
height:200,  
resizeMode:'contain'
},
/*containerInputImage:{
alignItems:'center', 
backgroundColor:'#ccc',
borderWidth:0,
height:200,
width:200,
justifyContent:'center',
borderRadius:100,
},*/
Button:{
height:70,
width:200,
borderWidth:0,
marginTop:50,
alignItems:'center',
justifyContent:'center',
borderRadius:35,
backgroundColor:'#ff3a67'
},
containerButtom:{
alignItems:'center'   
},
buttonText:{
color:'#ffffff',
fontSize:17
},
erroLogin:{
marginTop:10,
fontSize:16,
color:'#000000',
textAlign:'center'    
}
    
});

export default styles;