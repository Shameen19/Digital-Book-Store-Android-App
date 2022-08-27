import * as React from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput,Avatar } from 'react-native-paper';
import 'react-native-gesture-handler';

 const AdminPassword=({ navigation })=>{

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Update Address",
      "Are you sure you want to update your address?",
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

     return(
         <View>
         <View style={{backgroundColor:'#12a4d9',flexDirection:'row'}}>
             <Avatar.Image size={100} source={require('../images/users.jpg')} style={{marginTop:110,marginLeft:150}} />
         </View>
           <View style={{padding:10}}>
               <TextInput label="Old Password" style={{height:70,borderWidth:1,margin:10}}></TextInput>
               <TextInput label="New Password" style={{height:70,borderWidth:1,margin:10}}></TextInput>
               <View style={{top:30,margin:10,borderWidth:1,height:50,width:120,marginLeft:140,backgroundColor:'lightblue'}}>
                   <Button color="black" onPress={()=>{createTwoButtonAlert({navigation})}}> Submit </Button>
               </View>

           </View>


             </View>
     
     );
 }
 export default AdminPassword;