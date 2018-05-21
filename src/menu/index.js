import React from 'react';
import {View,StyleSheet,Text,ImageBackground,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { NavigationActions } from 'react-navigation';


const Menu = (props) =>{

  return(

    <ImageBackground style={styles.containerImage} source={require('./imgs/img.jpg')}>
         
        <View style={{alignItems:'flex-end'}}> 
    
          <Text style={{marginTop:-120}}
           onPress={() => {props.navigation.navigate('DrawerOpen')}
          }>
          
          <Icon name="md-menu" size={40} style={{color:'#ff3a67'}}/></Text>
    
        </View>        
        
        <View style={{alignItems:'center'}}>
          
          <Image source={require('./imgs/logo.png')} style={styles.logo}/>     
        
        </View>
        
        <View style={{marginBottom:20,alignItems:'center'}}>
        
            <Text style={styles.encontre}>Encontre seu melhor produto aqui</Text>
        
        </View>
        
         <TouchableOpacity style={styles.Entry} onPress={()=>props.navigation.navigate('Loja')}>     
        
            <Text style={{color:'#ffffff',fontSize:30}}>Confira</Text>
        
        </TouchableOpacity>

     </ImageBackground>
  
);

};

export default Menu;

