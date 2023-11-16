import { StyleSheet, Text, View, Button } from 'react-native'; 
import Archive from '../components/archive';

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

/*
txt are going to be replaced by the {tasks} contents by id
*/

export default function TaskDetails({toArchive, route, navigation, toBin}) {
  const { task }  = route.params 

  function handleArchive(){
    toArchive(task.id)
    navigation.navigate("Home")
  }

  function handleDelete(){
    toBin(task.id)
    navigation.navigate('Home')
  }

  return (
      <View style={styles.bodyText}>
        <Text style={styles.heading}>{task.title}</Text>
        <View>
          <Feature txt={"Due by " + task.deadline_date} />
          <Feature txt={"Important: " + (task.isImportant ?  "👍":"👎")} />
        </View>
        <Description txt={task.details} />
        <Button title={"Archive"} onPress={handleArchive}/>
        <Button title={"Delete"} onPress={handleDelete}/>
      </View>
  );
}

const styles = StyleSheet.create({

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
});

