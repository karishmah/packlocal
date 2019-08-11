import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import { SearchBar, Tile } from 'react-native-elements';
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
          top: '70%',
          flexDirection: 'row',
          flex: 1,
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          }}>
          <View style={{
            // height: 200,
            // width: 100,
            // padding: 10,
          }}>
            <Tile
              imageSrc={require('../images/Paris.png')}
              title="Paris"
              width={width/2}
              height={200}
              contentContainerStyle={{ height: 50 }}>
            </Tile>
           </View>
           <View style={{
             // height: 200,
             // width: 100,
             // padding: 30,
           }}>
             <Tile
               imageSrc={require('../images/Japan.png')}
               title="Japan"
               width={width/2}
               height={200}
               contentContainerStyle={{ height: 50 }}>
             </Tile>
            </View>
          <Tile
            width={width/2}
            featured
            caption="3"
          />
          <Tile
            width={width/2}
            featured
            caption="4"
          />
        </View>
      </View>
    );
  }
}

module.exports = Shopper;
