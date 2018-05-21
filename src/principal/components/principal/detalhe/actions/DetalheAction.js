import {MODIFICA_COMENTARIO,COMENTARIO_SUCESSO,COMENTARIO_ERRO,
CARREGA_COMENTARIOS,SEM_COMENTARIOS,ZERAR_CURTIDA_DETALHE,CARREGA_TAM_COMENTARIOS} from '../constants';
import B64 from 'base-64';
import firebase from 'firebase';
import _ from 'lodash';
import {CURTIR_IN_DETALHE} from '../constants';

export const modifica_comentario_form = text =>{
    return{
    type:MODIFICA_COMENTARIO,
    payload:text    
    };    
}

export const carrega_comentarios = idproduto =>{
     
    const idB64 = B64.encode(idproduto);
      
    return dispatch =>{           
    firebase.database().ref(`/produtos_comentarios/${idB64}/comentarios/`)
    .once("value")
    .then(snapshot=>{
        if(snapshot.val()){
         
        const dados = _.values(snapshot.val());
       
        

        dispatch({type:CARREGA_COMENTARIOS,payload:dados});
            
        }else{
        dispatch({type:SEM_COMENTARIOS})   
        }

     }).catch(error=>alert('Um erro ocorreu na aplicação ' + error ))    
        
    }    
}

export const carrega_tam_comentarios = idproduto =>{
     
    const idB64 = B64.encode(idproduto);
      
    return dispatch =>{           
    firebase.database().ref(`/produtos_comentarios/${idB64}/comentarios/`)
    .once("value")
    .then(snapshot=>{
        if(snapshot.val()){
         
        const dados = _.values(snapshot.val());              

        dispatch({type:CARREGA_COMENTARIOS,payload:dados});
            
        }else{
        dispatch({type:SEM_COMENTARIOS})   
        }

     }).catch(error=>alert('Um erro ocorreu na aplicação ' + error ))    
        
    }    
}

export const envia_comentario = ({idproduto,comentario}) =>{

    const {currentUser} = firebase.auth();

    const Emailb64 = B64.encode(currentUser.email);

    const userNome = '';

    return dispatch =>{

    firebase.database().ref(`/contatos/${Emailb64}/`)
    .once("value").then(snapshot=>{
     const usuario = _.values(snapshot.val());     
     const userNome =  usuario[0].nome;
     const idB64 = B64.encode(idproduto);
   
    /*==> buscar dados referentes */ 
    
    firebase.database().ref(`/produtos/`)
    .once("value")
    .then(snapshot=>{
       
       if(snapshot.val()){
        
        const _snapshot = snapshot.val();
        
        const dados =_.values(snapshot.val());    

        if(dados.length > 1){

            dados.map(value=>{             
                if(value.id==idproduto){                    
                EID = idproduto;
                }}); //fecha map for
            
                if(EID == idproduto){                
                                      
                    data = {usuario:userNome,comentario};                    
                   
                    firebase.database().ref(`produtos_comentarios/${idB64}/comentarios/`).push(data)
                
                    .then(ok =>
                    
                        firebase.database().ref(`produtos_comentarios/${idB64}/comentarios/`).once("value")
                        
                        .then(snapshot=>{const dadosComents = _.values(snapshot.val());

                            dispatch({type:COMENTARIO_SUCESSO,payload:dadosComents})
                         
                        })).catch(error=>dispatch({type:COMENTARIO_ERRO,payload:error.message}))                
                  
                }else{console.log('id do produto n encontrado');}    

                 }else{console.log('n eh lista');}
            
          }

    })

})

}

}

export const zerarCurtidaDetalhe = () =>{
   return dispatch =>{  
     dispatch({type:ZERAR_CURTIDA_DETALHE});
   }    
}

export const curtirProdutoDetalhe = (idproduto) =>{

    return dispatch => {

    const ID = B64.encode(idproduto);

    let CURTIDAS = 0;let EID = 0;let image="";let title="";let description="";let price ="";

    firebase.database().ref(`/produtos/`)
    .once("value")
    .then(snapshot=>{
       
       if(snapshot.val()){
        
        const _snapshot = snapshot.val();
        
        const dados =_.values(snapshot.val());    

        if(dados.length > 1){               
            dados.map(value=>{             
                if(value.id==idproduto){                    
                    CURTIDAS = value.curtidas;
                    image = value.image;
                    title = value.title;
                    description = value.description;
                    price = value.price;
                    EID = idproduto;
                } // fecha if ==
            }); //fecha map for
            
                if(EID == idproduto){                
                    CURTIDAS++;                     
                    data = {
                        id:idproduto,
                        curtidas:CURTIDAS, 
                        title:title,
                        description:description,
                        price:price,
                        image:image   
                    }                
              
                    curtidasUsuario(ID,dispatch,idproduto);
                   
                    base(data,ID,dispatch);
                
                }else{
                                        
                data = {
                    id:idproduto,
                    curtidas:1    
                }
                    base(data,ID,dispatch,_snapshot);
                }    

         }else{
            data = {
                id:idproduto,
                curtidas:1    
            }           
                    base(data,ID,dispatch,_snapshot);
          
         }} // se houver valores

    }) // then snapshot valores

 }//fecha dispach
    
} // fecha função

const base = (data,ID,dispatch) =>{ 

    var updates = {};
    
    updates[`/produtos/${ID}/`] = data;
    
    firebase.database().ref().update(updates)                    
    
    .then(success=> {
       
        firebase.database().ref(`/produtos/${ID}`)
       
        .once("value")

        .then(snapshot=>{
           
         const _snapshot =_.values(snapshot.val());   
        
         dispatch({type:CURTIR_IN_DETALHE,payload:_snapshot[0]})
        
        }).catch(erro=>alert('Erro ' + erro))
   })

}


const curtidasUsuario = (ID,dispatch,idproduto) =>{

    let CURTIDAS = 0;
    
    let EID = 0;
    
    const {currentUser} =  firebase.auth();
    
    const Emailb64  = B64.encode(currentUser.email);
    
    firebase.database().ref(`/contatos/${Emailb64}/produtos/`)
    
    .once("value").then(snapshot=>{
        
    if(snapshot.val()){
    
    // se houver valores     
    
    const dadosUser = _.values(snapshot.val());
    
    if(dadosUser.length > 1){               
        dadosUser.map(value=>{             
            if(value.id==idproduto){       
                CURTIDAS = value.curtidas;
                EID = idproduto;
            } // fecha if ==
        }); //fecha map for
    
        
       if(EID==idproduto){
                       
                       CURTIDAS++; 
                       
                       data={
                       id:idproduto,
                       curtidas:CURTIDAS     
                       } 
                     
                       var updates={};
    
                        updates[`/contatos/${Emailb64}/produtos/${ID}/`] = data;
                        
                        firebase.database().ref().update(updates)
                        
                        .then(ok =>{                    
                         
                                firebase.database().ref(`/contatos/${Emailb64}/produtos/`)
                                                            
                                .once("value").then(snapshot=>{
                    
                                    let CURTIDAS = 0;
                                
                                    let EID = 0;
                                
                                    const dados =_.values(snapshot.val());    
                                
                                    if(dados.length > 1){               
                                    
                                    dados.map(value=>{CURTIDAS+=value.curtidas;})
                                
                                    }else{
                                        console.log('no list');                               
                                    }
    
                                      
                            
                                    }) // fecha then once
                        
                        }).catch(erro=>alert('erro ao atualizar ' + erro))
                       
              }else{
    
                data={
                id:idproduto,
                curtidas:1     
                } 
             
                var updates={};
    
                 updates[`/contatos/${Emailb64}/produtos/${ID}/`] = data;
                 
                 firebase.database().ref().update(updates)
                                          
                 .catch(erro=>alert('erro ' + erro))
        
        }
    
       }else{
          
        data={id:idproduto,curtidas:1} 
         
            var updates={};
    
             updates[`/contatos/${Emailb64}/produtos/${ID}/`] = data;
             
             firebase.database().ref().update(updates)
                                      
             .catch(erro=>alert('erro ' + erro))        
    
    }
    
    }else{
    
            data={id:idproduto,curtidas:1} 
         
            var updates={};
    
             updates[`/contatos/${Emailb64}/produtos/${ID}/`] = data;
             
             firebase.database().ref().update(updates)
                                      
             .catch(erro=>alert('erro ' + erro))
    }
    
    })
    
    } // fecha função
    
    
