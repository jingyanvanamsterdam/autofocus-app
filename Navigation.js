import { NavigationContainer } from '@react-navigation/native'; 
import Home from './Screens/Home';
import AddTask from './Screens/AddTask';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
import { AntDesign } from '@expo/vector-icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TaskDetails from './Screens/TaskDetails';
import {tasks} from './data/tasks'
import { useState } from 'react';



//Stack of home-taskdetails
const Stack = createNativeStackNavigator(); 
function StackGroup({tasks}){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' options={{headerShown: false}}>
                {(props)=><Home {...props} tasks={tasks}/>}
            </Stack.Screen>
            <Stack.Screen name='TaskDetails' component={TaskDetails} options={{presentation: 'modal'}}/>
        </Stack.Navigator>
    )
}

//Tab bottom
const Tab = createBottomTabNavigator(); 

function TabGroup(){
    const [currentTasks, setCurrentTasks] = useState(tasks); 
    function addTask(task){
        setCurrentTasks((prev)=>{return [task, ...prev]})
      };

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
            <Tab.Screen name='StackGroup' options={{headerShown: false}}>
                {(props) => <StackGroup {...props} tasks={currentTasks} />}
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
            <TabGroup />
        </NavigationContainer>
    )
}