
import {LISTACURTIDASLOGADO} from '../contants';

const  INITIAL_STATE = {};

export default (state=INITIAL_STATE,action) =>{

    switch(action.type){
     
    case LISTACURTIDASLOGADO:
    
    return action.payload;    
        
    default:return state;
        
    }    
    
}