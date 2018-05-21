import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity, StatusBar,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SubHeader from './subheader';
import styles from './styles.js';

export default class Header extends Component {

constructor(props){
super(props);
console.log(props.TabHeader);
}    

 concorra(){
    Alert.alert(
        'Concorra a prêmios',
        'A cada 1000 curtidas você concorre a premios da própria loja , faça o login ou cadastre-se',
        [
          {text: 'Login', onPress: () => navigation.navigate('Login')},
          {text: 'Cadastre-se', onPress: () => navigation.navigate('Cadastro')},
          {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: {}},
        ],
        { cancelable: false }
  )     
 }   
 



    estaLogadoHeader() {

        if (this.props.logado == "") {
            return (
                <View style={{backgroundColor:'#212022',flexDirection:'row',alignItems:'center',height:120}}>
                <View style={{alignItems:'flex-start',marginLeft:20}}>
                   <TouchableOpacity onPress={()=>this.props.navigation.navigate('DrawerOpen')}>
                        <Icon name="md-menu" size={35} style={{ color: '#ff3a67' }} />
                    </TouchableOpacity>
                </View>               
               <Text style={{color:'#ff3a67',marginLeft:30,fontSize:30}}>ELLAS</Text>
             </View>
             
            )
        }else{
            return (
                <View style={{backgroundColor:'#212022',flexDirection:'row',alignItems:'center',height:120}}>
                <View style={{alignItems:'flex-start',marginLeft:20}}>
                   <TouchableOpacity onPress={()=>this.props.navigation.navigate('DrawerOpen')}>
                        <Icon name="md-menu" size={35} style={{ color: '#ff3a67' }} />
                    </TouchableOpacity>
                </View>         
                <Text style={{color:'#ff3a67',marginLeft:30,fontSize:30}}>ELLAS</Text>
                       
             </View>
           
            )

        }

    }

    estaLogadoLogin() {

        if (this.props.logado == "") {
            return (              
                <View style={styles.headerNome}>
                <TouchableHighlight underlayColor="#fafafa" onPress={()=>this.concorra()}> 
                    <Text
                      style={{ fontSize: 17, marginHorizontal: 25, textAlign: 'left' }}>
                      CURTA NOSSOS PRODUTOS E CONCORRA A PRÊMIOS
                    </Text>
                  </TouchableHighlight> 
              </View>
            )
        }
    }

    render() {
        return (
            <View>
                <View style={{backgroundColor:'#212022',flexDirection:'row',alignItems:'center',height:120}}>
                <View style={{alignItems:'flex-start',marginLeft:20}}>
                   <TouchableOpacity onPress={()=>this.props.navigation.navigate('DrawerOpen')}>
                        <Icon name="md-menu" size={35} style={{ color: '#ff3a67' }} />
                    </TouchableOpacity>
                </View>         
                <Text style={{color:'#ff3a67',marginLeft:30,fontSize:30}}>ELLAS</Text>
                       
             </View>
                <View style={{ backgroundColor: '#ffffff', flexDirection: 'row' }}>
                {this.estaLogadoLogin()}
                </View>
                 <SubHeader />
            </View>
        );
    }
}

