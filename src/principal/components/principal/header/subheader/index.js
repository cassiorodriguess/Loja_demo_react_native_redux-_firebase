import React, { Component } from 'react';

import { View,StyleSheet,Text } from 'react-native';

export default class SubHeader  extends Component {
  render() {
    return (
       <View style={styles.container}>

        <Text style={styles.TextMan}>Acessórios</Text>
 
        <Text style={styles.TextWoman}>Roupas</Text>
      
       </View>
    );
  }
}

const styles = StyleSheet.create({

container:{
backgroundColor:'#ffffff',  
flexDirection:'row',
justifyContent:'space-around',
alignItems:'center',
marginTop:20,
},  
TextWoman:{
fontSize:20,
borderBottomColor: '#ccc',
borderBottomWidth: 2, 
padding:6,
paddingHorizontal:15,

},
TextMan:{
fontSize:20, 
}

});