import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default class SingleItem extends Component {
  constructor (props) {
    super(props);

    this.state = {
        index: 0
    }
  }

  render() {
    return (
<View>
    <TouchableOpacity style={styles.backArrow} onPress={this.props.onPress}>
            <Entypo name="chevron-thin-left" size={30} color="#A9A9A9" />
    </TouchableOpacity>
    {/* <TouchableOpacity style={styles.cart} onPress={this.goPrev.bind(this)}>
            
    </TouchableOpacity> */}
     <View style={styles.divider}></View>  
      <View  style={styles.center}>
      {console.log(this.props.source)}
        <Image style={styles.img} source={{uri: this.props.source.image[this.state.index]}} />
        <View style={styles.prevButton}></View>
        <View style={styles.nextButton}></View>
      </View>
    <Text> {this.props.source.descriptions[this.state.index]} </Text>
    <Text> {this.props.source.care[this.state.index]} </Text>
    <TouchableOpacity style={styles.addCart} onPress={()=>{console.log('added')}}>
          <Text> + Add to Bag </Text>
    </TouchableOpacity>
</View>
    );
  }
}

const size =  Dimensions.get('window').width;

const styles = StyleSheet.create({
backArrow:{
    position: "absolute",
    top: 45,
    left: 20,
},
center: {
    alignItems: 'center',
},
img: {
    top: 100,
    width: size*0.6, 
    height: size*.8,
 },
 prevButton: {
    marginTop: 110,
    left: -10,
    padding: 5,
    height: 10,
    width: 10,
    borderRadius: 20,
    backgroundColor: '#7480ff'
 },
 nextButton: {
    marginTop: -10,
    left: 10,
    padding: 5,
    height: 10,
    width: 10,
    borderRadius: 20,
    backgroundColor: '#7480ff'
 },
 divider: {
    top: 90,
    backgroundColor: '#7480ff',
    width: size,
    height: 10,
    marginBottom:20
  }
});