/**
 * @format
 */


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
var SqlLite = require('react-native-sqlite-storage');

AppRegistry.registerComponent(appName, () => App);

errorCB = (err) => {
  console.log("SQL Error: " + err);
}

successCB = () => {
  console.log("SQL executed fine");
}

openCB = () => {
  console.log("Database OPENED");
}

var db = SqlLite.openDatabase({name : "SFK", createFromLocation : 1}, openCB, errorCB);

console.log(db);
