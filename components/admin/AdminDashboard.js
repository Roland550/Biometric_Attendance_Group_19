import { View, Text, StyleSheet, SafeAreaView, Image, onPress , Pressable} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AdminDashboardTab from "../../tabs/AdminDashboardTab";
import styles from './styles'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Setting from "./Setting";








const AdminDashboard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.icon}>
        <FontAwesome name="bell-o" size={35} color="#404040" />

        <MaterialCommunityIcons
          name="message-badge-outline"
          size={35}
          color="#404040"
        />
        <Ionicons name="person-circle-outline" size={38} color="#404040" />
        <Text style={styles.info}>Admin</Text>
      </View>
      
    </View>
    <View style={styles.box}>
        <Pressable style={styles.card}>
        <Image source ={require('../../assets/img/student.png')} />
            <Text style={styles.CardText} onPress={() => {navigation.navigate('Student Management')}}>Manage student</Text>
        </Pressable>
        <View style={styles.card}>
        <Image source ={require('../../assets/img/instructor.png')} />
            <Text style={styles.CardText}  onPress={() => {navigation.navigate('Lectuer Management')}}>Manage instructor</Text>
        </View>
       
    </View>
    <View style={styles.card}  >
    <Image source ={require('../../assets/img/courses.png')} />
            <Text style={styles.CardText } onPress={() => {navigation.navigate('Course Management')}}>Manage course</Text>
      </View>
      
      

      
   
    
   
        
    </SafeAreaView>
    
    
  );
};

export default AdminDashboard;


