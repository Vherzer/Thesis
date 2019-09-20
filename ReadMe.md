# SFK Application


### Tech

 SFK uses a number of open source projects to work properly:

* [React Native] - HTML enhanced for web apps!
* [Firebase] - awesome web-based text editor
* [node.js] - automatically installs npm for us!

### Installation

##### We require [Node.js](https://nodejs.org/) v12.9+ to run, so download it from their website!

### Install the dependencies:

##### React-native

```sh
$ npm install react-native
```
Follow the instructions at https://facebook.github.io/react-native/docs/getting-started to create the application.

#####  React-native-navigation

```sh
$ npm install react-native-navigation
$ react-native link react-native-navigation
```

##### Firebase

```sh
$ npm install firebase
$ react-native link firebase
```
##### React-native-webview

```sh
$ npm install react-native-webview
$ react-native link react-native-webview
$ cd ios
$ pod install
```
##### React-native-signature-pad

```sh
$ npm install react-native-signature-pad
$ react-native link react-native-signature-pad
```
##### React-native-elements

```sh
$ npm install react-native-elements
$ react-native link react-native-elements
```
##### Native-base

```sh
$ npm install native-base
$ react-native link native-base
```
##### React-native-responsive-fontsize

```sh
$ npm install react native-responsive-fontsize
$ react-native link react-native-responsive-fontsize
```
##### React-native-responsive-screen

```sh
$ npm install react-native-responsive-screen
$ react-native link react-native-responsive-screen
```
#### For the QR Code scanner:
##### React-native-camera

```sh
$ npm install react-native-camera
$ react-native link react-native-camera
```
##### React-native-permissions

```sh
$ npm install react-native-permissions
$ react-native link react-native-permissions
```
##### React-native-qrcode-scanner

```sh
$ npm install react-native-qrcode-scanner
$ react-native link react-native-qrcode-scanner
```

# What to import to the project.js files.
| Import from      | What |
| ----------- | ----------- |
| react      | { React, Component }       |
| react-native   | { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, Linking, FlatList, AsyncStorage, KeyboardAvoidingView }         |
| react-navigation   | { createAppContainer, createStackNavigator, StackActions, NavigationActions }         |
| firebase   | { firebase }         |
| react-native-elements   | { SearchBar }         |
| react-native-qrcode-scanner   | { QRCodeScanner }         |
| react-native-responsive-screen   | { widthPercentageToDP as wp, heightPercentageToDP as hp }         |
| react-native-responsive-fontsize   | { RFPercentage, RFValue }         |
| native-base      | { Item, Label, Input }       |
| react-native-signature-pad      | { SignaturePad }       |
