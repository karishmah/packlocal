import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LocalTemplate from './components/shopper/LocalTemplate';
import {locationData} from './components/sampleData';

//home page 
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>template sample for location</Text>
        <LocalTemplate source={locationData.tokyo} />
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
