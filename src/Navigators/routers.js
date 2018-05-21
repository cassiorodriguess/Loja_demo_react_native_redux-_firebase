import React  from 'react';
import Login from '../login/components/login';
import Cadastro from '../cadastro/components/cadastro';
import Inicio from   '../menu';
import Principal from '../principal/components/principal';
import Detalhe from '../principal/components/principal/detalhe/components/detalhe';
import DrawerContainer from './DrawerContainer';
import { StackNavigator, DrawerNavigator } from 'react-navigation';



const DrawerStack = DrawerNavigator({

  Inicio: { screen: Inicio},
  Loja: { screen: Principal},
  Login:{ screen: Login},
  Cadastro: { screen: Cadastro},
  Detalhe: { screen: Detalhe},

}, {

  contentComponent: DrawerContainer,
  initialRouteName:'Inicio',
  drawerPosition:'left',
  drawerWidth:350,
  contentOptions:{
  activeTintColor:'#ff3a67',
  activeBackgroundColor:'#3d3c3e',
  inactiveTintColor:'#fff'
  }
})

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  navigationOptions: ({navigation}) => ({
  header:null
   })
})

export default DrawerNavigation;
