import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Switch, Button, Keyboard, TouchableWithoutFeedback } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import Navigation from './Navigation'; 



function Header () {
  return (
    <View style={styles.topBarContainer}>
      <Image style={styles.topBarImage} source={require('./sources/burger.png')}/>
      <Text style={styles.topbar}>AUTOFOCUS</Text>
      <Text></Text>
    </View>
  )
}

function Footer (){
  return (
    <View style={styles.footerContainer}>
      <Image style={styles.footerContent} source={require('./sources/add-button.png')}></Image>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  topBarContainer : {
    //flex: 1,
    backgroundColor: 'red',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    borderBottomWidth: 3,
  },
  topbar: {
    fontSize: 24,
    fontColor: 'black',
    paddingTop: 50,
  },

  topBarImage:{
  },


});

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Navigation />
    </View>
  );
}



