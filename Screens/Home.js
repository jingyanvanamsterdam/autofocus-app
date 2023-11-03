import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import {tasks} from '../data/tasks'

function TaskList ({ navigation }){
  return (
    <View style= {styles.TaskListContainer}>
      <FlatList
        data={tasks}
        renderItem={({item}) =>
          <Pressable 
          onPress={ () => navigation.navigate('TaskDetails')}>
            <Text style={styles.TaskListText}>{item.key}</Text>
          </Pressable>
          
        }
      />
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
  TaskListContainer: {
    flex:8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  TaskListText:{
    fontSize: 24,
    padding: 10,
    paddingLeft: 150,
    paddingRight: 150,
    borderWidth: 2,
    margin: 5,
  },
});

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <TaskList navigation={navigation}/>
    </View>
  );
}



