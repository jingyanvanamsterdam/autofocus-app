import { NavigationContainer } from '@react-navigation/native'; 
import Home from './Screens/Home';
import AddTask from './Screens/AddTask';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
import { AntDesign } from '@expo/vector-icons';

//Tab bottom
const Tab = createBottomTabNavigator(); 
function TabGroup(){
    return(
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, size, color}) => {
                let iconName; 
                if(route.name === "Home"){
                    iconName = "home"
                } else {
                    iconName = focused? 'pluscircle': 'pluscircleo'
                }
                return <AntDesign name={iconName} size={size} color={color}/>
            },
            tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Tab.Screen name='AddTasks' component={AddTask} options={{headerShown: false}}/>
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