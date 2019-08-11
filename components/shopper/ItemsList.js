import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ItemsList extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {console.log('item== ',this.props.source.image)}
      <Image style={styles.image} source={{uri: this.props.source.image}} />
      <Text style={styles.title}>{this.props.source.title}</Text>
<Text style={styles.options}>{this.props.source.options}</Text>
<Text style={styles.rating}>{this.props.source.rating}</Text>
<Text style={styles.price}> ${this.props.source.price}</Text>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    
  },
  image:{
    width: 200, 
    height: 200 
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



// const numColumns = 2;
// const size = Dimensions.get('window').width/numColumns;
// const styles = StyleSheet.create({
//   itemContainer: {
//     width: size,
//     height: size,
//   },
//   item: {
//     flex: 1,
//     margin: 3,
//     backgroundColor: 'lightblue',
//   }
// });

// function Grid(props) {
//   return (
//     <FlatList
//       data={props.data}
//       renderItem={({item}) => (
//         <View style={styles.itemContainer}>
//           <Text style={styles.item}>{item.value}</Text>
//         </View>
//       )}
//       keyExtractor={item => item.id}
//       numColumns={numColumns} />
//   );
// }
