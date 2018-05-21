import React, { Component } from 'react';
import styles from './styles';
import {connect} from 'react-redux';
import {ChangeNome,ChangeEmail,ChangeSenha,CadastrarUsuario} from '../../actions/actionsCadastro';
import CadastroControllerView from './CadastroControllerView';

class CadastroController extends Component{

constructor(props){
super(props);  
}

CadastroUsuario(){

const {nome,email,senha} = this.props;

this.props.CadastrarUsuario({nome,email,senha});

}

 render(){

    return (
        
          <CadastroControllerView {...this.props} />
    
        );
  
    }

}

const mapStateToProps = state => ({
nome:state.ReducerCadastro.nome,
email:state.ReducerCadastro.email,
senha:state.ReducerCadastro.senha,
erroCadastro:state.ReducerCadastro.erroCadastro,
loading:state.ReducerCadastro.loading    
}); 

 
export default connect(mapStateToProps,{ChangeNome,ChangeEmail,ChangeSenha,CadastrarUsuario})(CadastroController);

