/*-------Component to start a new maintenance report---------------------------*/
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, Linking } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';


class StartNewReport extends React.Component {

/*TEST QR CODE SCANNER*/
  constructor(){
    super();
    this.state ={
      QR_Code_Value: '',
      Start_Scanner: false,
    };
  }

  openLink_in_browser = () => {
    Linking.openURL(this.state.QR_Code_Value);
  }

  onQR_Code_Scan_Done = (QR_Code) =>{
    this.setState({QR_Code_Value: QR_Code});
    this.setState({Start_Scanner: false});
  }

  open_QR_Code_Scanner = ()=> {
    var that = this;
    if (Platform.OS === 'android'){

    } else{
      that.setState({QR_Code_Value:''});
      that.setState({Start_Scanner:true});
    }
  }

  render(){

    if (!this.state.Start_Scanner){

      return (
        <View>
          <View>
            <View style={styles.logoheader}>
              <Image
                source= {require('../logo.jpg')}
                style={{height:100}}
                />
            </View>


            <View style={styles.MainContainer}>
              <Text style={{fontSize:22, textAlign:'center'}}>QR Code Scanner</Text>
              <Text style={styles.QR_text}>
                {this.state.QR_Code_Value ? 'Scanned QR Code: ' + this.state.QR_Code_Value : ''}
              </Text>

              {this.state.QR_Code_Value.includes("http") ?
                <TouchableOpacity onPress={this.openLink_in_browser} style={styles.button}>
                  <Text> Open link in default Browser </Text>
                </TouchableOpacity> : null
              }

              <TouchableOpacity onPress={this.open_QR_Code_Scanner} style={styles.button}>
                  <Text> Open QR Code Scanner </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      );
    }
    return (
      <View style={{flex:1}}>
        <CameraKitCameraScreen
          showFrame={true}
          scanBarcode={true}
          laserColor={'#FF3D00'}
          frameColor={'#00C853'}
          colorForScannerFrame={'black'}
          onReadCode={event =>
            this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)
          }
        />
      </View>
    );
  }
}

/*------------------------STYLES ---------------------------------------------*/
const styles = StyleSheet.create({
  logoheader:{
    maxHeight:100,
  },
  MainContainer:{
    flex: 1,
    paddingTop:(Platform.OS) ==='ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  QR_text:{
    color: '#000',
    fontSize: 19,
    padding: 8,
    marginTop:12
  },
  button:{
    backgroundColor:'#2979FF',
    alignItems: 'center',
    padding: 12,
    width: 300,
    marginTop: 14
  },
});

export default StartNewReport;
