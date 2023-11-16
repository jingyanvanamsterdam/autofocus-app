import { StyleSheet, Text, View, TextInput, Switch, Button, Keyboard, TouchableWithoutFeedback } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';

export default function AddTask (props){
  const [title, setTitle] = useState(''); 
  const [deadline, setDeadline] = useState(new Date()); 
  //initial date need to be able to set as null. but datepicker has to accept a value

  const [description, setDescription] = useState('');
  const [importance, setImportance] = useState(false);
  const toggleSwitch = () => setImportance(previousSate => !previousSate); 

  function handleSubmit(event){
    const task = {
      title: title, 
      deadline_date: deadline,
      details: description,
      isImportant: importance
    }
    if(task.title.length > 0){
      props.addTask(task)
    }
    setTitle('')
    setDeadline(new Date())
    setDescription('')
    setImportance(false)
    props.navigation.navigate('Home')
  }

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
      {children}
    </TouchableWithoutFeedback>
  );
  const setActualDate = (event, theDate) => {
    setDeadline(theDate)
  }
    
  return (
    //<DismissKeyboard> giving every input a dismiss
      <View style= {styles.bodyContainer}>
        <TextInput
          placeholder = 'Type your task title'
          onChangeText = {newText => setTitle(newText)}
          value = {title}
          style={styles.taskTitle}
          />

        <View style={styles.deadLine}>
          <Text style={styles.deadLineText}>Due by:</Text>
          <DateTimePicker 
            value = {deadline} 
            onChange = {setActualDate} 
          />
        </View>

        <View style={styles.importance}>
          <Text style={styles.importanceText}>Importance</Text>
          <Switch
            trackColor={{false: 'red', true: 'green'}}
            thumbColor={importance ? 'yellow':'orange'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleSwitch}
            value={importance}
          />
        </View>

        <View>
          <Text style={styles.description}> Description: </Text>
          <TextInput 
            style={styles.descriptionInput}
            multiline = {true}
            onChangeText= {setDescription}
            value={description}
            placeholder={'Write details about the task'}
          />
        </View>
        <Button 
          style={styles.submit} 
          title={"Submit"} 
          onPress={handleSubmit}/>
     </View>
    //</DismissKeyboard>
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

  