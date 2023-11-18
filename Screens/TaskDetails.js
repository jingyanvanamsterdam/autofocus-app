import { StyleSheet, Text, View, Button } from 'react-native'; 

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
    if(task.isArchived === true){
      navigation.navigate("Home")
    } else if(task.isBinned===true){
      navigation.navigate("ArchiveList")
    } else{
      navigation.navigate("Home")
    }
  }

  function handleDelete(){
    toBin(task.id)
    if(task.isArchived === true){
      navigation.navigate("BinList")
    } else {
      navigation.navigate("Home")
    } 
    }
  
  function Buttons(){
    if(task.isArchived===true){
      return (
        <View>
          <Button title={'Bin'} onPress={handleDelete} />
          <Button title={'Move Back'} onPress={handleArchive} />
        </View>
      )
    } else if(task.isBinned===true){
      return (
        <View>
          <Button title={'Archive'} onPress={handleArchive} />
          <Button title={'Move Back'} onPress={handleDelete} />
        </View>
      )
    } else{
      return (
        <View>
          <Button title={'Archive'} onPress={handleArchive} />
          <Button title={'Bin'} onPress={handleDelete}/>
        </View>
      )
    }
  }
  return (
      <View style={styles.bodyText}>
        <Text style={styles.heading}>{task.title}</Text>
        <View>
          <Feature txt={"Due by " + task.deadline_date} />
          <Feature txt={"Important: " + (task.isImportant ?  "👍":"👎")} />
        </View>
        <Description txt={task.details} />
        {<Buttons />}
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

