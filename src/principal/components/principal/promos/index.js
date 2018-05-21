import React, { Component } from 'react';

import { View,StyleSheet,Text,Image } from 'react-native';


export default class Promos extends Component {
  render() {
    return (
      <View>

      <View style={styles.container}>    
          <Text style={styles.titulo}>Relógios</Text>
          <Text style={styles.desc}>40% de desconto á vista</Text>
          <Image style={styles.img} source={require('../imagens/promo2.png')}/>
    </View>
        
    </View>
    );
  }
}

const styles = StyleSheet.create({
img:{
width:120,
height:120,    
},
container:{
flexDirection:'row',
marginTop:30,
justifyContent:'space-around',
alignItems:'center',
backgroundColor:'#ffbcaf',
},
titulo:{
fontSize:25,
color:'#fff'    
},
desc:{
color:'#000',
fontSize:17   
},
container2:{
flexDirection:'row',
alignItems:'center',
marginTop:10,
backgroundColor:'#ffebee',
}
});
