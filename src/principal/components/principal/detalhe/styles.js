import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    atitle: {
      flexDirection: 'row',
      marginRight: 10,
      marginTop: 10,
      width: 450,
      alignItems:'center',
      marginLeft:15
    },
    info: {
      flexDirection: 'row',
      borderTopWidth:1,
      borderColor:'#ccc',
      height:120,
      justifyContent:'space-around',
      alignItems:'center',
      marginTop:20
    },
    curtidas: {
      width: 150,
      height: 150,
      backgroundColor: '#000',
      flexDirection: 'row'
    },
     envolveCurtidas:{
      width:80,
      flexDirection:'row',
      alignItems:'center',
    }, 
    envolveComents:{
      width:80,
      flexDirection:'row',
      alignItems:'center',
    },
    containerInfo: {
      height: 150,
      marginTop: 20,
      alignItems: 'flex-end',
      padding: 10
    },
    title: {
      fontSize: 23,
      marginLeft: 12,
      fontWeight:'200'
    },
    aprice: {
      marginRight: 30,
      marginTop: 20,
      height: 50
    },
    price: {
      textAlign: 'right',
      fontSize: 30,
      color: '#ff3a37'
    },
    desc: {
      fontSize: 19
    },
    //Comentarios
    form:{
    borderColor:'#ff3a37',
    backgroundColor:'#eee',
    padding:10,
    borderRadius:13,
    paddingBottom:20,
    },   
    buttonEnviar:{
    height:70,
    width:150,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20 ,
    },
    comentario:{
    marginTop:20,    
    backgroundColor:'#eee',
    padding:20,
    borderRadius:10
    }

  
  });

export default styles;
