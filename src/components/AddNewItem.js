import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, Linking } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

class AddNewItem extends React.Component {
  render(){
    return (
      <View style={styles.addnewitemsContainer}>
        <View style={styles.logoheader}>
          <Image
            source= {require('../logo.jpg')}
            style={{height:100}}
            />
        </View>
        <Text style={{fontSize:22, textAlign:'center',color: '#FFFFFF', paddingTop: 15}}>Scannen Sie den QR Code</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoheader:{
    maxHeight:100,
  },
  addnewitemsContainer:{
    backgroundColor: "#252525",
  }
});

export default AddNewItem;
