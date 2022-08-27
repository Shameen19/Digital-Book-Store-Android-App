import * as React from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput } from 'react-native-paper';

import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();
import CustomerScreen from './Customer';
import LoginScreen from './login';
import WelcomeScreen from './WelcomeScreen';
import AdminLogin from './AdminScreen';



const AdminTabnavigator=()=>{
    return(
        <Tab.Navigator
      initialRouteName="Welcome"
      activeColor="#222930"
      activeBackgroundColor=" #222930"
      inactiveBackgroundColor="#222930"
    >
        <Tab.Screen
        name="FirstScreen"
        component={WelcomeScreen}
        options={{
          tabBarLabel: 'Customer USe',
          header:()=>null,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Admin"
        component={AdminLogin}
        options={{
          tabBarLabel: 'Admin',
          header:()=>null,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}
export default AdminTabnavigator;