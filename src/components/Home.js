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
                <Text style={{color:'#292929', backgroundColor:'#22bd53', textAlign: 'center', height:'100%', fontSize: 24, paddingTop: 40 }}> Start new maintenance check </Text>
              </TouchableOpacity>
          </View>

          <View style={styles.homebox}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('activemaintenance')}>
              <Text style={{color:'#292929', backgroundColor:'#e03428', textAlign: 'center',height:'100%', fontSize: 24, paddingTop: 40}}> Active maintenance </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.homebox}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('returntocurrentreport')}>
              <Text style={{color:'#292929', backgroundColor:'#fc8e2d', textAlign: 'center',height:'100%', fontSize: 24, paddingTop: 40}}> Return to previous report</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.homebox}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('addnewitem')}>
              <Text style={{color:'#292929', backgroundColor:'#2d8ee3', textAlign: 'center',height:'100%', fontSize: 24, paddingTop: 40}}> Add new Item</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.homebox}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('reporthistory')}>
              <Text style={{color:'#292929', backgroundColor:'#ffffff', textAlign: 'center',height:'100%', fontSize: 24, paddingTop: 40}}> Report History</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.homebox}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('viewallitems')}>
              <Text style={{color:'#292929', backgroundColor:'#999999', textAlign: 'center',height:'100%', fontSize: 24, paddingTop: 40}}> View all Items</Text>
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
  },
  logoheader:{
    maxHeight:60,
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
