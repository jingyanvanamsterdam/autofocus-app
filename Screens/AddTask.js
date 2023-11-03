import { StyleSheet, Text, View, TextInput, Switch, Button, Keyboard, TouchableWithoutFeedback } from 'react-native';
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
  
  const DeadLine = () => {
    const [chosenDate, setChosenDate] = useState(new Date());
    const setActualDate = (event, theDate)=>{
      setChosenDate(theDate)
    }
    return (
      <View style={styles.deadLine}>
        <Text style={styles.deadLineText}>Due by:</Text>
        <DateTimePicker value = {chosenDate} onChange = {setActualDate} />
      </View>
    )
  }
  
  const Importance = () => {
    const [isEnabled, setIsEnabled] = useState (false); 
    const toggleSwitch = () => setIsEnabled(previousSate => !previousSate); 
    return (
      <View style={styles.importance}>
        <Text style={styles.importanceText}>Importance</Text>
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
  
  const Description =()=>{
    const [text, setChangeText] = useState(''); 
    return (
        <View>
          <Text style={styles.description}>Description: </Text>
          <TextInput style={styles.descriptionInput}
          multiline = {true}
          onChangeText= {setChangeText}
          value={text}
          placeholder={'description text'}
          />
        </View>
    )
  }
  
  const Submit =()=>{
    return(
      <Button 
      style={styles.submit} 
      title={"Submit"} />
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'space-between'
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
  });

  export default function AddTask (){
    return (
      <DismissKeyboard>
        <View style= {styles.bodyContainer}>
          <TaskTitle/>
          <DeadLine />
          <Importance />
          <Description />
          <Submit />
       </View>
      </DismissKeyboard>
      )
  }