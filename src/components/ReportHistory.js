import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, TextInput, Linking } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Form from 'react-native-form';
import { Item, Label, Input, } from 'native-base';
import app from './db';
import firebase from 'firebase';
import SignaturePad from 'react-native-signature-pad';


class ReportHistory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signature: "",
     };
     this.itemsRef = firebase.database().ref().child(`reports`)
  }

  pushToFirebase() {
    let formValues = this.refs.itemForm.getValues()
    formValues.signature = this.state.signature
    if(formValues.dateCreated === "" || formValues.DateCompleted === "" || formValues.signature === "") {
      console.log("Not all fields in the form are populated.")
    } else {
      this.itemsRef.push(formValues)
      this.setState({
        isSaved: true
      })
    }
  }
  signaturePadChange = ({base64DataUrl}) => {
      this.setState({
        signature: base64DataUrl
      })
    };

    signaturePadError = (error) => {
      console.error(error);
    };


  render(){
    return (
      <View style={styles.ReportHistoryContainer}>
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
          <Text style={{fontSize:22, textAlign:'center', color: '#FFFFFF'}}>Berichtsverlauf</Text>
        </View>
        {this.state.isSaved ? <View><Text style={styles.message}> Unterschrift gespeichert</Text></View> :
        <View style={styles.lgreycontainer}>


          <Form ref="itemForm" style={styles.form} >
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Datum erstellt:</Label>
              <Input style={styles.input} name="dateCreated" type="TextInput" />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Datum abgeschlossen:</Label>
              <Input style={styles.input} name="DateCompleted" type="TextInput" />
            </Item>
            <View style={styles.signature}>
              <Label style={styles.signatureLabel}>Signature</Label>
                <SignaturePad
                  onError= {this.signaturePadError}
                  onChange={this.signaturePadChange}
                  style={styles.signaturePad}
                  />
            </View>
            <TouchableOpacity Block primary onPress={() => this.pushToFirebase()} style={styles.button}><Text style={styles.buttonText}>Hinzufügen</Text></TouchableOpacity>
          </Form>

        </View>}
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
  ReportHistoryContainer:{
    backgroundColor: "#252525"
  },
  lgreycontainer:{
    backgroundColor: "#D8DBE3",
    height: 550,
    width: 330,
    alignSelf: 'center',
    marginTop: 20,
    padding: 20
  },
  buttonText:{
    fontSize: 17,
    color: 'white',
    alignSelf: 'center'
  },
  button:{
    height: 45,
    width: 100,
    flexDirection: 'row',
    backgroundColor: '#FD7E14',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 40,
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  label: {
    marginLeft: 15
  },
  input: {
    marginLeft: 25
  },
  item: {
    marginTop:10
  },
  signature:{
   width: '100%',
   height: 150,
 },
 signaturePad: {
   flex:1,
   margin: 10,
   backgroundColor: '#eee',
 },
 signatureLabel: {
   marginLeft: 15, marginTop: 15
 },
 message:{
   alignSelf: 'center',
   fontSize: 30,
   borderColor: 'black',
   borderWidth: 1,
   width: '50%',
   textAlign:'center'
 }
});

export default ReportHistory;
