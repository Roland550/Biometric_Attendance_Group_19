import { View, Text, Settings } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import colors from '../components/colors';

import AdminDashboard from '../components/admin/AdminDashboard';
import Reg_fingerPrint from '../components/admin/Reg_fingerPrint';
import Registration_list from '../components/admin/Registration_list';
import StudentMgmt from '../components/admin/StudentMgmt'
import Student_Registration from '../components/admin/Student_Registration'
import WelcomePage from '../screen/WelcomePage';
import Login from '../screen/Login'
import SignUp from '../screen/SignUp';
import Setting from '../components/admin/Setting'
import Lect_fingerprint from '../components/admin/manage_lecturers/Lect_fingerprint';

import LecturerMgmnt from '../components/admin/manage_lecturers/LecturerMgmnt'
import Register_lecturer from '../components/admin/manage_lecturers/Register_lecturer'
import Instructors_list from '../components/admin/manage_lecturers/Instructors_list'
import AdminRoot from '../components/admin/AdminRoot';
import LoginAs from '../screen/LoginAs';
import WelocomeGuide from '../screen/WelocomeGuide';
import  Lecturer_dash from '../components/lecturers/Lecturer_Dashboard'






//import Color




const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

function TabNavigator(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigator}
       options={{
        tabBarIcon: ({focused}) =>{
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome name="home" size={24} color={focused? colors.delete : colors.text} />
                <Text style={{fontSize: 13, color: colors.text}}> Home</Text>
            </View>
            )
        }
      }} 
       />
      <Tab.Screen name="Dashobor" component={AdminDashboard} />
    </Tab.Navigator>
  )
}

function StackNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="Settings" component={AdminDashboard} />
    </Stack.Navigator>
  )
}

const RootSatck = () => {
  return (
    
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor: colors.white,
                height: 80,
                elevation: 10,


            },
            headerTitleStyle:{
                color: colors.text,
                fontSize: 25,
            }
            
        }}
        initialRouteName='WelcomePage'
        >     
        {/* admin part */}
            <Stack.Screen name='AdminDashboard' options={{headerShown: false}} component={AdminDashboard} />
            <Stack.Screen name='Fingerprint Registration' component={Reg_fingerPrint} />
            <Stack.Screen name='Registration list' component={Registration_list} />
            <Stack.Screen name='Student Management' component={StudentMgmt} />
            <Stack.Screen name='Student Registration' component={Student_Registration} />
            <Stack.Screen name='WelcomePage' options={{headerShown: false}} component={WelcomePage} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='Setting' component={Setting} />
            {/* manage lecturers */}
            
            <Stack.Screen name='Lectuer Management' component={LecturerMgmnt} />
            <Stack.Screen name='Register Lecturer' component={Register_lecturer} />
            <Stack.Screen name='Register Fingerprint' component={Lect_fingerprint} />
            <Stack.Screen name='Lecturer List' component={Instructors_list} />


            <Stack.Screen name='Admin root' component={AdminRoot} />
            <Stack.Screen name='Welcome back' component={WelocomeGuide} />
            <Stack.Screen name='Login As' options={{headerShown: false}} component={LoginAs} />
            <Stack.Screen name='Lecturer dash' options={{headerShown: false}} component={Lecturer_dash} />



        </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default RootSatck