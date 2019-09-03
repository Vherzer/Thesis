import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, Button, TouchableOpacity, Linking } from 'react-native';

const LogoHeader = () => {
  return
  <View style={styles.logoheader}>
    <Image
      source= {require('./src/logo.jpg')}
      />
  </View>
};

const styles = StyleSheet.create({
  logoheader:{
    maxHeight:100,
  },
});

export default LogoHeader;
