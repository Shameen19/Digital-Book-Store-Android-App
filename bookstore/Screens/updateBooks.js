import  React,{useState} from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput,Avatar } from 'react-native-paper';
import 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

 const UpdateBooks=({ navigation })=>{
   const[name,setname]=useState("");
   const[quan,setquan]=useState("");
   const[price,setprice]=useState("");

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Update BOOKS",
      "Are you sure you want to Update BOOKS?",
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

    const update=async()=>{
      const snapshot=
      await firestore()
  .collection('Books').where("name","==",name).limit(1).get();
  const doc=snapshot.docs[0];
  doc.ref.set({
    name:name,
    quantity:quan,
    price:price,
  });
  Alert.alert("success");
    }

     return(
         <View style={{backgroundColor:'#ffebcd',height:700}}>
             <View style={{marginLeft:90,height:150,width:200,borderRadius:50,margin:10,backgroundColor:'#fff5ee'}}>
              
             <Image  source={require('../images/updatebooks.png')} style={{resizeMode:'contain',height:100,width:200,top:5,margin:0}} />
            
             </View>
             <Text style={{marginLeft:150,fontSize:20,fontWeight:'bold'}}>Update BOOKS</Text>
           <View style={{padding:20,margin:20}}>
               <TextInput label="Book Name" style={{height:70,borderWidth:1,margin:10}} onChangeText={setname}></TextInput>
               <TextInput label="New Quantity" style={{height:70,borderWidth:1,margin:10}}   onChangeText={setquan}></TextInput>
               <TextInput label=" New Price" style={{height:70,borderWidth:1,margin:10}}  onChangeText={setprice}></TextInput>
               <View style={{top:30,margin:10,height:50,width:120,marginLeft:110,backgroundColor:'#fddde6'}}>
                   <Button color="black" onPress={update}> Submit </Button>
               </View>

           </View>


             </View>
     
     );
 }
 export default UpdateBooks;