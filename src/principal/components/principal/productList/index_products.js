import React, { Component } from 'react';
import {

View,StyleSheet,Text,ActivityIndicator
 
} from 'react-native';

import {connect} from 'react-redux';

import Product from './product/produto.js';

import {listarProdutos} from '../../../actions/actionsPrincipal';

 class ProductList extends Component {

   constructor(props){
   
   super(props); 

   

   }  
 
  componentDidMount(){
  this.props.listarProdutos();   
 }
   
 renderProdutos(){
   if(!this.props.loading){
       return(        
      <View>
          <ActivityIndicator size="large" color="#ff3a37" />
      </View>
    );
  }else{
    
    return(

    <View>             
              
    <View style={styles.container}>

    {this.props.products.map(product=>
    
    <Product key={product.id} product={product} logado={this.props.logado} navigation={this.props.navigation}/>	
    
    )}
          
    </View>

    </View>
    );
  }
}

  render() {
      if(this.props.products!=null){
          return (
            <View>
            {this.renderProdutos()}
            </View>
          );  
      }
   }
}

const mapStateToProps = state => ({
products:state.ReducerPrincipal.products,
loading:state.ReducerPrincipal.loading
});

export default connect(mapStateToProps,{listarProdutos})(ProductList);


const styles = StyleSheet.create({
  container:{
  backgroundColor:'#ffffff',  
  padding:15,
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-between',    
  }    
  });

