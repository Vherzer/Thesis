import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, Linking } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';


class ViewActiveMaintenance extends React.Component {
  render(){
    return (
      <View style={styles.allmaintenanceContainer}>
        <View style={styles.logoheader}>
          <Image
            source= {require('../logo.jpg')}
            style={{height:100}}
            />
        </View>
        <Text style={{fontSize:22, textAlign:'center', color: '#FFFFFF', paddingTop: 15}}>Aktive Wartung</Text>
        <Button
          onPress={() => console.log('testing')}
          title="testttinngggg"
        />
        <TouchableOpacity onPress={() => console.log('list pressed')}>
          <Text style={{color:'red'}}> HEYY </Text>
        </TouchableOpacity>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  logoheader:{
    maxHeight:100,
  },
  allmaintenanceContainer:{
    backgroundColor: "#252525"
  }
});

export default ViewActiveMaintenance;
