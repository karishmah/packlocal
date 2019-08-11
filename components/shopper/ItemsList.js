import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList} from 'react-native';
import { bundleDirectory } from 'expo-file-system';

export default class ItemsList extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <FlatList 
        data={this.props.source}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.image}} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.options}>{item.options}</Text>
            <Text style={styles.rating}>{item.rating}</Text>
            <Text style={styles.price}> ${item.price}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index}
        numColumns={numColumns}
      />
      
    );
  }
}

const numColumns = 2;
const size = Dimensions.get('window').width/numColumns;

const styles = StyleSheet.create({
  container:{
    width: size,
    height: size,
    padding: 10,
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row'
  },
  image:{
    width: size*.5, 
    height: size *.8,
    padding: 15,
    margin: 10,
    backgroundColor: 'yellow'
  },
  title:{

  },
  options:{

  },
  rating:{

  },
  price:{

  }
});