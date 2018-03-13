import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './routes/Stack'
import {Header} from 'react-native-elements'
import {Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Reducer from './reducer/reducers'
import thunk from 'redux-thunk'

const store = createStore(Reducer, applyMiddleware(thunk))

export default class App extends Component {
  render() {
    return (
        
        <View style={styles.container}>
          <View style={styles.bar}></View>
          <Provider store={store}>
          <RootStack/>
          </Provider>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  bar:{
    width: '100%',
    height:24,
   backgroundColor: '#9C27B0'
  }
  
});
