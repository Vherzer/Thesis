import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, Linking } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

class ReportHistory extends React.Component {
  render(){
    return (
      <View style={styles.ReportHistoryContainer}>
        <View style={styles.logoheader}>
          <Image
            source= {require('../logo.jpg')}
            style={{height:100}}
            />
        </View>
        <Text style={{fontSize:22, textAlign:'center', color: '#FFFFFF', paddingTop: 15}}>Berichtsverlauf</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  logoheader:{
    maxHeight:100,
  },
  ReportHistoryContainer:{
    backgroundColor: "#252525"
  }
});

export default ReportHistory;
