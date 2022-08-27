import  React,{useState} from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput,Avatar } from 'react-native-paper';
import 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

 const DeleteBooks=({ navigation })=>{
   const [delbook,setdelbook]=useState("");

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Delete BOOKS",
      "Are you sure you want to Delete BOOKS?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { 
            text: "Yes", onPress: () => 
            {
                console.log("OK Pressed")
             } 
        }
      ]
    );

    const del=async()=>{

      const snapshot=
      await firestore()
  .collection('Books').where("name","==",delbook).limit(1).get();
  const doc=snapshot.docs[0];
  doc.ref.delete();
  Alert.alert("Delete Successful");
  
    }
     return(
         <View style={{backgroundColor:'#e6e6fa',height:700}}>
             <View style={{marginLeft:90,height:150,width:200,borderRadius:50,margin:10,backgroundColor:'#dcd0ff'}}>
              
             <Image  source={require('../images/remove-bag.png')} style={{resizeMode:'contain',height:100,width:200,top:5,margin:0}} />
            
             </View>
             <Text style={{marginLeft:150,fontSize:20,fontWeight:'bold'}}>Delete BOOKS</Text>
           <View style={{padding:20,margin:20}}>
               <TextInput label="Book Name" style={{height:70,borderWidth:1,margin:10}} onChangeText={setdelbook}></TextInput>
               <View style={{top:30,margin:10,height:50,width:120,marginLeft:110,backgroundColor:'lightblue'}}>
                   <Button color="black" onPress={del}> Submit </Button>
               </View>

           </View>


             </View>
     
     );
 }
 export default DeleteBooks;