import { View, Text, SafeAreaView, Pressable, Image} from 'react-native'
import React from 'react'
import styles from '../admin/styles';


const Lecturer_Dashboard = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Attendance Management</Text>
    
          
          
        </View>
        <View style={styles.box}>
            <Pressable style={styles.card}>
            <Image source ={require('../../assets/img/admin.png')} />
                <Text style={styles.CardText} onPress={() => {navigation.navigate('Student Management')}}>Track Attendance</Text>
            </Pressable>
            <View style={styles.card}>
            <Image source ={require('../../assets/img/View.png')} />
                <Text style={styles.CardText}  onPress={() => {navigation.navigate('Lectuer Management')}}>View Attendance Record</Text>
            </View>
           
        </View>
        <View style={styles.card}  >
        <Image source ={require('../../assets/img/info.png')} />
                <Text style={styles.CardText } onPress={() => {navigation.navigate('Course Management')}}>View Course Info</Text>
          </View>
          
          
    
          
       
        
       
            
        </SafeAreaView>
        
        
      );
}

export default Lecturer_Dashboard