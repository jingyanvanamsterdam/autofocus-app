import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Switch, Button, Keyboard, TouchableWithoutFeedback } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';


const TaskTitle = () => {
    const [text, onChangeText] = useState('');
    return (
        <TextInput
          placeholder = 'Type your task title'
          onChangeText = {newText => onChangeText(newText)}
          value = {text}
          style={styles.taskTitle}
          />
    )
  }
  
  const DeadLine = (props) => {
    const [chosenDate, setChosenDate] = useState(new Date());
    const setActualDate = (event, theDate)=>{
      setChosenDate(theDate)
    }
    return (
      <View style={props.style}>
        <Text style={styles.deadLineText}>{props.txt}</Text>
        <DateTimePicker value = {chosenDate} onChange = {setActualDate} />
      </View>
    )
  }
  
  const Importance = (props) => {
    const [isEnabled, setIsEnabled] = useState (false); 
    const toggleSwitch = () => setIsEnabled(previousSate => !previousSate); 
    return (
      <View style={props.style}>
        <Text style={styles.importanceText}>{props.txt}</Text>
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
  
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
      {children}
    </TouchableWithoutFeedback>
  );
  
  const Description =(props)=>{
    const [text, onChangeText] = useState(''); 
    return (
        <View>
          <Text style={styles.description}>Description: </Text>
          <TextInput style={styles.descriptionInput}
          multiline = {true}
          onChangeText={onChangeText}
          value={text}
          placeholder={props.txt}
          />
        </View>
    )
  }
  
  const Submit =(props)=>{
    return(
      <Button style={props.style} title={"Submit"}></Button>
    )
  }

  function Body (){
    return (
      <DismissKeyboard>
        <View style= {styles.bodyContainer}>
          <TaskTitle/>
          <DeadLine style={styles.deadLine} txt={"Due by: "}/>
          <Importance style={styles.importance} txt={"Importance"} />
          <Description txt={'description text'} />
          <Submit style={styles.submit} />
       </View>
      </DismissKeyboard>
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
  
    bodyContainer: {
      flex:8,
      alignItems: 'stretch',
      backgroundColor: 'green',
    },
  
    taskTitle:{
      marginTop: 20,
      marginRight: 30, 
      marginLeft: 30,
      borderWidth: 2,
      padding: 11,
    },
  
    deadLine:{
      marginTop: 20,
      marginRight: 50,
      marginLeft: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between' 
    },
    deadLineText:{
      fontSize: 20,
    },
  
    importance:{
      marginTop: 20,
      flexDirection: 'row',
      marginRight: 50,
      marginLeft: 50, 
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    importanceText:{
      fontSize: 20,
    },
  
    description:{
      marginTop: 20,
      marginRight: 50, 
      marginLeft: 50,
      fontSize: 20,
    },
  
    descriptionInput: {
      marginTop: 20,
      marginRight: 30, 
      marginLeft: 30,
      borderWidth: 2,
      padding: 11,
    },
  
    submit:{
      marginTop: 30,
      borderWidth: 10, 
      backgroundColor: 'red',
      fontSize: 100,
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

  export default function AddTask (){
    return (
      <DismissKeyboard>
        <View style= {styles.bodyContainer}>
          <TaskTitle/>
          <DeadLine style={styles.deadLine} txt={"Due by: "}/>
          <Importance style={styles.importance} txt={"Importance"} />
          <Description txt={'description text'} />
          <Submit style={styles.submit} />
       </View>
      </DismissKeyboard>
      )
  }