import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';

function TaskList ({tasks, navigation }){
  
  return (
    <View style= {styles.TaskListContainer}>
      <FlatList
        data={tasks}
        renderItem={({item}) =>
          <Pressable 
          onPress={ () => navigation.navigate('TaskDetails', 
          {task: item}
          )}>
            <Text style={styles.TaskListText}>{item.title}</Text>
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
    fontSize: 20,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    margin: 5,
  },
});

export default function Home({tasks, navigation}) {
  return (
    <View style={styles.container}>
      <TaskList tasks={tasks} navigation={navigation}/>
    </View>
  );
}
