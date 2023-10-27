import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TextInput, Switch } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';


function Header () {
  return (
    <View style={styles.topBarContainer}>
      <Image source={require('./sources/vector.png')}/>
      <Text style={styles.topbar}>AUTOFOCUS</Text>
    </View>
  )
}

const TaskTitle = () => {
  const [text, onChangeText] = useState('');
  return (
    <View>
      <TextInput
        placeholder = 'Tpye your task title'
        onChangeText = {newText => onChangeText(newText)}
        value = {text}
        />
    </View>
  )
}

const DeadLine = () => {
  const [chosenDate, setChosenDate] = useState(new Date());
  const setActualDate = (event, theDate)=>{
    setChosenDate(theDate)
  }
  return (
    <View>
      <DateTimePicker value = {chosenDate} onChange = {setActualDate} />
    </View>
  )
}

const Importance = () => {
  const [isEnabled, setIsEnabled] = useState (false); 
  const toggleSwitch = () => setIsEnabled(previousSate => !previousSate); 
  return (
    <View>
      <Switch
        trackColor={{false: 'red', true: 'green'}}
        thumbColor={isEnabled ? 'yellow':'orange'}
        ios_backgroundColor='#3e3e3e'
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

const Description =()=>{
  const [text, onChangeText] = useState(''); 
  return (
    <View>
      <Text>Description</Text>
      <TextInput 
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  
  )
}


function Body (){
  return (
    <View style= {styles.bodyContainer}>
      <View style={styles.bodyText}>
        <TaskTitle />
      </View>
      <View>
          <DeadLine txt={"Due by "}/>
          <Importance txt={"Important"} />
      </View>
      <View>
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



