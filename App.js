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
    apiKey: "AIzaSyDylMuDS2OPd35faL0iPkr9TdobF5O1b3w",
    authDomain: "appteste-react.firebaseapp.com",
    databaseURL: "https://appteste-react.firebaseio.com",
    projectId: "appteste-react",
    storageBucket: "appteste-react.appspot.com",
    messagingSenderId: "920732183715"
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
