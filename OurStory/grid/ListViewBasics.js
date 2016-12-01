import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View, StyleSheet, Image } from 'react-native';

export default class ListViewBasics extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const images = ['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin']
    const titles = ['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin']
    const miles = ['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin']
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
      images,
      titles,
      miles
    });
    this.state = {
      dataSource: ds.cloneWithRows({images, titles, miles}, ['images', 'titles', 'miles'])
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View style={styles.row}>
              <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={styles.rowImage}/>
              <View style={styles.rowText}>
                <Text style={styles.rowTitle}>A Buddy System</Text>
                <Text style={styles.rowMiles}>.1 miles</Text>
              </View>
              <Text>{rowData.titles}</Text>
            </View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    marginBottom: 5,
    flex: 0
  },
  rowImage: {
    width: 360,
    height: 100,
  },
  rowText: {
    flexDirection: 'row',
  },
  rowTitle: {
    textAlign: 'left',
  },
  rowMiles: {
    textAlign: 'right',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  }
});

// App registration and rendering
AppRegistry.registerComponent('ListViewBasics', () => ListViewBasics);
