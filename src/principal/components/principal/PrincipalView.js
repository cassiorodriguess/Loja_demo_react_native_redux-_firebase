import React from 'react';
import {View,ScrollView} from 'react-native';
import Header from './header/header.js';
import Promos from './promos';
import Produtos from './productList/index_products';
import Tabs from './tabs';



 const  PrincipalView = (props) => {
 
   return (
    
    <View style={{flex:1,backgroundColor:'#fff'}}> 
      <Header  logado = {props.logado}  curtidaUsuario={props.curtidaUsuario} navigation={props.navigation}/>
      <ScrollView>
      <Produtos logado ={props.logado}  navigation={props.navigation}/>
      </ScrollView>   
      <Tabs/>
     </View>
    );
  }


export default PrincipalView;  