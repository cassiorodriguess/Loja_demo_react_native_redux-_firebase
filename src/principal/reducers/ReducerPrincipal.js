
import {LOGOUT,CURTIR,LISTARPRODUTOS,CURTIDAS_USUARIO,DETALHE_CURTIDA_SUCESSO} from '../contants';

const INITIAL_STATE = {
products:[{ }],
detalheCurtida:[{ }],
loading:false
}


export default (state = INITIAL_STATE,action) =>{
 
    switch(action.type){

    case LISTARPRODUTOS:
    
    return {...state,products:action.payload,loading:true}  

    case CURTIR:

    return state
    
    case CURTIDAS_USUARIO:

    return {...state,curtidaUsuario:action.payload}

    case DETALHE_CURTIDA_SUCESSO:

    return {...state,detalheCurtida:action.payload}  
     
    default: return state; 

   }

}


