import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import WelcomePage from './screen/WelcomePage';
import AdminDashboard from './components/admin/AdminDashboard';
import Registration_list from './components/admin/Registration_list';
import Reg_fingerPrint from './components/admin/Reg_fingerPrint';
import RootSatck from './navigator/RootSatck';
import AdminRoot from './components/admin/AdminRoot';
import EditTest from './components/admin/manage_lecturers/EditTest';

import Lecturer_Dashboard from './components/lecturers/Lecturer_Dashboard'
import LoginAs from './screen/LoginAs';
import WelocomeGuide from './screen/WelocomeGuide';
import Login from './screen/Login';







const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

function TabNavigator(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Dashobor" component={AdminDashboard} />
    </Tab.Navigator>
  )
}

function StackNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="Dashobor" component={AdminDashboard} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
   
   < RootSatck/>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#f6f9ff',
    
  },
});
