
import {
CHANGE_EMAIL,
CHANGE_SENHA,
LOGIN_EM_ANDAMENTO,
LOGIN_USUARIO_ERRO,
LOGIN_USUARIO_SUCESSO
}  from '../constants';
import { CADASTRO_USUARIO_SUCESSO } from '../../cadastro/constants';


const INITIAL_STATE ={
email:'adrianarodrigues@gmail.com',
senha:'123321',
loading:false,
erroLogin:'',
logado:''
}

export default (state = INITIAL_STATE ,action) =>{

        switch(action.type){
        
        case CHANGE_EMAIL:
        
        return {...state,email:action.payload}   
        
        case CHANGE_SENHA:

        return{...state,senha:action.payload}

        case LOGIN_EM_ANDAMENTO:

        return {...state,loading:true}

        case LOGIN_USUARIO_ERRO:

        return{...state,erroLogin:action.payload,loading:false}

        case LOGIN_USUARIO_SUCESSO:

        return {...state,logado:action.payload,email:'',senha:''}

        case CADASTRO_USUARIO_SUCESSO:

        return {...state,senha:''}

        default : return state

    }    
}