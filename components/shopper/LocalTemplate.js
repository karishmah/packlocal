import React, { Component } from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';


export default class LocalTemplate extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      {console.log('source: ', this.props.source.image)}
      <Image style={styles.header} source={{uri:this.props.source.image}} />
      <Text style={styles.title}>{this.props.source.loc}</Text>
      <Text style={styles.subtitle}> Top Souvenirs </Text>  
      <Text style={styles.subtitle}> Description for tokyo </Text>  
      {
        //map list of items for each particular location
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    width: 200, 
    height: 200 
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
