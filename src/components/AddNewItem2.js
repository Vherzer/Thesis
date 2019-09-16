import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, TouchableHighlight, TextInput, Linking, Alert } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import firebase from 'firebase';
import { addItem } from './ItemService';


class AddNewItem extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      type:'',
      itemNumber:'',
      floor:'',
      location:'',
      modelType:'',
      weight:'',
      isSubmitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
      type: e.nativeEvent.text,
      itemNumber: e.nativeEvent.text,
      floor: e.nativeEvent.text,
      location: e.nativeEvent.text,
      modelType: e.nativeEvent.text,
      weight: e.nativeEvent.text

    });
  }
  handleSubmit(){
    addItem(
      this.state.type,
      this.state.itemNumber,
      this.state.floor,
      this.state.location,
      this.state.modelType,
      this.state.weight,);
    Alert.alert('Artikel gespeichert');
  }

  render(){
    return (
      <View style={styles.addnewitemsContainer}>

        <View style={styles.logoheader}>
          <Image
            source= {require('../logo.jpg')}
            style={{height:100}}
            />
        </View>

        <View style = {styles.lgreycontainer}>
          <Text style={{fontSize:22, textAlign:'center',color: '#3A404C', paddingTop: 15}}>Fügen Sie die Artikelinformation ein</Text>
          <View style = {styles.inputBoxLine}>
            <Text style = {styles.inputtext}> Artikel Art: </Text>
            <TextInput
              name="type"
              style={styles.itemInput}
              onChange= {this.handleChange}
            />
          </View>
          <View style = {styles.inputBoxLine}>
            <Text style = {styles.inputtext}> Nummer: </Text>
            <TextInput
              name="itemNumber"
              style={styles.itemInput}
              onChange= {this.handleChange}
            />
          </View>
          <View style = {styles.inputBoxLine}>
            <Text style = {styles.inputtext}> Geschoß: </Text>
            <TextInput
              name="floor"
              style={styles.itemInput}
              onChange= {this.handleChange}
            />
          </View>
          <View style = {styles.inputBoxLine}>
            <Text style = {styles.inputtext}> Ort: </Text>
            <TextInput
              name="location"
              style={styles.itemInput}
              onChange= {this.handleChange}
            />
          </View>
          <View style = {styles.inputBoxLine}>
            <Text style = {styles.inputtext}> Typ: </Text>
            <TextInput
              name="modelType"
              style={styles.itemInput}
              onChange= {this.handleChange}
            />
          </View>
          <View style = {styles.inputBoxLine}>
            <Text style = {styles.inputtext}> Gewicht: </Text>
            <TextInput
              name="weight"
              style={styles.itemInput}
              onChange= {this.handleChange}
            />
          </View>

          <TouchableHighlight
            style = {styles.button}
            underlayColor= 'white'
            onPress = {this.handleSubmit}
          >
            <Text style ={styles.buttonText}>Add</Text>
          </TouchableHighlight>
        </View>


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
    height: '100%'
  },
  lgreycontainer:{
    backgroundColor: "#D8DBE3",
    height: 400,
    width: 330,
    alignSelf: 'center',
    marginTop: 20,
    padding: 20
  },
  itemInput:{
    height: 40,
    width: 100,
    padding: 4,
    marginRight: 5,
    marginLeft: 30,
    fontSize: 13,
    borderWidth: 1,
    color: "#252525",
    backgroundColor: 'white',
  },
  inputBoxLine:{
    flex: 1,
    flexDirection: 'row'
  },
  inputtext:{
    paddingTop:10,
    fontSize:16
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


});

export default AddNewItem;
