import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, Linking } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

class Home extends React.Component {
  render(){
    return (
      <View style={styles.homecontainer}>

        <View style={styles.logoheader}>
          <Image
            source= {require('../logo.jpg')}
            />
        </View>

        <View style={styles.homeboxes}>
          <View style={styles.homebox}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('newreport')}>
                <Text style={{color:'#292929', backgroundColor:'#40C057', textAlign: 'center', height:'100%', fontSize: 20, paddingTop: 40 }}>Neue Wartungsprüfung starten</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.homebox}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('activemaintenance')}>
              <Text style={{color:'#292929', backgroundColor:'#FA5252', textAlign: 'center',height:'100%', fontSize: 20, paddingTop: 65}}>Aktive Wartung</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.homebox}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('returntocurrentreport')}>
              <Text style={{color:'#292929', backgroundColor:'#FD7E14', textAlign: 'center',height:'100%', fontSize: 20, paddingTop: 45}}>Zurück zur vorherigen Wartungsprüfung</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.homebox}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('addnewitem')}>
              <Text style={{color:'#292929', backgroundColor:'#228BE6', textAlign: 'center',height:'100%', fontSize: 20, paddingTop: 60}}>Neuen Artikel hinzufügen</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.homebox}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('reporthistory')}>
              <Text style={{color:'#292929', backgroundColor:'#ffffff', textAlign: 'center',height:'100%', fontSize: 20, paddingTop: 65}}>Berichtsverlauf</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.homebox}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('viewallitems')}>
              <Text style={{color:'#292929', backgroundColor:'#868E96', textAlign: 'center',height:'100%', fontSize: 20, paddingTop: 60}}>Alle Artikel anzeigen</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>


/*
      <View style={styles.container}>
        <Image source={pic}/>
        <Text> Home </Text>
        <Button1 onEnterApp={this.userEntersApp}/>
      </View>
    */
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    alignItems:"center",
    justifyContent:"center",
  },
  homecontainer:{
    flex: 1,
    backgroundColor: "#2B2B2B",
    height: '100%'
  },
  logoheader:{
    maxHeight:60,
    marginTop: 40,
    marginBottom: 40
  },
  homeboxes:{
    height:'80%',
    flexDirection:'row',
    flexWrap: 'wrap',
    padding: 15,
    paddingTop:100,
  },
  homebox:{
    width:'50%',
    height: 200,
    padding: 15,
  },
});

export default Home;
