import React,{Component} from 'react'
import { StyleSheet, Text, View, Image,TouchableHighlight,TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

class DrawerContainer extends Component {

   constructor(props){
   super(props);
   console.log(props);  
   }

  render() {
    const {navigation,logado,curtidaUsuario} = this.props;
    if(logado==""){
    return (
      <View style={styles.container}>

       <View style={{backgroundColor:'#3d3c3e',alignItems:'center',height:50,justifyContent:'center'}}>
 
       <Text style={{color:'#fff',fontSize:25}}>MENU</Text>
       
       </View>
        
        <TouchableOpacity style={styles.revis} onPress={() => navigation.navigate('Loja')}>
          <Icon name="md-pricetag" size={28} style={{color:'#ff3a67'}}/>
          <Text style={styles.uglyDrawerItem}>PRODUTOS</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.revis} onPress={() => navigation.navigate('Login')}>
         <Icon name="ios-arrow-forward-outline" size={35} style={{color:'#ff3a67'}}/>
         <Text style={styles.uglyDrawerItem}>LOGIN</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.revis} onPress={() => navigation.navigate('Cadastro')}>
         <Icon name="ios-arrow-forward-outline" size={35} style={{color:'#ff3a67'}}/>
         <Text style={styles.uglyDrawerItem}>CRIE SUA CONTA</Text>
        </TouchableOpacity>          
      
     
        </View>
      
    )
  }else{
    return (
    <View style={styles.container}>

    <View style={{backgroundColor:'#3d3c3e',alignItems:'center',height:50,justifyContent:'center'}}>

    <Text style={{color:'#fff',fontSize:25}}>{logado}</Text>
    
    </View>
    
    <TouchableOpacity style={styles.revis} onPress={() => false}>
     <Icon name="md-settings" size={28} style={{color:'#ff3a67'}}/>
     <Text style={styles.uglyDrawerItem}>CONTA</Text>
    </TouchableOpacity>
     
     <TouchableOpacity style={styles.revis} onPress={() =>false}>
      <Icon name="md-heart" size={35} style={{color:'#ff3a67'}}/>
      <Text style={styles.uglyDrawerItem}>{curtidaUsuario} </Text>
     </TouchableOpacity>
    
     <TouchableOpacity style={styles.revis} onPress={() =>navigation.navigate('Loja')}>
      <Icon name="md-pricetag" size={35} style={{color:'#ff3a67'}}/>
      <Text style={styles.uglyDrawerItem}>PRODUTOS</Text>
     </TouchableOpacity>
     

    </View>
    );
  }
}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212022',
  },
  uglyDrawerItem: {
    fontSize: 18,
    color: '#fff',
    borderBottomWidth:0,
    borderColor:'#494949',
    padding:25,
    flex:1   
  },
  revis:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:20
   },
   divLine:{
   borderBottomWidth:1 ,
   borderColor:'#494949',
   }
})

const mapStateToProps = state => ({
logado:state.ReducerLogin.logado ,
curtidaUsuario:state.ReducerPrincipal.curtidaUsuario 
});


export default connect(mapStateToProps,null)(DrawerContainer);



