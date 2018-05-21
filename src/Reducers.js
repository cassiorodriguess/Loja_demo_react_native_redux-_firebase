import {combineReducers} from 'redux';
import ReducerLogin from './login/reducers/ReducerLogin';
import ReducerCadastro from './cadastro/reducers/ReducerCadastro';
import ReducerPrincipal from './principal/reducers/ReducerPrincipal';
import ListaCurtidasReducer from './principal/reducers/ListaCurtidasReducer';
import DetalheReducer  from './principal/components/principal/detalhe/reducers/DetalheReducer';
import NavReducer from './Navigators/navReducer';
export default combineReducers({
ReducerLogin,
ReducerCadastro,
ReducerPrincipal,
ListaCurtidasReducer,
DetalheReducer,
nav:NavReducer    
});