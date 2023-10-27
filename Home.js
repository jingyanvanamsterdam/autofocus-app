import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';


function Header () {
  return (
    <View style={styles.topBarContainer}>
      <Text style={styles.topbar}>AUTOFOCUS</Text>
    </View>
  )
}

function Body (){
  return (
    <View style= {styles.bodyContainer}>
      <FlatList
        data={[
          {key: 'task1'},
          {key: 'task2'},
          {key: 'task3'},
          {key: 'task4'},
          {key: 'task5'},
          {key: 'task6'},
          {key: 'task7'},
          {key: 'task8'},
          {key: 'task9'},
          {key: 'task10'},
          {key: 'task11'},
          {key: 'task12'},
          // use map? 3
          /*
          <View>
            {}
          </View>
          */
        ]}
        renderItem={({item}) => 
          <Text style={styles.bodyText}>{item.key}</Text>
        }
      />
      <Button title="Click here" />
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
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
  },
  topbar: {
    fontSize: 24,
    fontColor: 'black',
    paddingTop: 50,
    paddingBottom: 40,
  },
  bodyContainer: {
    flex:8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  bodyText:{
    fontSize: 24,
    padding: 10,
    paddingLeft: 150,
    paddingRight: 150,
    borderWidth: 2,
    margin: 5,
  },
  footerContainer: {
    flex: 1,
    borderTopWidth: 3,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  footerContent:{
    marginTop: 15,
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Body/>
      <Footer/>
    </View>
  );
}



