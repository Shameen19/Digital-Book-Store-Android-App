import  React,{useState} from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput,Avatar } from 'react-native-paper';
import 'react-native-gesture-handler';
import ChangeAddress from './changeUsername';
import TermsandConditions from './termsandcondition';
import AdminDashboard from './admindashboard';
 const AdminLogin=({ navigation })=>{
     const [name,setname]=useState("");
     const [pass,setpass]=useState("");
     const [passwordVisible, setPasswordVisible] = useState(true);

     const Authorize=()=>{
         if((name == 'admin') & (pass == 'admin'))
         {
             Alert.alert("login SUCCESS");
             navigation.navigate('Admin Dashboard');
         }
         else{
             Alert.alert("Invalid ");
         }
     }
     return(
         <View>
         <View style={{backgroundColor:'#f5f0e1'}}>
             <Avatar.Image size={100} source={require('../images/customer-call.png')} style={{marginLeft:140,marginTop:110}} />
             <Text style={{marginTop:20,fontSize:35,fontWeight:'bold',color:'purple',marginLeft:55}} >Welcome Admin</Text>
         </View>

               <View style={{marginTop:60,width:350,marginLeft:20}}>
               <TextInput label="Admin Credentials" onChangeText={setname}></TextInput>
               </View>
               <View style={{marginTop:20,width:350,marginLeft:20}}>
               <TextInput label="Password" onChangeText={setpass} secureTextEntry={passwordVisible}
              right={
                <TextInput.Icon
                  name={passwordVisible ? 'eye' : 'eye-off'}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }></TextInput>
               </View>
               <View style={{height:45,top:40,width:150,marginLeft:120,backgroundColor:'#c6d7eb'}}>
               <Button onPress={Authorize}>Authorize</Button>
               </View>
             </View>
     
     );
 }
 export default AdminLogin;