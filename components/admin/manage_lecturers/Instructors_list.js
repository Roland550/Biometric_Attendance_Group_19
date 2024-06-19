import { View, Text, ScrollView, FlatList, SafeAreaView, TextInput, Pressable ,Button, onPress} from "react-native";
import React, { useState } from "react";
import styles from "../styles";


const Instructors_list = ({navigation}) => {
    const [data, setData] = useState([
        { Name: "REOUTADE ROLAND", Matricule: "FE21A301", Departement: "Computer Engineering" },
        { Name: "AMARACHUKU GODLOVE", Matricule: "FE21A136", Departement: "Computer Engineering" },
        { Name: "PIANKE OLIVIER", Matricule: "FE21A275", Departement: "Computer Engineering" },
        { Name: "DJITUE BRINDA", Matricule: "FE21A171", Departement: "Computer Engineering" },
        { Name: "TEGUE MODERO", Matricule: "FE21A321", Departement: "Computer Engineering" },
        { Name: "ARDUNO BOY", Matricule: "FE21A949", Departement: "Electrical.Engineering" },
        { Name: "YAO BOY", Matricule: "FE21A555", Departement: "Electrical.Engineering" },
        { Name: "Amad Godlove", Matricule: "FE21A301", Departement: "Electrical.Engineering" },
        { Name: "REOUTADE ROLAND", Matricule: "FE21A301", Departement: "Computer Engineering" },
        { Name: "AMARACHUKU GODLOVE", Matricule: "FE21A136", Departement: "Computer Engineering" },
        { Name: "PIANKE OLIVIER", Matricule: "FE21A275", Departement: "Computer Engineering" },
        { Name: "DJITUE BRINDA", Matricule: "FE21A171", Departement: "Computer Engineering" },
        { Name: "TEGUE MODERO", Matricule: "FE21A321", Departement: "Computer Engineering" },
        { Name: "ARDUNO BOY", Matricule: "FE21A949", Departement: "Electrical.Engineering" },
        { Name: "YAO BOY", Matricule: "FE21A555", Departement: "Electrical.Engineering" },
        { Name: "Amad Godlove", Matricule: "FE21A301", Departement: "Electrical.Engineering" },
        { Name: "REOUTADE ROLAND", Matricule: "FE21A301", Departement: "Computer Engineering" },
        { Name: "AMARACHUKU GODLOVE", Matricule: "FE21A136", Departement: "Computer Engineering" },
        { Name: "PIANKE OLIVIER", Matricule: "FE21A275", Departement: "Computer Engineering" },
        { Name: "DJITUE BRINDA", Matricule: "FE21A171", Departement: "Computer Engineering" },
        { Name: "TEGUE MODERO", Matricule: "FE21A321", Departement: "Computer Engineering" },
        { Name: "ARDUNO BOY", Matricule: "FE21A949", Departement: "Electrical.Engineering" },
        { Name: "YAO BOY", Matricule: "FE21A555", Departement: "Electrical.Engineering" },
        { Name: "Amad Godlove", Matricule: "FE21A301", Departement: "Electrical.Engineering" },
      ]);
    
     
      const [editItem, setEditItem] = useState('');
      const [newName, setNewName] = useState('');
      const [newMatricule, setNewMatricule] = useState('');
      const [newDepartement, setNewDepartement] = useState('');
    
      const renderItem = ({ item, index }) => {
       
        return (
            <View style={styles.row}>
                <Text style={[styles.cell, { width: 60 }]}>{(index + 1).toString()}</Text>
                <Text style={[styles.cell, { width: 300 }]}>{item.Name}</Text>
                <Text style={[styles.cell, { width: 150 }]}>{item.Matricule}</Text>
                <Text style={[styles.cell, { width: 200 }]}>{item.Departement}</Text>
                <Button title="Edit" onPress={onPress} />
                <Button title="Delete" onPress={onPress} />
            </View>
        )
       }
        
      
    
    
      return (
    
        <SafeAreaView  style={styles.container}>
       
         <View style={styles.search}>
           <TextInput label="Search" placeholder='Search student' style={styles.SearchInput} />
         </View>
         
         <ScrollView horizontal>
          <View style={styles.listContainer}>
            <View style={styles.listHeader}>
              <Text style={[styles.Header_table_list, { width: 60 }]}>S.No</Text>
              <Text style={[styles.Header_table_list, { width: 300 }]}>Names</Text>
              <Text style={[styles.Header_table_list, { width: 150 }]}>
                Matricules
              </Text>
              <Text style={[styles.Header_table_list, { width: 200 }]}>
                Departements
              </Text>
            </View>
            <FlatList 
            data ={data}
            renderItem={renderItem}
            keyExtractor={(item, index) =>index.toString()}
            />
          </View>
        </ScrollView>
    
        <Pressable style={styles.next_btn} onPress={() =>{navigation.navigate('Student Registration')}} >
           <Text style={styles.btn_text}>Register</Text>
         </Pressable>
       </SafeAreaView>
    
       
      );
}

export default Instructors_list