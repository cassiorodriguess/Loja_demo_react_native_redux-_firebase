import React from 'react';


const Tabheader = () =>{
        
    return(
          <View style={{backgroundColor:'#212022',flexDirection:'row',alignItems:'center',height:120}}>
          <View style={{alignItems:'flex-start',marginLeft:20}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('DrawerOpen')}>
                  <Icon name="md-menu" size={35} style={{ color: '#ff3a67' }} />
              </TouchableOpacity>
          </View>               
      <Text style={{color:'#ff3a67',marginLeft:30,fontSize:30}}>ELLAS</Text>
      </View>
   
 );    

}

export default Tabheader;