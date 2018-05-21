
import firebase from 'firebase';
import lodash from 'lodash';
import B64 from 'base-64';
import {NavigationActions} from 'react-navigation';

import {
CHANGE_NOME,
CHANGE_EMAIL,
CHANGE_SENHA,
CADASTRO_USUARIO_ERRO,
CADASTRO_USUARIO_SUCESSO,
CADASTRO_EM_ANDAMENTO
} from '../constants';

export const ChangeNome = (texto) =>{
    return{
         type:CHANGE_NOME,
         payload:texto    
    }
}
export const ChangeEmail = (texto) =>{
    return{
        type:CHANGE_EMAIL,
        payload:texto
    }
}
export const ChangeSenha = (texto) =>{
    return{
        type:CHANGE_SENHA,
        payload:texto
    }
}


export const CadastrarUsuario = ({nome,email,senha}) =>{

    return dispatch=>{
 
        dispatch({type:CADASTRO_EM_ANDAMENTO});

        firebase.auth().createUserWithEmailAndPassword(email,senha)
        
        .then(user=>{
        
            let Emailb64 = B64.encode(email);
        
            firebase.database().ref(`/contatos/${Emailb64}`)
        
            .push({nome})
        
            CadastroComSucesso(dispatch);    
        
        }).catch(erro=>erroCadastro(erro,dispatch));

    }  
}


CadastroComSucesso = (dispatch) =>{ 
dispatch({type:CADASTRO_USUARIO_SUCESSO,
action:NavigationActions.navigate({routeName:'Login'})
})
}

erroCadastro = (erro,dispatch) =>{        
dispatch({type:CADASTRO_USUARIO_ERRO,payload:erro.message});
}