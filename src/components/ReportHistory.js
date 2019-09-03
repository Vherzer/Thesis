import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, Linking } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

class ReportHistory extends React.Component {
  render(){
    return (
      <View style={styles.logoheader}>
        <Image
          source= {require('../logo.jpg')}
          style={{height:100}}
          />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  logoheader:{
    maxHeight:100,
  },
});

export default ReportHistory;
