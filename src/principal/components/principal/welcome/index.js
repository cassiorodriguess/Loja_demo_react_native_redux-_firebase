import React from 'react';

import { View,Text,ImageBackground,TouchableOpacity } from 'react-native';

import styles from './styles';

import {Actions} from 'react-native-router-flux';

const welcome = () => (

<ImageBackground style={styles.bkg} source={require('./imgs/img.jpg')}>
    
        <View style={{justifyContent:'center',flex:1}}>
    
                <View style={styles.topo}>

                    <Text style={{fontSize:25,color:'#ffffff',textAlign:'center'}}>Aproveite nossas promoções</Text>
                
                </View>
                
                <View style={{marginTop:80,padding:20}}>
                
                    <TouchableOpacity style={styles.Login} onPress={()=>Actions.login()}>     
                            <Text style={{color:'#ffffff',fontSize:20,textAlign:'center'}}>Logar agora !</Text>
                    </TouchableOpacity>

                </View>
            </View>
</ImageBackground>
);

export default welcome;
