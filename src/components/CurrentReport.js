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
      <View style={styles.currentreportContainer}>
        <View style={styles.logoheader}>
          <Image
            source= {require('../logo.jpg')}
            style={{width: '120%', alignSelf: 'flex-start',resizeMode: 'contain'}}
            />
        </View>

        <Text style={{fontSize:22, textAlign:'center', color: '#FFFFFF', paddingTop: 15}}>Scannen Sie den QR-Code</Text>

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



const styles = StyleSheet.create({
  logoheader:{
    maxHeight:100,
    marginTop: 20,
    marginBottom: 80
  },
  list:{
    marginVertical: 50,
    color: "#FFFFFF",
  },
  currentreportContainer:{
    backgroundColor: "#252525"
  }
});

export default CurrentReport;
