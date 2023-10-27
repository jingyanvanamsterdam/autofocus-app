import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';


function Header () {
  return (
    <View style={styles.topBarContainer}>
      <Image source={require('./sources/vector.png')}/>
      <Text style={styles.topbar}>AUTOFOCUS</Text>
    </View>
  )
}

function Feature(props) {
  return <Text style={styles.featureStyle}>{props.txt}</Text> 
}

function Description (props){
  return (
    <View>
      <Text style={styles.heading}>Description</Text>
      <Text style={styles.descriptionStyle}>{props.txt}</Text>
    </View>
  )
}


function Body (){
  return (
    <View style= {styles.bodyContainer}>
      <View style={styles.bodyText}>
        <Text style={styles.heading}>Task Title</Text>
        <View>
          <Feature txt={"Due by " +Date()}/>
          <Feature txt={"Important: Y/N"} />
        </View>
        <Description txt={'description text'} />
      </View>
      
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
    flexDirection:'row',
    justifyContent: 'space-evenly',
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
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'green',
  },

  bodyText:{
    flex: 0.9,
    marginRight: 30, 
    marginLeft: 30,
    borderWidth: 2,
    padding: 30,
  },
  heading:{
    fontSize: 36,
    marginBottom: 30,
  },
  featureStyle:{
    fontSize: 24,
    marginBottom: 30,
  },
  descriptionStyle:{
    fontSize: 24,
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



