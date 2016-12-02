import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';

export default class ListViewHome extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const images = ['https://raw.githubusercontent.com/wpapper/Our-Story-CS-147/master/OurStory/grid/images/faces/viewing.jpg', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin']
    const titles = ['A Buddy System', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin']
    const miles = ['0.1 miles', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin']
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
      images,
      titles,
      miles
    });
    let rows = [];
    for (let i = 0; i < images.length; i++) {
      rows.push({
        image: images[i],
        title: titles[i],
        miles: miles[i],
      });
    }
    this.state = {
      dataSource: ds.cloneWithRows(rows)
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableHighlight onPress={() => this.onPressButton(rowData.title)} underlayColor="#DDF8F9">
              <View style={styles.row}>
                <Image source={{uri: rowData.image}} style={styles.rowImage}/>
                <View style={styles.rowText}>
                  <Text style={styles.rowTextLarge}>{rowData.title}</Text>
                  <View>
                    <Text style={styles.rowTextLarge}>{rowData.miles}</Text><Text style={styles.rowTextSmall}>miles</Text>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
            }
        />
      </View>
    );
  }
  onPressButton(title) {
    Alert.alert('Grid item clicked', title);
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 0,
    backgroundColor: '#293240'
  },
  rowImage: {
    width: 360,
    height: 100,
  },
  rowText: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowTextLarge: {
    fontSize: 18,
    color: '#4ECDC4',
  },
  rowTextSmall: {
    fontSize: 12,
    color: '#4ECDC4',
  },
});

// App registration and rendering
AppRegistry.registerComponent('ListViewHome', () => ListViewHome);
