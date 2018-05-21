import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,ScrollView,TouchableOpacity,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles';
import Comentarios from './comentarios';
import {connect} from 'react-redux';
import {curtirProdutoDetalhe,zerarCurtidaDetalhe,carrega_tam_comentarios} from '../actions/DetalheAction';

class Detalhe extends Component {
static navigationOptions={
title:'Detalhe',  
}

constructor(props){
super(props);
}  

componentWillMount(){
this.props.zerarCurtidaDetalhe();
this.props.carrega_tam_comentarios();
}

  curtir(id){
    const {logado} = this.props.navigation.state.params;

    if(logado()){
        this.props.curtirProdutoDetalhe(id);    
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

 render() {
      
      let novacurtida = 0;
      
      let tamComents = 0;      

      const { id,title, description, price, image,curtidas,logado} = this.props.navigation.state.params;

      if(this.props.coments!=null){

      console.log(this.props.coments.length) 

      tamComents =  this.props.coments.length;
    
    } 


      if(this.props.detalheCurtida != 0){
      novacurtida = this.props.detalheCurtida; 
      }else{
      novacurtida = curtidas; 
      } 
       return (
         
      <View style={{ backgroundColor:'#fff', flex: 1 }}>

      <View style={{backgroundColor:'#212022',flexDirection:'row',alignItems:'center',height:120}}>
        <View style={{alignItems:'flex-start',marginLeft:20}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('DrawerOpen')}>
                <Icon name="md-menu" size={35} style={{ color: '#ff3a67' }} />
            </TouchableOpacity>
        </View>               
        <Text style={{color:'#ff3a67',marginLeft:30,fontSize:25}}>{title}</Text>
    </View>

      <ScrollView>    
      <View style={{ backgroundColor: '#fff', flex: 1, padding: 15}}>
        <View style={styles.image}>
          <Image source={{ uri: image }} style={{ resizeMode: 'contain', height: 400 }} />
        </View>

        <View style={styles.atitle}>
          <Icon name="md-pricetag" size={35} color="#ff3a37" />
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.info}>

          <View style={styles.envolveCurtidas}>

             <TouchableOpacity onPress={()=>this.curtir(id)}>

            <Icon name="md-heart-outline" size={35} color="green" />
              
            </TouchableOpacity>  
            
            <Text style={{ fontSize: 17, marginLeft: 20 }}>{novacurtida}</Text>

          </View>

          <View style={styles.envolveComents}>

            <Icon name="ios-chatbubbles-outline" size={35} color="green" />

            <Text style={{ fontSize: 17, marginLeft: 20 }}>{tamComents}</Text>

          </View>

          <Text style={styles.price}>{price}</Text>

        </View>

        <View>
          <Comentarios idproduto={id} logado={logado} navigation={this.props.navigation} curtir={this.curtir} />
        </View>

      </View>
      </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
detalheCurtida: state.DetalheReducer.detalheCurtida,
coments:state.DetalheReducer.coments
});

export default connect(mapStateToProps,{curtirProdutoDetalhe,zerarCurtidaDetalhe,carrega_tam_comentarios})(Detalhe);