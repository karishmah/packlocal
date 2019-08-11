import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

const TWO_SECONDS = 2000;


//home page
class Splash extends Component {
  componentDidMount() {
    // When mounted, wait one second, then navigate to App
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, TWO_SECONDS);
  }

  render() {
    return (
      <View
        style={{
          justifyContent:'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <Image
          style={{
            width: 222,
            height: 171,
          }}
          source={require('../images/Group.png')} />
      </View>
    );
  }
}

module.exports = Splash;
