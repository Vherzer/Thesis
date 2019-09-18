import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, TouchableOpacity, TouchableHighlight, TextInput, Linking, Alert } from 'react-native';
import { Item, Label, Input, Button,} from 'native-base';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Form from 'react-native-form';
import app from './db';
import firebase from 'firebase';

class AddNewItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
     };
     this.itemsRef = firebase.database().ref().child(`items`)
  }

  pushToFirebase() {
    let formValues = this.refs.itemForm.getValues()
    if(formValues.type === "" || formValues.itemNumber === "" || formValues.floor === ""|| formValues.location === ""|| formValues.modelType === ""|| formValues.weight === "") {
      console.log("Not all fields in the form are populated.")
    } else {
      this.itemsRef.push(formValues)
      this.setState({
        isSaved: true
      })
    }
  }


  render() {
    return (
      <View style={styles.addnewitemsContainer}>
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
        {this.state.isSaved ? <View><Text style={styles.message}> Artikel hinzugefügt</Text></View> :
          <View style={styles.lgreycontainer}>
            <Text style={{fontSize:22, textAlign:'center',color: '#3A404C', paddingTop: 15}}>Fügen Sie die Artikelinformation ein</Text>

          <Form ref="itemForm" style={styles.form} >
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Artikel Art:</Label>
              <Input style={styles.input} name="type" type="TextInput" />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Nummer:</Label>
              <Input style={styles.input} name="itemNumber" type="TextInput" />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Geschoß:</Label>
              <Input style={styles.input} name="floor" type="TextInput" />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Ort:</Label>
              <Input style={styles.input} name="location" type="TextInput" />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Typ:</Label>
              <Input style={styles.input} name="modelType" type="TextInput" />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Gewicht:</Label>
              <Input style={styles.input} name="weight" type="TextInput" />
            </Item>
            <Button Block primary onPress={() => this.pushToFirebase()} style={styles.button}><Text style={styles.buttonText}>Hinzufügen</Text></Button>
          </Form>
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addnewitemsContainer: {
    backgroundColor: "#252525",
    height: '100%'
  },
  logoheader:{
    maxHeight:100,
    marginTop: 20,
    marginBottom: 80
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
  message:{
    alignSelf: 'center',
    fontSize: 30,
    backgroundColor: '#40C057',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 40,
    width: '50%',
    textAlign:'center'

  }
});
export default AddNewItem;
