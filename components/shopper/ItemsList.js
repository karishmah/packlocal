import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity} from 'react-native';
import { bundleDirectory } from 'expo-file-system';

export default class ItemsList extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.source}
          renderItem={({item}) => (
            <TouchableOpacity onPress={()=>{this.props.onPressItem(item)}}>     
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: item.image[0]}} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.options}>{item.options}</Text>
                <Text style={styles.price}> ${item.price}</Text>
            </View>
            </TouchableOpacity> 
          )}
          keyExtractor={(item, index) => index}
          numColumns={numColumns}
        />
      </View>
      
    );
  }
}

const numColumns = 2;
const size = Dimensions.get('window').width/numColumns;

const styles = StyleSheet.create({
  list:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  container:{
    width: size*0.9,
    height: size*1.8,
    padding: 5,
    margin: 2,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width: size*.8, 
    height: size*1.5,
    padding: 15,
    margin: 10,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 12
  },
  options:{
    fontSize: 10
  },
  price:{
    fontWeight: 'bold',
    fontSize: 10
  }
});