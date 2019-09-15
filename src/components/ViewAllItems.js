import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, Linking, FlatList, AsyncStorage, KeyboardAvoidingView, Card } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import firebase from 'firebase';
import { SearchBar } from 'react-native-elements';


// firebase.auth()
//   .signInAnonymously()
//   .then(credential => {
//     if (credential) {
//       console.log('default app user ->', credential.user.toJSON());
//     }
//   });

  var itm = [];
  class ViewAllItems extends React.Component {
    state = {
      search: '',
    };
    updateSearch = search => {
      this.setState({ search });
    };


/*-------------------FIREBASE DATABASE MOUTING --------------------------------*/

    componentDidMount(){
      var firebaseConfig = {
        apiKey: "AIzaSyCqK9sSq58loq5l-lE3RtDFfNe8jfScT5E",
        authDomain: "sfk2-cbaef.firebaseapp.com",
        databaseURL: "https://sfk2-cbaef.firebaseio.com",
        projectId: "sfk2-cbaef",
        storageBucket: "",
        messagingSenderId: "1014798760146",
        appId: "1:1014798760146:web:43e51c27ddb8131b1a550b"
      };
      firebase.initializeApp(firebaseConfig);

/*------------------------ADD TO DATABASE -------------------------------------*/

      // firebase.database().ref('items/4').set(
      //   {
      //     type: 'FL',
      //     location: 'in my mouth'
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

    };



  render(){
    const { search } = this.state;

    return (
      <View style={styles.allitemsContainer}>
        <View style={styles.logoheader}>
          <Image
            source= {require('../logo.jpg')}
            style={{height:100}}
            />
        </View>
        <Text style={{fontSize:22, textAlign:'center', color: '#FFFFFF', paddingTop: 15}}>Alle Artikel</Text>
        <View>
          <SearchBar placeholder= 'Begriff eingeben...'onChangeText= {this.updateSearch} value= {search}/>
        </View>
        <KeyboardAvoidingView behaviour="padding">
        </KeyboardAvoidingView>
/*------------------------   Testing to view intem in db on screen   --------------------------------*/



      </View>
    )
  }
};


const styles = StyleSheet.create({
  logoheader:{
    maxHeight:100,
  },
  allitemsContainer:{
    backgroundColor: "#252525"
  }
});

export default ViewAllItems;
