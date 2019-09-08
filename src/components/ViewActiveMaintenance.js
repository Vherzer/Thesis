/*-------Component to view items currently in maintenance-----------------------*/
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, Linking } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
//import 'Database.js' from '../../Database.js'

const admin = require('firebase-admin');

let serviceAccount = require('../../sfk-app-60b018debbb2.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();


let docRef = db.collection('users').doc('vikiherzer');
let setViki = docRef.set({
  first: 'viki',
  last: 'herzer'
});

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

/*------------------------STYLES ---------------------------------------------*/
const styles = StyleSheet.create({
  logoheader:{
    maxHeight:100,
  },
});

export default ViewActiveMaintenance;
