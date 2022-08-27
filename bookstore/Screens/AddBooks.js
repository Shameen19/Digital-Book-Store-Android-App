import React ,{useState} from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet,Alert,Keyboard,TouchableWithoutFeedback} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput,Avatar } from 'react-native-paper';
import 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';

 const AddBooks=({ navigation })=>{
   const[bookname,setbookname]=useState("");
   const[quantity,setquantity]=useState("");
   const[price,setprice]=useState("");
   const[imageuri,seturi]=useState("");

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Add BOOKS",
      "Are you sure you want to Add BOOKS?",
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

    const add=()=>{
      firestore()
      .collection('Books')
      .doc(bookname)
      .set({
    name: bookname,
    quantity:quantity ,
    price:price,
    imageuri:imageuri,
  })
  .then(() => {
    console.log('added!');
    alert("successful");
  });
    }
     return(
         <View style={{backgroundColor:'#e6e6fa',height:700}}>
             <View style={{marginLeft:90,height:150,width:200,borderRadius:50,margin:10,backgroundColor:'#dcd0ff'}}>
              
             <Image  source={require('../images/books.png')} style={{resizeMode:'contain',height:100,width:200,top:5,margin:0}} />
             
             </View>
             
             <Text style={{marginLeft:150,fontSize:20,fontWeight:'bold'}}>Add BOOKS</Text>
             <ScrollView >
           <View style={{padding:20,marginTop:100}}>
           <TextInput label="Image uri" style={{height:70,borderWidth:1,margin:10}} onChangeText={seturi}
></TextInput>
               <TextInput label="Book Name" style={{height:70,borderWidth:1,margin:10}} onChangeText={setbookname}></TextInput>
               <TextInput label="Quantity" style={{height:70,borderWidth:1,margin:10}} onChangeText={setquantity} keyboardType="numeric"></TextInput>
               <TextInput label="Price" style={{height:70,borderWidth:1,margin:10}} onChangeText={setprice} keyboardType="numeric"></TextInput>
               <View style={{top:10,margin:10,height:50,width:120,marginLeft:110,backgroundColor:'lightblue'}}>
                   <Button color="black" onPress={add}> Submit </Button>
               </View>
              

           </View>
           </ScrollView>

             </View>
     
     );
 }
 export default AddBooks;