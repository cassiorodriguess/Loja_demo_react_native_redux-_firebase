
import {Actions} from 'react-native-router-flux';

import lodash from 'lodash';

import firebase from 'firebase';

import B64 from 'base-64';

import {NavigationActions} from 'react-navigation';

import {
    CHANGE_EMAIL,
    CHANGE_SENHA,
    LOGIN_EM_ANDAMENTO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO
} from '../constants'; 



export const changeEmail = (texto)=>{

    return{
        type:CHANGE_EMAIL,
        payload:texto   
    };
}

export const changeSenha = (texto) =>{
    return{
        type:CHANGE_SENHA,
        payload:texto
    };
}

export const autenticacaoUsuario = ({email,senha}) =>{

    const emailB64 = B64.encode(email);
    
    return dispatch =>{
       
        dispatch({type:LOGIN_EM_ANDAMENTO})
        
        firebase.auth().signInWithEmailAndPassword(email,senha)
        
        .then(value=>sucessoLogin(dispatch,emailB64))
        
        .catch(erro=>erroLogin(erro,dispatch));   
    }
}

const sucessoLogin = (dispatch,emailB64) =>{

firebase.database().ref(`/contatos/${emailB64}`)

.once('value')
            .then(snapshot => {
                
                const dadosUsuario = lodash.values(snapshot.val());

                console.log(dadosUsuario[0].nome);
                
                dispatch({
                    type:LOGIN_USUARIO_SUCESSO,
                    payload:dadosUsuario[0].nome,
                    action: NavigationActions.navigate({routeName:'Loja'})
                });
             
                                   
            })
 
} 

const erroLogin = (erro,dispatch) =>{
dispatch({type:LOGIN_USUARIO_ERRO,payload:erro.message});
}

