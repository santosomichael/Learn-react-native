/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/App.js';
import FirstPage from './src/First-page.js';
import SecondPage from './src/Second-page.js';
import { StackNavigator } from 'react-navigation';


const aNavigation = StackNavigator({
  Home: { screen: App },
  FirstPage: { screen: FirstPage },
  SecondPage: { screen: SecondPage },
});

AppRegistry.registerComponent('aNavigation', () => aNavigation);
