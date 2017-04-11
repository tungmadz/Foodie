
import React, { Component } from 'react';
import {
  AppRegistry,View
} from 'react-native';
import Router from './src/components/Router'

export default class Client extends Component {
  render() {
    return (
        <Router />
    )
  }
}



AppRegistry.registerComponent('Client', () => Client);
