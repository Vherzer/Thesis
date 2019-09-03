import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, Linking } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';


class ViewActiveMaintenance extends React.Component {
  render(){
    return (
      <View>
        <View style={styles.logoheader}>
          <Image
            source= {require('../logo.jpg')}
            style={{height:100}}
            />
        </View>
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
});

export default ViewActiveMaintenance;
