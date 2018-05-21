import React, { Component } from 'react';

import { View,StyleSheet,Dimensions } from 'react-native';

//Setar width no tamanho da tela

const  {width} = Dimensions.get('window');

const styles = StyleSheet.create({
container:{
backgroundColor:'#ffffff',
borderRadius:3,
marginBottom:15, 
width:(width-45)/2,  
borderBottomWidth:1,
borderColor:'#ccc',
},
image:{
width:'100%',
height:150,
resizeMode:'contain'    
},
curtir:{
width: 60,
height:60,
borderRadius:30,
backgroundColor:'#ffffff',
justifyContent:'center',
alignItems:'center',
borderColor:'#ff3a67',
}

});

export default styles