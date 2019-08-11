import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';
const Shopper = require('./components/shopper/test');
const Splash = require('./components/splash/screen');

const MainNavigator = createSwitchNavigator({
  Home: {screen: Shopper},
  Splash: Splash,
}, {
  initialRouteName: 'Splash'
});

const App = createAppContainer(MainNavigator);

export default App;
