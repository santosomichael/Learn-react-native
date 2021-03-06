/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { NavigationActions } from 'react-navigation'

export default class aNavigation extends Component {
  static navigationOptions = {
    title: 'HOME',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home page
        </Text>
        <Button 
          onPress={()=>navigate("FirstPage", {})}
          title="To first page"
        />
        <Button 
          onPress={()=>navigate("SecondPage", {})}
          title="To second page"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
