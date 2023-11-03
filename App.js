import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
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

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Navigation />
    </View>
  );
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





