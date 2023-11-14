import { StyleSheet, Text, View } from 'react-native'; 

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

export default function TaskDetails({route, navigation}) {
  const { task }  = route.params
  return (
      <View style={styles.bodyText}>
        <Text style={styles.heading}>{task.title}</Text>
        <View>
          <Feature txt={"Due by " + task.deadline_date} />
          <Feature txt={"Important: " + (task.isImportant ?  "👍":"👎")} />
        </View>
        <Description txt={task.details} />
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

