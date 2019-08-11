import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ItemsTemplate extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.header} source={this.props.source.img} />
        <Text style={styles.title}>{this.props.source.location}</Text>
        <Text style={styles.subtitle}> Top Souvenirs </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{

  }
});
