import React, { Component } from 'react';
import { View,TextInput,TouchableOpacity,Text,Image,TouchableHighlight,ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const  LoginControllerView = props =>{

  autenticarUsuario = () => {

  const {email,senha} = props;
    
  props.autenticacaoUsuario({email,senha});
    
  }  
  
  renderAcess = () => {
    
    if(props.loading){
    
      return(<ActivityIndicator size="large" color="#ff3a67" />)  
    
    }else{
    
      return(
    
    <View style={styles.containerButtom}>
    
        <TouchableOpacity  style={styles.Button} onPress={()=>{this.autenticarUsuario()}}>
        
              <Text style={styles.buttonText}> LOGIN </Text>
        
        </TouchableOpacity>
    
      </View>  

      )  
   }
}  
   return (
    
    <View style={{flex:1}}>
    
    <View style={{backgroundColor:'#212022',flexDirection:'row',alignItems:'center',height:120}}>
    <View style={{alignItems:'flex-start',marginLeft:20}}>
    <TouchableOpacity onPress={()=>props.navigation.navigate('DrawerOpen')}>
            <Icon2 name="md-menu" size={35} style={{ color: '#ff3a67' }} />
        </TouchableOpacity>
    </View>               
    <Text style={{color:'#ff3a67',marginLeft:30,fontSize:20}}>LOGIN</Text>
    </View>

      <View style={styles.container}>


        <View style={styles.containerInputImage}>
          
        <Image style={styles.img} source={require('../../imgs/user.png')}/>
        
        </View>
       
            <View style={styles.containerInput}>
                
                <Icon2 name="md-mail" style={styles.icon} size={30}/>

                <TextInput style={styles.Input} 
                value={props.email}
                onChangeText={texto=>props.changeEmail(texto)}
                underlineColorAndroid='#ccc' 
                placeholderTextColor="#ccc" 
                selectionColor="#ff3a67"
                selectTextOnFocus={true}
                placeholder="Seu email"/>

            </View>

            <View style={styles.containerInput}>
            
               <Icon name="lock" style={styles.icon} size={30}/>

              <TextInput style={styles.Input} 
              onChangeText={texto=>props.changeSenha(texto)}
              secureTextEntry={true}
              value={props.senha}
              underlineColorAndroid='#ccc' 
              placeholderTextColor="#ccc" 
              selectionColor="#ff3a67"
              placeholder="senha"/>

        </View>  
        
        <Text style={styles.erroLogin}>{props.erroLogin}</Text>
       
        {this.renderAcess()}
       
        <TouchableHighlight  style={{marginTop:50}} 
         onPress={()=>props.navigation.navigate('Cadastro')} 
         underlayColor={'#fafafa'} activeOpacity={0.3} >
       
        <Text style={{color:'#000',fontSize:17}}>Criar uma conta agora</Text>
       
        </TouchableHighlight>
      
      </View>
      </View>
    );
  }

  
export default LoginControllerView;

