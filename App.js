
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, Linking } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Home from './src/components/Home';
import ViewAllItems from './src/components/ViewAllItems';
import StartNewReport from './src/components/StartNewReport';
import ViewActiveMaintenance from './src/components/ViewActiveMaintenance';
import CurrentReport from './src/components/CurrentReport';
import AddNewItem from './src/components/AddNewItem';
import ReportHistory from './src/components/ReportHistory';
import HelpButton from './src/components/helpbutton';

class Login extends React.Component {

  userEntersApp = () => {
    console.log('pressed the button');
  }

  render(){
    return (
      <View style={styles.container}>
        <Image source={require('./src/imgs/fireextinguisher.jpg')} style={{ width:150, height:150}}/>
        <View style={{paddingTop:15}}>
          <Text> Ready for maintenance? </Text>
        </View>
        <Button onPress={() => this.props.navigation.navigate('home')} title="Enter the App"></Button>
      </View>

    );
  }
}

/*------------------------STYLES ---------------------------------------------*/
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    alignItems:"center",
    justifyContent:"center",
  },
  homecontainer:{
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  logoheader:{
    maxHeight:100,
  },
});

const AppNavigator = createStackNavigator({
  login: Login,
  home: Home,
  newreport: StartNewReport,
  activemaintenance: ViewActiveMaintenance,
  returntocurrentreport: CurrentReport,
  addnewitem: AddNewItem,
  reporthistory: ReportHistory,
  viewallitems: ViewAllItems,
  helpbutton: HelpButton,
},
{
  initialRouteName: 'home',
  headerMode: 'none'
  });

export default createAppContainer(AppNavigator)
