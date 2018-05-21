import React, { Component } from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import {changeEmail,changeSenha,autenticacaoUsuario} from '../../actions/actionsLogin';
import LoginControllerView from './LoginControllerView';
import {connect} from 'react-redux';
import styles from './styles';


 class LoginController extends Component {

  constructor(props){
  super(props);
  }

        autenticarUsuario(){

        const {email,senha} = this.props;

        this.props.autenticacaoUsuario({email,senha});
        
        }
                
        renderAcesso(){
         
        if(this.props.loading){

          return(<ActivityIndicator size="large"/>)  
        
        }else{
        
          return(
        
        <View style={styles.containerButtom}>
        
            <TouchableOpacity  style={styles.Button} onPress={()=>this.autenticarUsuario()}>            
                 
                  <Text style={styles.buttonText}> LOGAR </Text>

            </TouchableOpacity>
        
          </View>  
        
             )  
        
          }

      }    


  render() {
    
    return (
         <LoginControllerView {...this.props}/>
    );
  }
}

const mapStateToProps = state => ({
    email:state.ReducerLogin.email,
    senha:state.ReducerLogin.senha,
    loading:state.ReducerLogin.loading,
    erroLogin:state.ReducerLogin.erroLogin
    });
    
export default connect(mapStateToProps,{changeEmail,changeSenha,autenticacaoUsuario})(LoginController);
    
    