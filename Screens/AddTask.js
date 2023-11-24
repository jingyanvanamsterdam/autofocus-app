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
      <View className='items-stretch'>
        <TextInput
          placeholder = 'Type your task title'
          onChangeText = {newText => setTitle(newText)}
          value = {title}
          className='mx-5 mt-5 border-2 border-solid p-3'
          />

        <View className='mt-5 mx-12 flex-row items-center justify-between'>
          <Text className='text-xl'>Due by:</Text>
          <DateTimePicker 
            value = {deadline} 
            onChange = {setActualDate} 
          />
        </View>

        <View className='mt-5 mx-12 flex-row items-center justify-between'>
          <Text className='text-xl'>Importance</Text>
          <Switch
            trackColor={{false: 'red', true: 'black'}}
            thumbColor={importance ? 'yellow':'orange'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleSwitch}
            value={importance}
          />
        </View>

        <View>
          <Text className='mt-5 mx-12 text-xl'> Description: </Text>
          <TextInput 
            className = 'mx-7 mt-5 border-2 border-solid p-3 h-auto'
            multiline = {true}
            onChangeText= {setDescription}
            value={description}
            placeholder={'Write details about the task'}
          />
        </View>
        <Button  
          title={"Submit"} 
          onPress={handleSubmit}/>
     </View>
    //</DismissKeyboard>
    )
}

  