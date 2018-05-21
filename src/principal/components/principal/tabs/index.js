import React, { Component } from 'react';

import { View,Alert,TouchableOpacity} from 'react-native';

import styles from './styles';

import Icon  from 'react-native-vector-icons/FontAwesome';

import {Actions} from 'react-native-router-flux';

export default class Tabs extends Component {

  EmBreve(){
  Alert.alert(
  'Em breve novas funcionalidades','Aproveite curta nossos produtos'
  );
  }
  render() {
    return (
    <View style={styles.container}>    
    <TouchableOpacity onPress={()=>this.EmBreve()}>
      <Icon name="clone" size={25} style={styles.icon}/>
    </TouchableOpacity>
    <TouchableOpacity>
    <Icon name="search" onPress={()=>this.EmBreve()} size={25} style={styles.icon}/>
    </TouchableOpacity>
    <TouchableOpacity>
     <View style={styles.main}>
        <Icon name="plus" onPress={()=>Actions.menu()}size={35} style={styles.mainicon}/>
     </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>this.EmBreve()}>
      <Icon name="bell-o" size={25} style={styles.icon}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>this.EmBreve()}>
    <Icon name="user-o" size={25} style={styles.icon}/>
    </TouchableOpacity>
  </View>
    );
  }
}
