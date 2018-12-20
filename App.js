import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Main from './components/Main'
import { LinearGradient, Constants  } from 'expo';
import { primaryGradientArray } from './utils/Colors';

export default class App extends React.Component {
  render() {
    return (
        <Main />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: "#C2185B",
    height: Constants.statusBarHeight,
  }
});
