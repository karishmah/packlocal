import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import ItemList from './ItemsList'
import {bestSeller, essentials} from '../sampleData';
import SingleItem from './singleItem'
import { BorderlessButton } from 'react-native-gesture-handler';

export default class LocalTemplate extends Component {
  constructor (props) {
    super(props);
    this.state = {
      itemSelected: {},
      viewProduct: false,
      prevPage: 'home',
      currPage: 'location'
    }
  }
  
  onPressItem = (item) => {
    console.log(item);
    this.setState({itemSelected: item, viewProduct: true});
  };

  goPrev = () => {
    console.log('go to ',this.state.prevPage);
    this.setState({currPage: this.state.prevPage});
  }

  render() {
    return (
      <View>
        {this.state.viewProduct ? 
        <View>
          <SingleItem source={this.state.itemSelected} onPress={this.goPrev}/>
        </View>
      :
        <View>
          <Image style={styles.header} source={{uri:this.props.source.image}} />
          <TouchableOpacity style={styles.backArrow} onPress={this.goPrev.bind(this)}>
            <Entypo name="chevron-thin-left" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>{this.props.source.loc}</Text>
          <View style={styles.divider}></View>
          <Text style={styles.subtitle}> Best Sellers </Text>  
          <ItemList source={bestSeller} onPressItem={this.onPressItem}/>
          <Text style={styles.subtitle}> Indian Wedding Essentials </Text>  
          <ItemList source={essentials} onPressItem={this.onPressItem}/>
        </View>
          }
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backArrow: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  header:{
    width: 426, 
    height: 470,
    opacity: 0.9,
    backgroundColor: 'black',
  },
  title: {
    position: "absolute",
    textAlign: 'center',
    top: 260,
    left: 120,
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: '#7480ff',
    width: 426,
    height: 20,
    marginBottom:20
  },
  subtitle:{
    left: 25,
    color: '#7480ff',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5
  }
});
