import { View, Text, FlatList, SafeAreaView, TextInput , Image, Button, Pressable} from 'react-native'
import React from 'react'
import styles from '../styles'


const Course_Reg = ({navigation}) => {
  return (
    <SafeAreaView  style={styles.container}>
    {/* <View style={styles.header} >
     <Text style={styles.title}>Student registration</Text>
     </View> */}
     <View style={styles.inputbox}>
        <Text style={styles.label}>Course Name</Text>
       <TextInput label="Search" placeholder='Enter name' style={styles.inputText} />
        <Text style={styles.label}>Course Code</Text>
       <TextInput label="Search" placeholder='Enter matricule' style={styles.inputText} />
        <Text style={styles.label}> Departement</Text>
    
       <TextInput label="Search" placeholder='select department' style={styles.inputText} />
        <Text style={styles.label}> Instructor Name</Text>
       <TextInput label="Search" placeholder='select department' style={styles.inputText} />
        <Text style={styles.label}> Time Slot</Text>
       <TextInput label="Search" placeholder='select department' style={styles.inputText} />
        
     </View>
     
     {/* <Pressable style={styles.back_btn}>
       <Text style={styles.btn_text}>back</Text>
     </Pressable> */}
     <Pressable style={styles.next_btn}  onPress={() =>{navigation.navigate('Course List')}}>
       <Text style={styles.btn_text}>Register</Text>
     </Pressable>
   </SafeAreaView>
  )
}

export default Course_Reg