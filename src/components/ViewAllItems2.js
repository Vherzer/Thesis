import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, Linking, FlatList, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import firebase from 'firebase';
import { SearchBar } from 'react-native-elements';
import { db } from './db';
import ItemComponent from './ItemComponent'

let itemsRef = db.ref('/items');



  class ViewAllItems extends React.Component {
    state = {
      search: '',
    };
    updateSearch = search => {
      this.setState({ search });
    };
    state = {
      items:[ ]
    }
    // componentDidMount(){
    //   itemsRef.on('value', (snapshot) => {
    //     let data = snapshot.val();
    //     let items = Object.values(data);
    //     this.setState({items});
    //   });
    // }
    readItemData () {
    firebase.database().ref('items/').on('value', function (snapshot) {
        console.log(snapshot.val())
    });
    }

/*------------------------ADD TO DATABASE -------------------------------------*/

      // firebase.database().ref('items/4').set(
      //   {
      //     type: 'FL',
      //     location: 'in the attic'
      //   }
      // ).then(() => {
      //   console.log('inserted');
      // }).catch((error) => {
      //   console.log(error);
      // });

/*------------------------SELECT FROM DATABASE --------------------------------*/
// the keyword "once" tells the code to only do the action once
// the keyword "on" tells the code to do the action evrytime some data changes.
        // firebase.database().ref('items').on('value', (data) => {
        //   console.log(data.toJSON());
        // })
/*------------------------UPDATE INFORMATION --------------------------------*/
        // firebase.database().ref('items/4').update(
        //   {
        //     ID:'4'
        //   }
        // )

/*------------------------DELETE INFORMATION --------------------------------*/
      //firebase.database().ref('items/3').remove();

/*------------------------Testing Queries --------------------------------*/
       // var FLref = firebase.database().ref('items');
      // ref.orderByChild('ID').equalTo('FL').on('child_added', function(snapshot){
      //   console.log(snapshot.toJSON());
      // })
      // FLref.child('items').orderByChild('type').equalTo('FL').on('value', function(snapshot){
      //   console.log(snapshot.val());
      //   snapshot.forEach(function(data){
      //     console.log(data.key);
      //   })
      // })

  //  };



  render(){
    const { search } = this.state;
    return (
      <View style={styles.allitemsContainer}>
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

        <Text style={{fontSize:22, textAlign:'center', color: '#FFFFFF', paddingTop: 15}}>Alle Artikel</Text>

        <View style = {styles.lgreycontainer}>

          <View style= {styles.filter}>
            <SearchBar style= {styles.filter} placeholder= 'Begriff eingeben...'onChangeText= {this.updateSearch} value= {search}/>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={this.readItemData()}><Text>Press Me</Text>
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView behaviour="padding">
        </KeyboardAvoidingView>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  logoheader:{
    maxHeight:100,
    marginTop: 20,
    marginBottom: 80
  },
  allitemsContainer:{
    backgroundColor: "#252525",
    height: '100%'
  },
  lgreycontainer:{
    backgroundColor: "#D8DBE3",
    height: 700,
    width: 330,
    alignSelf: 'center',
    marginTop: 20,
    padding: 20
  },
  filter:{
    borderRadius: 40,
    width: 150,
    color: 'white',
    alignSelf: 'flex-end'

  }
});

export default ViewAllItems;
