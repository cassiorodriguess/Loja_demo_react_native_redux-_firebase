
import AppNavigation from './routers';
import { NavigationActions } from 'react-navigation';
import {LOGIN_USUARIO_SUCESSO} from '../login/constants';
import { CADASTRO_USUARIO_SUCESSO } from '../cadastro/constants';


const navReducer = (state, action) => {
  
  let nextState;
  
  switch(action.type){

      case  LOGIN_USUARIO_SUCESSO:
      nextState = AppNavigation.router.getStateForAction(
      NavigationActions.navigate({ routeName:'Loja'}),
      state
      );
      break;
      
      case CADASTRO_USUARIO_SUCESSO:
      nextState = AppNavigation.router.getStateForAction(
      NavigationActions.navigate({routeName:'Login'}),
      state  
      );
      break;
 }
 nextState = AppNavigation.router.getStateForAction(action, state)
 return nextState || state
}
export default navReducer;

