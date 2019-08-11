import React, { Component } from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import ItemList from './ItemsList'
import {list} from '../sampleData';

export default class LocalTemplate extends Component {
  constructor (props) {
    super(props);
  }
  
  render() {
    
    return (
      <View style={styles.container}>
        <Image style={styles.header} source={{uri:this.props.source.image}} />
        <Text style={styles.title}>{this.props.source.loc}</Text>
        <Text style={styles.subtitle}> Best Sellers </Text>  
        <ItemList source={list[0]} />
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
