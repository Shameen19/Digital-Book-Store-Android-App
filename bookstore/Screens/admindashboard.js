import * as React from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput,Avatar } from 'react-native-paper';
import 'react-native-gesture-handler';
import WelcomeScreen from './WelcomeScreen';
import AppSettings from './Appsettings';
 const AdminDashboard=({ navigation })=>{
     return(
         <View style={{backgroundColor:'#e7e8d1',height:700}}>
                 <Image source={require('../images/dashboard-apps.png')}
                 style={{marginLeft:140,top:90}}/>
                 <Text style={{marginLeft:120,marginTop:100,fontSize:20,fontWeight:'bold',color:'purple'}}>Dashboard</Text>

                 <View style={{flexDirection:'row'}}>
         <View style={{ borderRadius:50,marginLeft:20,top:79,height:150,width:150,backgroundColor:'#a7beae'}}>
         <Image source={require('../images/settings.png')}
                 style={{resizeMode:'contain',marginLeft:40,top:20,height:60}}/>
                 <TouchableOpacity>
                 <Text style={{marginLeft:40,top:20,fontSize:18,fontWeight:'bold'}} onPress={()=>navigation.navigate('App Setting')}>App Settings</Text>
                 </TouchableOpacity>
         </View>

         <View style={{ borderRadius:50,marginLeft:20,top:79,height:150,width:150,backgroundColor:'#a7beae'}}>
         <Image source={require('../images/theme.png')}
                 style={{resizeMode:'contain',marginLeft:40,top:20,height:60}}/>
                 <TouchableOpacity>
                 <Text style={{marginLeft:40,top:20,fontSize:18,fontWeight:'bold'}}>Themes</Text>
                 </TouchableOpacity>
         </View>
         </View>
           <View style={{flexDirection:'row'}}>
         <View style={{ borderRadius:50,marginLeft:20,top:89,height:150,width:150,backgroundColor:'#a7beae'}}>
         <Image source={require('../images/accounting.png')}
                 style={{resizeMode:'contain',marginLeft:40,top:20,height:60}}/>
                 <TouchableOpacity>
                 <Text style={{marginLeft:40,top:20,fontSize:18,fontWeight:'bold'}}  onPress={()=>navigation.navigate('Admin Settings')}>Profile</Text>
                 </TouchableOpacity>
         </View>
         <View style={{ borderRadius:50,marginLeft:20,top:89,height:150,width:150,backgroundColor:'#a7beae'}}>
         <Image source={require('../images/log.png')}
                 style={{resizeMode:'contain',marginLeft:40,top:20,height:60}}/>
                 <TouchableOpacity onPress={()=>navigation.navigate('Welcome')}>
                 <Text style={{marginLeft:40,top:20,fontSize:18,fontWeight:'bold'}}>Log Out</Text>
                 </TouchableOpacity>
         </View>
         </View>
             </View>
     
     );
 }
 export default AdminDashboard;