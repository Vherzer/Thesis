/*-------Component to return to a previously started report-------------------*/
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, Linking, FlatList } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';


class CurrentReport extends React.Component {
  render(){
    const test = [
      {id: '1', type: 'FE'},
      {id: '2', type: 'FE'},
      {id: '3', type: 'FE'},
      {id: '4', type: 'FE'},
      {id: '5', type: 'FE'},
    ];

    return (
      <View>
        <View style={styles.logoheader}>
          <Image
            source= {require('../logo.jpg')}
            style={{height:100}}
            />
        </View>
        <View>
          <FlatList
            keyExtractor={test => test.id}
            data={test}
            renderItem={({item}) => {
              return <Text style={styles.list}> {item.id} - Type: {item.type}</Text>
            }}
          />
        </View>
      </View>
    );
  }
}


/*------------------------STYLES ---------------------------------------------*/
const styles = StyleSheet.create({
  logoheader:{
    maxHeight:100,
  },
  list:{
    marginVertical: 50
  }
});

export default CurrentReport;
