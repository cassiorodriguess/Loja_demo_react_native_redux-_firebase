import React, { Component } from 'react';
import styles from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import { View, Text, TextInput,TouchableOpacity,Alert} from 'react-native';
import {modifica_comentario_form,envia_comentario} from '../actions/DetalheAction';

class formComentario extends Component {

   constructor(props){

    super(props);

    console.log(props);

}

    envieComentario(){        

        if(this.props.logado() && this.props.comentario!=""){
     
          const {idproduto,comentario} = this.props;
        
          this.props.envia_comentario({idproduto,comentario});
        
         }else if(this.props.logado() && this.props.comentario=="" || this.props.comentario ==null){
        
             Alert.alert("Escreva algo");
     
         }else{

            Alert.alert(
                'Login',
                'Cadastre-se ou faça o login para comentar nosso produto',
                [
                  {text: 'Login', onPress: () => this.props.navigation.navigate('Login')},
                  {text: 'Cadastre-se', onPress: () => this.props.navigation.navigate('Cadastro')},
                  {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: {}},
                ],
                { cancelable: false }
              )

         } 
     }    
        

    render() {
    return (
        <View style={{ marginTop: 20, marginBottom: 40 }}>            
        <View style={styles.form}>
            <View style={{ marginTop: 15 }}>
                <TextInput placeholder="Diga algo sobre esse produto"  
                 value={this.props.comentario}
                 onChangeText={text=>this.props.modifica_comentario_form(text)}
                 placeholderTextColor="#ccc" 
                 style={{fontSize:20}}
                 underlineColorAndroid="#ff3a37" 
                 />
                <Text style={{marginTop:15}}>{this.props.errorComent}</Text>
           </View>     
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity style={styles.buttonEnviar} onPress={()=>this.envieComentario()}>
                    <Text style={{ fontSize: 27, color: '#ff3a37' }}> Enviar </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
  }
}

const mapStateToProps = state => ({
comentario : state.DetalheReducer.comentario,
errorComent: state.DetalheReducer.errorComent
});
    
export default connect(mapStateToProps,{modifica_comentario_form,envia_comentario})(formComentario);
    