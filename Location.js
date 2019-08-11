import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LocalTemplate from './components/shopper/LocalTemplate';
import {locationData} from './components/sampleData';

//home page 
export default class Location extends Component {
  render() {
    return (
      <View >
        <ScrollView style={styles.container}>
          <LocalTemplate source={locationData.mumbai} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  }
});
