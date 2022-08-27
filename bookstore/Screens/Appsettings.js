import * as React from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput,Avatar } from 'react-native-paper';
import 'react-native-gesture-handler';
import AddBooks from './AddBooks';
import UpdateBooks from './updateBooks';
import ViewBooks from './Viewbooks';
import Search from './Searchbook';
 const AppSettings=({ navigation })=>{
     return(
         <View>
         <View style={{backgroundColor:'lightblue',flexDirection:'row'}}>
             <Avatar.Image size={100} source={require('../images/users.jpg')} style={{marginTop:180}} />
             <Text style={{marginTop:240,fontSize:35,fontWeight:'bold',color:'blue'}}>APP Settings</Text>
         </View>
         <View style={{marginTop:50,marginRight:250,}}>
        <Button icon={{ uri: 'https://img.icons8.com/external-those-icons-lineal-those-icons/344/external-right-arrows-those-icons-lineal-those-icons-1.png' }} onPress={()=>navigation.navigate('Add books')}>Add BOOKS</Button>
             </View>

             <View style={{marginTop:25,paddingRight:180, width:350}}>
        <Button icon={{ uri: 'https://img.icons8.com/external-those-icons-lineal-those-icons/344/external-right-arrows-those-icons-lineal-those-icons-1.png' }} onPress={()=>navigation.navigate('Update Books')}>Update Books</Button>
             </View>
             <View style={{marginTop:25,paddingRight:200, width:350}}>
        <Button icon={{ uri: 'https://img.icons8.com/external-those-icons-lineal-those-icons/344/external-right-arrows-those-icons-lineal-those-icons-1.png' }}  onPress={()=>navigation.navigate('Delete Books')}>Delete Books</Button>
             </View>
            
             <View style={{marginTop:25,paddingRight:565, width:700}}>
        <Button icon={{ uri: 'https://img.icons8.com/external-those-icons-lineal-those-icons/344/external-right-arrows-those-icons-lineal-those-icons-1.png' }} onPress={()=>navigation.navigate('ViewBooks')}>View Books</Button>
             </View>



             <View style={{marginTop:25,paddingRight:555, width:800}}>
        <Button icon={{ uri: 'https://img.icons8.com/external-those-icons-lineal-those-icons/344/external-right-arrows-those-icons-lineal-those-icons-1.png' }} onPress={()=>navigation.navigate('Search Books')}>Search Books</Button>
             </View>
             </View>
     
     );
 }
 export default AppSettings;