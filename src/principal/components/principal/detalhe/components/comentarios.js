import React, { Component } from 'react';
import { View, Text, TextInput,TouchableOpacity,Alert} from 'react-native';
import styles from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import Comentarioform from './formComentario';
import {modifica_comentario_form,envia_comentario,carrega_comentarios} from '../actions/DetalheAction';

class Comentarios extends Component {

   
   constructor(props){
   super(props);  
   console.log(props);
   } 
      
   componentWillMount(){
   this.props.carrega_comentarios(this.props.idproduto); 
   } 

    render() {
        if(this.props.coments!=null){
       return(
       <View>    
       <Comentarioform 
        logado={this.props.logado}
        idproduto={this.props.idproduto} 
        navigation={this.props.navigation} 
        curtir={this.props.curtir}/> 
       <View>
            
            {this.props.coments.map(value=>

                <View  style={styles.comentario}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name="md-person" size={35} color="#ccc"/>
                        <Text key={value.usuario} style={{fontSize:18,marginLeft:15,color:'#ff3a37'}}>{value.usuario}</Text>
                    </View>
                        <Text style={{ fontSize: 18,textAlign:'left' }}>{value.comentario}</Text>
                </View>
                
            )}

       </View>    

     </View>      
       
       );
     }else{
         return(
         <View>
         <Comentarioform 
         logado={this.props.logado}
         idproduto={this.props.idproduto} 
         navigation={this.props.navigation} 
         curtir={this.props.curtir}/>     
         <Text></Text>
         </View>    
         )
     }
  }
}

const mapStateToProps = state => ({
coments:state.DetalheReducer.coments
});

export default connect(mapStateToProps,{carrega_comentarios})(Comentarios);
