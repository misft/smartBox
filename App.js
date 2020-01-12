import React, {Component} from 'react';
import Navigator from './Navigator';
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Login } from './Login';

export default class App extends React.Component {
  render() {
    return (
      <Navigator/>
    );
  }
}

const styles = StyleSheet.create({
  badge: {
    padding: 4,
  },
  bgDanger: {
    backgroundColor: '#FF6978', 
  },
  bgSuccess: {
    backgroundColor: 'green',
  },
  bgPrimary: {
    backgroundColor: '#13D667'
  },
  bgSecondary: {
    backgroundColor: '#01BAEF'
  },
  bgDark: {
    backgroundColor: '#272D2D',
  },
  container: {
    padding: 10,
  },
  textWhite: {
    color: 'white',
  },
  rounded: {
    borderRadius: 15,
  },
  roundedLg: {
    borderRadius: 25,
  },
});
