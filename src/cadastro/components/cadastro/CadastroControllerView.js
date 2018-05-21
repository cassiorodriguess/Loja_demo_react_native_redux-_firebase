import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { View,TextInput,TouchableOpacity,Text,Image,ActivityIndicator} from 'react-native';
import styles from './styles';
import {Navigations} from 'react-navigation';

const CadastroControllerView = props =>{

    CadastroUsuario = () =>{
    
    const {nome,email,senha} = props;
    
    props.CadastrarUsuario({nome,email,senha});
    
    }
    
    
    renderCadastro = () =>{
        if(props.loading){
         return(<ActivityIndicator size="large"  color="#ff3a67" />)
         }else{
             return(
               <View style={styles.containerButtom}>
                   <TouchableOpacity  style={styles.Button} onPress={()=>this.CadastroUsuario()}>
                     <Text style={styles.buttonText}> Cadastrar </Text>
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
        <Text style={{color:'#ff3a67',marginLeft:30,fontSize:20}}>CRIE SUA CONTA </Text>
    </View>
      <View style={styles.container}>
        
          <View style={styles.containerInputImage}>
          
          <Image style={styles.img} source={require('../../../login/imgs/user.png')}/>
          
          </View>
             
            <View style={styles.containerInput}>
                
                <Icon name="user-o" style={styles.icon} size={30}/>

                <TextInput style={styles.Input} 
                value={props.nome}
                onChangeText={texto=>props.ChangeNome(texto)}
                underlineColorAndroid='#ccc' 
                placeholderTextColor="#ccc"
                selectionColor="#ff3a67"
                placeholder="Nome"/>

            </View>

            <View style={styles.containerInput}>
                
                <Icon2 name="md-mail" style={styles.icon} size={30}/>

                <TextInput style={styles.Input} 
                value={props.email}
                onChangeText={texto=>props.ChangeEmail(texto)}
                underlineColorAndroid='#ccc' 
                placeholderTextColor="#ccc"
                selectionColor="#ff3a67" 
                placeholder="Email"/>

            </View>

            <View style={styles.containerInput}>
            
            <Icon name="lock" style={styles.icon} size={30}/>

            <TextInput style={styles.Input} 
            value={props.senha}
            onChangeText={texto=>props.ChangeSenha(texto)}
            secureTextEntry={true}
            underlineColorAndroid='#ccc' 
            placeholderTextColor="#ccc" 
            selectionColor="#ff3a67"
            placeholder="Senha"/>

            </View>

           {this.renderCadastro()}

       <Text style={{marginTop:20,fontSize:16,color:'#000000',textAlign:'center'}}>{props.erroCadastro}</Text>

      </View>
      </View>
    
        );

    }
  
export default CadastroControllerView;

