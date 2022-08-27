import * as React from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput,Avatar } from 'react-native-paper';
import 'react-native-gesture-handler';
import TermsandConditions from './termsandcondition';
import AdminPassword from './Adminpassword';
 const AdminSettings=({ navigation })=>{
     return(
         <View>
         <View style={{backgroundColor:'lightblue',flexDirection:'row'}}>
             <Avatar.Image size={100} source={require('../images/users.jpg')} style={{marginTop:180}} />
             <Text style={{marginTop:240,fontSize:35,fontWeight:'bold',color:'blue'}}>Account Settings</Text>
         </View>

             <View style={{marginTop:120,paddingRight:180, width:400}}>
        <Button icon={{ uri: 'https://img.icons8.com/external-those-icons-lineal-those-icons/344/external-right-arrows-those-icons-lineal-those-icons-1.png' }} onPress={()=>navigation.navigate('Terms and Conditions')}>Terms and Conditions</Button>
             </View>
             <View style={{marginTop:25,paddingRight:200, width:400}}>
        <Button icon={{ uri: 'https://img.icons8.com/external-those-icons-lineal-those-icons/344/external-right-arrows-those-icons-lineal-those-icons-1.png' }}  onPress={()=>navigation.navigate('Admin Password')}>Change Password</Button>
             </View>
            
            


             </View>
     
     );
 }
 export default AdminSettings;