import { NavigationContainer } from '@react-navigation/native'; 
import Home from './Screens/Home';
import AddTask from './Screens/AddTask';
import ArchiveList from './Screens/ArchiveList';
import BinnedList from './Screens/BinnedList'; 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
import { AntDesign } from '@expo/vector-icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TaskDetails from './Screens/TaskDetails';
import {tasks} from './data/tasks'
import { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Drawer of Archive and Bin

const Drawer = createDrawerNavigator();

function MainNavigator() {
    const [currentTasks, setCurrentTasks] = useState(tasks); 

    function toArchive(taskArchivedID){
        setCurrentTasks((prev) => prev.map(
            (task) => {if(task.id === taskArchivedID && task.isBinned === true){ 
                return {...task, isArchived: !task.isArchived, isBinned: !task.isBinned};
            } else if(task.id === taskArchivedID){
                return {...task, isArchived: !task.isArchived}
            } else {return task}
            }))}
        
    function toBin(taskBinnedID){
        setCurrentTasks((prev)=> prev.map(
            (task) => {if(task.id === taskBinnedID && task.isArchived === true){
                return {...task, isBinned: !task.isBinned, isArchived: !task.isArchived}; 
            } else if(task.id === taskBinnedID){
                return {...task, isBinned: !task.isBinned}
            } else {return task}
            }))
    }
    function addTask(task){
        setCurrentTasks((prev)=>{return [task, ...prev]})
      };
   
    const activeTasks = currentTasks.filter((task)=> !task.isArchived && !task.isBinned)
    const archivedTasks = currentTasks.filter((task)=> task.isArchived && !task.isBinned)
    const binnedTasks = currentTasks.filter((task)=> task.isBinned)
    
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="AutoFocus">
            {(props) => <TabGroup {...props} toArchive={toArchive} toBin={toBin} addTask={addTask} activeTasks={activeTasks} />}
        </Drawer.Screen>

        <Drawer.Screen name="Archive">
            {(props) => <StackGroupArchive {...props} toArchive={toArchive} toBin={toBin} tasks={archivedTasks} />}
        </Drawer.Screen>

        <Drawer.Screen name="Bin">
            {(props) => <StackGroupBin {...props} toArchive={toArchive} toBin={toBin} tasks={binnedTasks} />}
        </Drawer.Screen>
    </Drawer.Navigator>
  );
}


//Stack of home-taskdetails

const Stack = createNativeStackNavigator(); 

function StackGroupHome({tasks, toArchive, toBin}){

    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' options={{headerShown: false}}>
                {(props)=><Home {...props} tasks={tasks} />}
            </Stack.Screen>
            <Stack.Screen name='TaskDetails' options={{presentation: 'modal'}}>
                {(props)=> <TaskDetails {...props} toArchive={toArchive} toBin={toBin}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}
function StackGroupArchive({tasks, toArchive, toBin}){
    return(
        <Stack.Navigator>
            <Stack.Screen name='ArchiveList' options={{headerShown: false}} >
                {(props) => <ArchiveList {...props} tasks={tasks} />}   
            </Stack.Screen>
            <Stack.Screen name='TaskDetails'  options={{presentation: 'modal'}}>
                {(props)=> <TaskDetails {...props} toArchive={toArchive} toBin={toBin}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}
function StackGroupBin({tasks, toArchive, toBin}){
    return(
        <Stack.Navigator>
            <Stack.Screen name='BinList' options={{headerShown: false}}>
                {(props) => <BinnedList {...props} tasks={tasks} />}
            </Stack.Screen>
            <Stack.Screen name='TaskDetails'  options={{presentation: 'modal'}}>
                {(props)=> <TaskDetails {...props} toArchive={toArchive} toBin={toBin}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

//Tab bottom
const Tab = createBottomTabNavigator(); 

function TabGroup({toArchive, toBin, addTask, activeTasks}){
    
    return(
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, size, color}) => {
                let iconName; 
                if(route.name === "StackGroup"){
                    iconName = "home"
                } else {
                    iconName = focused? 'pluscircle': 'pluscircleo'
                }
                return <AntDesign name={iconName} size={size} color={color}/>
            },
            tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name='StackGroupHome' options={{headerShown: false}}>
                {(props) => <StackGroupHome {...props} toArchive={toArchive} toBin={toBin} tasks={activeTasks} />}
                </Tab.Screen>
            <Tab.Screen name='AddTasks' options={{headerShown: false}}>
                {(props) => <AddTask {...props} addTask={addTask} />}
                </Tab.Screen>
        </Tab.Navigator>
    )
}


export default function Navigation(){
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}