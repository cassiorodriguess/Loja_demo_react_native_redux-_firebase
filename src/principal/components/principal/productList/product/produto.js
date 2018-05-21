import React,{Component} from 'react';
import {connect} from 'react-redux';
import {View,Text,ListView,TouchableOpacity,Image,Alert,TouchableHighlight} from 'react-native';
import _ from 'lodash';
import {curtirProduto} from '../../../../actions/actionsPrincipal';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
 
class Produtos extends Component {

constructor(props){
super(props);    
this.curtir   = this.curtir.bind(this);
this.isLogado = this.isLogado.bind(this);
}


curtir(id){

    if(this.isLogado()){
        this.props.curtirProduto(id);    
    }else{
        Alert.alert(
            'Login',
            'Cadastre-se ou faça o login para curtir nossos produtos',
            [
                {text: 'Login', onPress: () => this.props.navigation.navigate('Login')},
                {text: 'Cadastre-se', onPress: () => this.props.navigation.navigate('Cadastro')},
                {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: {}},
            ],
            { cancelable: false }
      )
   }
}  

isLogado(){
    if(this.props.logado!=""){
        return true;    
    }
        return false;    
}


   render(){

    const {id,image,curtidas,price,title,description} = this.props.product;

     if(this.props.product!=null){
 
       return(
        <View>   
                               
                <View style={styles.container}>                
                <TouchableHighlight underlayColor="#fafafa" 
                            onPress={()=>this.props.navigation.navigate('Detalhe',
                            {id,title,image,price,id,curtidas,description,logado:this.isLogado,curtir:this.curtir})}>                    
                            <Image source={{uri:image}} style={styles.image}/>	
                            </TouchableHighlight>
                   
                        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                            <View>
                                <Text style={{fontSize:18,color:'#ff3a37'}}>{price}</Text>
                            </View>
                            <View style={{alignItems:'flex-end',padding:7,borderRadius:50}}>
                                <View style={{flexDirection:'row',alignItems:'center',
                                justifyContent:'space-around',width:80,height:50,borderRadius:40,backgroundColor:'#fff',padding:4}}>                                
                                    <TouchableOpacity onPress={()=>this.curtir(id)}>
                                        <Icon name="md-heart-outline" style={{color:'#ff3a37'}} size={35} />                            
                                    </TouchableOpacity>
                                 <Text style={{fontSize:18,color:'#000'}}>{curtidas}</Text>
                                </View>                           
                            </View>
                           
                       </View>
                      
               </View> 
        </View> 
        ); 
      }   
    }
}



export default connect(null,{curtirProduto})(Produtos);

