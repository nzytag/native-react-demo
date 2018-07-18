import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDvqrTpHYqntxd-xPnYjwKP8mFShLeEST4',
      authDomain: 'authreactnative-demo.firebaseapp.com',
      databaseURL: 'https://authreactnative-demo.firebaseio.com',
      projectId: 'authreactnative-demo',
      storageBucket: 'authreactnative-demo.appspot.com',
      messagingSenderId: '652595162182'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
          <LoginForm />
      </View>
    );
  }
}

export default App;