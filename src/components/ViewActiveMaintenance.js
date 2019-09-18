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
            style={{width: '120%', alignSelf: 'flex-start',resizeMode: 'contain'}}
            />
        </View>

        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('home')}>
            <Text style={{color:'#FFFFFF', borderWidth: 3, borderColor: '#DE2222', borderRadius:15, textAlign: 'center', height: 30, width: 90, fontSize: 16,  }}> &lt; Zurück</Text>
          </TouchableOpacity>
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
    marginTop: 20,
    marginBottom: 80
  },
  allmaintenanceContainer:{
    backgroundColor: "#252525"
  }
});

export default ViewActiveMaintenance;
