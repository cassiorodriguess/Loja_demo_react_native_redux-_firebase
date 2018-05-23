import React,{Component} from 'react';
import {View} from 'react-native';
import Routes from './src/Navigators/Navigations';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './src/Reducers';
import firebase from 'firebase';

class App extends Component {
  
  componentWillMount(){
   // Initialize Firebase
   var config = {
   // credenciais firebase
  };
  firebase.initializeApp(config);
}
  render(){
    console.disableYellowBox = true;
    return(
      <Provider store={createStore(Reducers,{},applyMiddleware(ReduxThunk))}>
        <Routes/>
      </Provider>
    );
  }
}

export default App;
