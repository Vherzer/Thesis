import React, { Component } from 'react';
import { AppRegistry, SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, Linking } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import QRCodeScanner from 'react-native-qrcode-scanner';


class StartNewReport extends Component {

/*TEST QR CODE SCANNER*/
  onSuccess = (e) => {
    Linking
    .openURL(e.data)
    .catch(err => console.error('an error occured'));
  }

  render(){
      return (
        <View style={styles.startnewreportContainer}>
          <View>
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

            <Text style={{fontSize:22, textAlign:'center', color: '#FFFFFF', paddingTop: 15}}>Scannen Sie den QR-Code</Text>

            <View style={styles.MainContainer}>
              <QRCodeScanner
                onRead={this.onSuccess}
                topContent={
                  <Text style={styles.centerText}>
                    Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
                  </Text>
                }
                bottomContent={
                  <TouchableOpacity style={styles.buttonTouchable}>
                    <Text style={styles.buttonText}>OK. Got it!</Text>
                  </TouchableOpacity>
                }
              />
            </View>

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
  MainContainer:{
    flex: 1,
    paddingTop:(Platform.OS) ==='ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2B2B2B'
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
  startnewreportContainer:{
    backgroundColor: "#252525"
  }
});

export default StartNewReport;
