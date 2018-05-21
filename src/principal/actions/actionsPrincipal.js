
import firebase from 'firebase';
import {
LOGOUT,
CURTIR,
LISTARPRODUTOS,
CURTIDAS_USUARIO,
DETALHE_CURTIDA_SUCESSO
} from '../contants';
import {Alert} from 'react-native';
import B64 from 'base-64';
import _ from 'lodash';

export const listarProdutos = () =>{

    return dispatch =>{
    
        firebase.database().ref(`/produtos/`)
    
        .on("value",snapshot=>{
    
            const Lista = _.values(snapshot.val());
    
            dispatch({type:LISTARPRODUTOS,payload:Lista})    
         })    

    }

}

export const loadCurtidasUser = () =>{
    
    const {currentUser} = firebase.auth();

    const Emailb64 = B64.encode(currentUser.email);

    return dispatch =>{
   
        firebase.database().ref(`/contatos/${Emailb64}/produtos/`)
                                                        
                            .on("value",

                                snapshot=>{
                
                                    let curtidas = 0;
                                                              
                                    const dados =_.values(snapshot.val());                                                                                 
                                    
                                    dados.map(value=>{curtidas+=value.curtidas;})
                                
                                    dispatch({type:CURTIDAS_USUARIO,payload:curtidas})
                                       
                                    })// fecha on
        }   
}

export const curtirProduto = (idproduto) =>{

    let curtidas = 0;let thisId = 0;let image="";let title="";let description="";let price ="";

    return dispatch => {

    const ID = B64.encode(idproduto);

    firebase.database().ref(`/produtos/`)
   
    .once("value")
    
    .then(snapshot=>{
       
       if(snapshot.val()){
        
        const _snapshot = snapshot.val();
        
        const dados =_.values(snapshot.val());    

        if(dados.length > 1){ 

            dados.map(value=>{             
             
                if(value.id==idproduto){                    
                    
                    curtidas = value.curtidas;
                    image = value.image;
                    title = value.title;
                    description = value.description;
                    price = value.price;
                    thisId = idproduto;
                } 
            
            }); 
            
                if(thisId == idproduto){                
                    
                    curtidas++;                     
                    
                    data = {
                        id:idproduto,curtidas,title,description,price,image   
                    }                                
              
                    curtidasUsuario(ID,dispatch,idproduto);

                    base(data,ID,dispatch,_snapshot);
                
                    }else{ // caso seja um id diferente insere
                                            
                        populaUnicaCurtidaBD(ID,dispatch,_snapshot); 
                        
                    }    

         }else{ // caso não seja uma lista insere
            
            populaUnicaCurtidaBD(ID,dispatch,_snapshot); 
          
         }} 

    }) 

 }
    
}


const populaUnicaCurtidaBD = (ID,dispatch,_snapshot) =>{
  
    data = {
        id:idproduto,
        curtidas:1    
    }      

    base(data,ID,dispatch,_snapshot);
}


export const logoutApp = () =>{
    return dispatch =>{
        firebase.auth().signOut()
        .then( ok =>alert('saiu'))
        .catch(error =>alert('n foi possivel sair da aplicação'));
    }    
}

const base = (data,ID,dispatch,snapshot) =>{ 
    
    var updates = {};
    
    updates[`/produtos/${ID}/`] = data;
    
    firebase.database().ref().update(updates)                    
    
    .then(success=>   
           
    dispatch({type:CURTIR,payload:snapshot})
   
    ).catch(erro=>alert('Erro ' + erro))

}

const curtidasUsuario = (ID,dispatch,idproduto) =>{

let curtidas = 0;

let thisId = 0;

const {currentUser} =  firebase.auth();

const Emailb64  = B64.encode(currentUser.email);

firebase.database().ref(`/contatos/${Emailb64}/produtos/`)

.once("value").then(snapshot=>{
    
if(snapshot.val()){

const dadosUser = _.values(snapshot.val());

if(dadosUser.length > 1){               
            
                    dadosUser.map(value=>{             
                        if(value.id==idproduto){       
                            curtidas = value.curtidas;
                        thisId = idproduto;
                        }
                    });

    
              if (thisId==idproduto){
                   
                   curtidas++; 
                   
                   data={
                   id:idproduto,
                   curtidas:curtidas     
                   } 
                 
                   var updates={};

                    updates[`/contatos/${Emailb64}/produtos/${ID}/`] = data;
                    
                    firebase.database().ref().update(updates)
                    
                            .then(ok =>{                    
                            
                                        firebase.database().ref(`/contatos/${Emailb64}/produtos/`)
                                                                    
                                            .once("value").then(snapshot=>{
                                
                                                let curtidas = 0;
                                            
                                                let thisId = 0;
                                            
                                                const dados =_.values(snapshot.val());    
                                            
                                                if(dados.length > 1){               
                                                
                                                dados.map(value=>{curtidas+=value.curtidas;})
                                            
                                                }else{
                                                
                                                dados.map(value=>{curtidas=value.curtidas;})
                                            
                                                }

                                            }) // fecha then once
                            
                            }).catch(erro=>alert('erro ao atualizar ' + erro))
                   
                        }else{//caso não haja nenhuma curtida

                        populaValorCurtidaUsuario(ID);
                        
                    }

                }else{//caso não seja uma lista
                    
                    populaValorCurtidaUsuario(ID);       

                }

}else{ //caso não haja valores

    populaValorCurtidaUsuario(ID);     
}

})

} // fecha função


const populaValorCurtidaUsuario = ID =>{

    data={id:idproduto,curtidas:1} 
     
    var updates={};

    updates[`/contatos/${Emailb64}/produtos/${ID}/`] = data;
     
    firebase.database().ref().update(updates)
                              
    .catch(erro=>alert('erro ' + erro))
}

export const populaBD = () =>{

    const one = B64.encode("1");
    const two = B64.encode("2");
    const three = B64.encode("3");
    const four = B64.encode("4");
    const five = B64.encode("5");
    const six = B64.encode("6");
    const seven = B64.encode("7");
    const eight = B64.encode("8");
    const nine = B64.encode("9");
    const ten= B64.encode("10");


        return dispatch =>{
        
        firebase.database().ref(`/produtos/${one}`)
        var updates = {};
        data=
        {
            id: 1,
            image: 'https://http2.mlstatic.com/sandalia-feminina-rasteira-rasteirinha-kalonita-2018106-D_NQ_NP_728948-MLB26639465759_012018-F.jpg',
            title: 'Teste 1',
            description: 'Lain pop sky blue',
            price: 'R$90,00',
            curtidas:0
        }
         
        updates[`/produtos/${one}`] = data;
        firebase.database().ref().update(updates)                    
        .then(success=>alert('sucesso'))
        .catch(erro=>alert('erro'+ erro))

        
        firebase.database().ref(`/produtos/${two}`)
        var updates = {};
        data=
        {
            id: 2,
            image: 'https://http2.mlstatic.com/sandalia-feminina-rasteira-rasteirinha-kalonita-2018106-D_NQ_NP_728948-MLB26639465759_012018-F.jpg',
            title: 'Teste 2',
            description: 'Lain pop sky blue',
            price: 'R$70,00',
            curtidas:0
        }
         
        updates[`/produtos/${two}`] = data;
        firebase.database().ref().update(updates)                    
        .then(success=>alert('sucesso'))
        .catch(erro=>alert('erro'+ erro))

        firebase.database().ref(`/produtos/${three}`)
        var updates = {};
        data=
            {
                id: 3,
                image: 'http://www.sitedebelezaemoda.com.br/wp-content/uploads/2015/11/19-600x600.jpg',
                title: 'Teste 1',
                description: 'Andrea nappa dusty pink',
                price: 'R$50,00',
                curtidas:0
            }
         
        updates[`/produtos/${three}`] = data;
        firebase.database().ref().update(updates)                    
        .then(success=>alert('sucesso'))
        .catch(erro=>alert('erro'+ erro))

       
        firebase.database().ref(`/produtos/${four}`)
        var updates = {};
        data=
        {
            id: 4,
            image: 'https://ae01.alicdn.com/kf/HTB1L7olSFXXXXabaXXXq6xXFXXXv/Swallow-Cinge-Magro-Fishtail-terno-Evening-L-pis-Vestidos-de-festa-night-club-vestidos-roupas-femininas.jpg_640x640.jpg',
            title: 'Teste 4',
            description: 'Lain pop sky blue',
            price: 'R$70,00',
            curtidas:0
        }
         
        updates[`/produtos/${four}`] = data;
        firebase.database().ref().update(updates)                    
        .then(success=>alert('sucesso'))
        .catch(erro=>alert('erro'+ erro))
       

        firebase.database().ref(`/produtos/${five}`)
        var updates = {};
        data=
        {
            id: 5,
            image: 'http://shopfacil.vteximg.com.br/arquivos/ids/1640381-1000-1000/EU2035LVC-4T_0.jpg?v=635792969234800000',
            title: 'Teste 5',
            description: 'Andrea nappa dusty pink',
            price: 'R$ 30,00',
            curtidas:0
        }
         
        updates[`/produtos/${five}`] = data;
        firebase.database().ref().update(updates)                    
        .then(success=>alert('sucesso'))
        .catch(erro=>alert('erro'+ erro))

      
        firebase.database().ref(`/produtos/${six}`)
        var updates = {};
        data=
        {
            id: 6,
            image: 'https://ae01.alicdn.com/kf/HTB1Tr1ePpXXXXamXVXXq6xXFXXX3/2018-Moda-Assistir-Mulheres-Pulseira-de-Rel-gio-de-Senhoras-Marca-de-Luxo-Colorido-rel-gio.jpg_640x640.jpg',
            title: 'Teste 6',
            description: 'Lain pop sky blue',
            price: 'R$ 70,00',
            curtidas:0
        }
         
        updates[`/produtos/${six}`] = data;
        firebase.database().ref().update(updates)                    
        .then(success=>alert('sucesso'))
        .catch(erro=>alert('erro'+ erro))
       

        firebase.database().ref(`/produtos/${seven}`)
        var updates = {};
        data=
        {
            id: 7,
            image: 'https://images-na.ssl-images-amazon.com/images/I/51nugJ3mO7L._UL1500_.jpg',
            title: 'Teste 7',
            description: 'Andrea nappa dusty pink',
            price: 'R$ 30,00',
            curtidas:0
        }
         
        updates[`/produtos/${seven}`] = data;
        firebase.database().ref().update(updates)                    
        .then(success=>alert('sucesso'))
        .catch(erro=>alert('erro'+ erro))
       

        firebase.database().ref(`/produtos/${eight}`)
        var updates = {};
        data=
        {
            id: 8,
            image: 'https://http2.mlstatic.com/blusa-frio-feminina-sueter-tricot-brilho-brilhante-listrada-D_NQ_NP_896163-MLB26627168074_012018-F.jpg',
            title: 'Teste 8',
            description: 'Lain pop sky blue',
            price: 'R$ 70,00',
            curtidas:0
        }
         
        updates[`/produtos/${eight}`] = data;
        firebase.database().ref().update(updates)                    
        .then(success=>alert('sucesso'))
        .catch(erro=>alert('erro'+ erro))
       

        firebase.database().ref(`/produtos/${nine}`)
        var updates = {};
        data=
        {
            id: 9,
            image: 'https://www.negociosemfoco.com/assets/newsimg/9fedefeb-7ce1-45fa-a1ce-b9c698198373.jpg',
            title: 'Teste 9',
            description: 'Andrea nappa dusty pink',
            price: 'R$ 30,00',
            curtidas:0
        }
         
        updates[`/produtos/${nine}`] = data;
        firebase.database().ref().update(updates)                    
        .then(success=>alert('sucesso'))
        .catch(erro=>alert('erro'+ erro))
       
        firebase.database().ref(`/produtos/${ten}`)
        var updates = {};
        data=
        {
            id: 10,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-2vJ44DuYpcSt3spRPYpn0PaklPvQvywEMJdHzny44ldhltg',
            title: 'Teste 10',
            description: 'Lain pop sky blue',
            price: 'R$ 70,00',
            curtidas:0
        }
         
        updates[`/produtos/${ten}`] = data;
        firebase.database().ref().update(updates)                    
        .then(success=>alert('sucesso'))
        .catch(erro=>alert('erro'+ erro))
       
       }
    }

