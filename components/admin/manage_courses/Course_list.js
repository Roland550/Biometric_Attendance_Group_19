import { View, Text, ScrollView, FlatList, SafeAreaView, TextInput, Pressable ,Button, onPress} from "react-native";
import React, { useState } from "react";

import styles from "../styles";

const Course_list = ({navigation}) => {
    const [data, setData] = useState([
        { Course_Name: "Internet Programming", Course_Code: "CEF440", Departement: "Computer Engineering", Instructor_Name: 'Valery Nkameni', Timeslot: '01:00 - 03:00' },
        { Course_Name: "Internet Programming", Course_Code: "CEF440", Departement: "Computer Engineering", Instructor_Name: 'Valery Nkameni', Timeslot: '01:00 - 03:00' },
        { Course_Name: "Internet Programming", Course_Code: "CEF440", Departement: "Computer Engineering", Instructor_Name: 'Valery Nkameni', Timeslot: '01:00 - 03:00' },
        { Course_Name: "Internet Programming", Course_Code: "CEF440", Departement: "Computer Engineering", Instructor_Name: 'Valery Nkameni', Timeslot: '01:00 - 03:00' },
        { Course_Name: "Internet Programming", Course_Code: "CEF440", Departement: "Computer Engineering", Instructor_Name: 'Valery Nkameni', Timeslot: '01:00 - 03:00' },
        { Course_Name: "Internet Programming", Course_Code: "CEF440", Departement: "Computer Engineering", Instructor_Name: 'Valery Nkameni', Timeslot: '01:00 - 03:00' },
       
        
      ]);
    
     
      const [editItem, setEditItem] = useState('');
      const [newName, setNewName] = useState('');
      const [newMatricule, setNewMatricule] = useState('');
      const [newDepartement, setNewDepartement] = useState('');
    
      const renderItem = ({ item, index }) => {
       
        return (
            <View style={styles.row}>
                <Text style={[styles.cell, { width: 60 }]}>{(index + 1).toString()}</Text>
                <Text style={[styles.cell, { width: 250 }]}>{item.Course_Name}</Text>
                <Text style={[styles.cell, { width: 130 }]}>{item.Course_Code}</Text>
                <Text style={[styles.cell, { width: 200 }]}>{item.Departement}</Text>
                <Text style={[styles.cell, { width: 300 }]}>{item.Instructor_Name}</Text>
                <Text style={[styles.cell, { width: 200 }]}>{item.Timeslot}</Text>
                
                
            </View>
        )
       }
        
      
    
    
      return (
    
        <SafeAreaView  style={styles.container}>
       
         <View style={styles.search}>
           <TextInput label="Search" placeholder='Search course' style={styles.SearchInput} />
         </View>
         
         <ScrollView horizontal>
          <View style={styles.listContainer}>
            <View style={styles.listHeader}>
              <Text style={[styles.Header_table_list, { width: 60 }]}>S.No</Text>
              <Text style={[styles.Header_table_list, { width: 250 }]}>Course Name</Text>
              <Text style={[styles.Header_table_list, { width: 130 }]}>
                Course Code
              </Text>
              <Text style={[styles.Header_table_list, { width: 200 }]}>
                Departements
              </Text>
              <Text style={[styles.Header_table_list, { width: 300 }]}>
                Instructor Name
              </Text>
              <Text style={[styles.Header_table_list, { width: 200 }]}>
                Time Slot
              </Text>
              
            </View>
            <FlatList 
            data ={data}
            renderItem={renderItem}
            keyExtractor={(item, index) =>index.toString()}
            />
          </View>
        </ScrollView>
    
        <Pressable style={styles.next_btn} onPress={() =>{navigation.navigate('Course Registration')}} >
           <Text style={styles.btn_text}>Register</Text>
         </Pressable>
       </SafeAreaView>
    
       
      );
}

export default Course_list