import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, Linking, FlatList } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

/*------------------------ Current Report Class ------------------------------*/
class CurrentReport extends React.Component {
  render(){
    return (
      <View style={styles.currentreportContainer}>
        <View style={styles.logoheader}>
          <Image
            source= {require('../logo.jpg')}
            style={{width: '120%', alignSelf: 'flex-start',resizeMode: 'contain'}}
            />
        </View>

        <View>
          <TouchableOpacity style={{paddingLeft: '5%', justifyContent: 'center'}} onPress={() => this.props.navigation.navigate('home')}>
            <Text style={{color:'#FFFFFF', borderWidth: 3, borderColor: '#DE2222', borderRadius:15, textAlign: 'center', height: 30, width: 80, fontSize: 16, padding:'0.5%' }}> &lt;Zurück</Text>
          </TouchableOpacity>
        </View>

        <Text style={{fontSize:22, textAlign:'center', color: '#FFFFFF', paddingTop: 15}}>Scannen Sie den QR-Code</Text>

        <View>
        </View>
      </View>
    );
  }
}

/*-------------------------------Stylesheet-------------------------------------*/

const styles = StyleSheet.create({
  logoheader:{
    maxHeight:100,
    marginTop: 20,
    marginBottom: 80
  },
  currentreportContainer:{
    backgroundColor: "#252525"
  }
});

export default CurrentReport;
