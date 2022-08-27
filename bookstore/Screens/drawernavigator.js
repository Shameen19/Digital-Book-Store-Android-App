import * as React from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput } from 'react-native-paper';
import 'react-native-gesture-handler';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomerScreen from './Customer';
import SignUpScreen from './SignUp';
import LoginScreen from './login';
import WelcomeScreen from './WelcomeScreen';
import Tabnavigator from './tabnavigator';
import Settings from './settings';

const Drawer=createDrawerNavigator();

const Drawercheck  = (props) => {
    return(
        <View style={{flex:1}}>
          
         <ImageBackground source={require('../images/booksto.jpg')} style={{padding:20,marginTop:0,marginBottom:2,height:300}}/>
       <View style={{flex:1,backgroundColor:'#fff',paddingTop:10}}>
       <DrawerItemList {...props} />
           </View>
  
       </View>
    );
  }
  
  const Drawernavigationcheck=()=>{
    return(
      <Drawer.Navigator drawerContent={props=><Drawercheck{...props}/>}
    >
         <Drawer.Screen
         name="My profile"
             options={{
              header: () => null,
              headerShown:true,
             }}
             component={Tabnavigator}
           />
             <Drawer.Screen
             name="Settings"
             component={Settings}
             options={{
              headerShown:false
            }}
           />   
      </Drawer.Navigator>
    );
  }
  export default Drawernavigationcheck;
