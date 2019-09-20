import React, { Component } from 'react';
import { AppRegistry, SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, Linking } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import QRCodeScanner from 'react-native-qrcode-scanner';

/*------------------------ Help button Class ------------------------------*/
class HelpButton extends Component {

  onSuccess = (e) => {
      Linking
        .openURL(e.data)
        .catch(err => console.error('An error occured', err));
  }

  render(){
      return (
        <View style={styles.helpContainer}>
          <View>
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

            <View style={styles.MainContainer}>
              <QRCodeScanner
                onRead={this.onSuccess}
              />
            </View>

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
  MainContainer:{
    flex: 1,
    flexDirection:'row',
    paddingTop:(Platform.OS) ==='ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#252525'
  },
  centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777',
    },
    textBold: {
      fontWeight: '500',
      color: '#000',
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
      padding: 16,
    },
  helpContainer:{
    backgroundColor: "#252525",
    height: '100%'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default HelpButton;
