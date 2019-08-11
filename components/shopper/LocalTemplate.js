import React, { Component } from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import ItemList from './ItemsList'
import {bestSeller, essentials} from '../sampleData';
import { BorderlessButton } from 'react-native-gesture-handler';

export default class LocalTemplate extends Component {
  constructor (props) {
    super(props);
    this.state = {
      itemSelected: {},
      viewProduct: false,
      previousPage: 'home'
    }
  }
  
  onPressItem = (item) => {
    console.log(item);
    this.setState({itemSelected: item, viewProduct: true});
  };

  render() {
    return (
      <View>
        <Image style={styles.header} source={{uri:this.props.source.image}} />
        <Text style={styles.title}>{this.props.source.loc}</Text>
        <View style={styles.divider}></View>
        <Text style={styles.subtitle}> Best Sellers </Text>  
        <ItemList source={bestSeller} onPressItem={this.onPressItem}/>
        <Text style={styles.subtitle}> Indian Wedding Essentials </Text>  
        <ItemList source={essentials} onPressItem={this.onPressItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    width: 426, 
    height: 470,
    opacity: 0.9,
    backgroundColor: 'black',
  },
  title: {
    textAlign: 'center',
    top: -200,
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
  },
  divider: {
    top: -50,
    backgroundColor: '#7480ff',
    width: 426,
    height: 20,
  },
  subtitle:{
    left: 25,
    color: '#7480ff',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5
  }
});
