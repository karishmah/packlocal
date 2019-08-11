import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import * as Font from 'expo-font';
import Tiles from "react-native-tiles";

//home page
class Shopper extends Component {
  constructor() {
    super()

    this.state = {
      width: Dimensions.get('window').width
    }
  }

  state = {
    search: '',
  };
  componentDidMount() {
    // Font.loadAsync({
    //   'Inter': require('../assets/Inter-3.9/Inter (TTF)/Inter-Regular.otf'),
    // });
  }

  render() {
    const { search } = this.state;
    const { width } = this.state;

    return (
      <View
        style={{ height: '100%'}}
      >
        <View
          style={{
            position: 'absolute',
            left: '10.67%',
            right: '24%',
            top: '10%',
          }}
          >
          <SearchBar
            placeholder="Type Here..."
            lightTheme
            // onChangeText={this.updateSearch}
            value={search}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top:'20%',
            left: '10.67%',
          }}
        >
          <Text
            style={{
              // fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: 30,
              lineHeight: 36,
              textAlign: 'left',
            }}>
            Where do you want to shop today?
          </Text>
        </View>
        <View style={{
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          backgroundColor: '#ecf0f1'
        }}>
          <Tile
            width={width/3}
            featured
            caption="1"
          />
          <Tile
            width={width/3}
            featured
            caption="2"
          />
          <Tile
            width={width/3}
            featured
            caption="3"
          />
          <Tile
            width={width/3}
            featured
            caption="4"
          />
        </View>
      </View>
    );
  }
}

module.exports = Shopper;
