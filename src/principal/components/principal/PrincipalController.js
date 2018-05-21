import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadCurtidasUser} from '../../actions/actionsPrincipal';
import PrincipalView from './PrincipalView';

class PrincipalController extends Component {

  constructor(props){
    super(props);
 
    }

  componentWillMount(){
    if(this.props.logado!=""){
     this.props.loadCurtidasUser();
    }
  }  

  render() {  
    return (    
    <PrincipalView {...this.props}/>
    );
  }
}

const mapStateToProps = state => ({
logado:state.ReducerLogin.logado,
curtidaUsuario:state.ReducerPrincipal.curtidaUsuario
});

export default connect(mapStateToProps,{loadCurtidasUser})(PrincipalController);