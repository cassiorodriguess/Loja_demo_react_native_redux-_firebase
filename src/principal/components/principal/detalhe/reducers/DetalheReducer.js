
import {
MODIFICA_COMENTARIO, 
COMENTARIO_SUCESSO,
COMENTARIO_ERRO,
CARREGA_COMENTARIOS,
SEM_COMENTARIOS,
CURTIR_IN_DETALHE,
ZERAR_CURTIDA_DETALHE,
CARREGA_TAM_COMENTARIOS
} from '../constants';

INITAL_STATE={
comentario:'',
erroComent:'',
coments:[{}],
detalheCurtida:0,
tam_comentarios:0
}

export default (state = INITAL_STATE,action) =>{

    switch(action.type){

    case MODIFICA_COMENTARIO:

    return {...state,comentario:action.payload}

    case COMENTARIO_SUCESSO:

    return {...state,coments:action.payload,comentario:''}

    case COMENTARIO_ERRO:

    return {...state,erroComent:action.payload}

    case CARREGA_COMENTARIOS:
    
    return {...state,coments:action.payload}

    case SEM_COMENTARIOS:

    return{...state,coments:null}

    case CURTIR_IN_DETALHE:

    return{...state,detalheCurtida:action.payload}

    case ZERAR_CURTIDA_DETALHE:

    return {...state,detalheCurtida:0}

    case CARREGA_TAM_COMENTARIOS :

    return {...state,coments:action.payload}

    default :return state;

}

    
}