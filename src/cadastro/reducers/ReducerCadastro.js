
import {
CHANGE_NOME,
CHANGE_EMAIL,
CHANGE_SENHA,
CADASTRO_USUARIO_ERRO,
CADASTRO_USUARIO_SUCESSO,
CADASTRO_EM_ANDAMENTO
} from '../constants';
import { LOGIN_USUARIO_SUCESSO } from '../../login/constants';

const INITIAL_STATE ={
nome:'',
email:'',
senha:'',
loading:false,
erroCadastro:''
}

export default (state = INITIAL_STATE ,action) =>{

switch(action.type){
case CHANGE_NOME:
return {...state,nome:action.payload}
case CHANGE_EMAIL:
return{...state,email:action.payload}     
case CHANGE_SENHA:
return{...state,senha:action.payload} 
case CADASTRO_EM_ANDAMENTO:
return {...state,loading:true}
case CADASTRO_USUARIO_ERRO:
return{...state,erroCadastro:action.payload,loading:false}
case CADASTRO_USUARIO_SUCESSO:
return{...state,email:'',senha:''}

default:return state;  

}

}