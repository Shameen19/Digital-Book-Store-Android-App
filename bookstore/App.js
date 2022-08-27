import React,{useState,useEffect} from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet} from 'react-native';
import OnboardingScreen from './Screens/onboardingscreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput } from 'react-native-paper';
import Billing from './Screens/Bill';
import 'react-native-gesture-handler';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import WelcomeScreen from './Screens/WelcomeScreen';
import SignUpScreen from './Screens/SignUp';
import LoginScreen from './Screens/login';
import Tabnavigator from './Screens/tabnavigator';
import Drawernavigationcheck from './Screens/drawernavigator';
import CustomerScreen from './Screens/Customer';
import Settings from './Screens/settings';
import ViewBooks from './Screens/Viewbooks';
import Placeorder from './Screens/placeorder';
const Stack = createNativeStackNavigator();
const Drawer=createDrawerNavigator();
import ChangeAddress from './Screens/changeUsername';
import TermsandConditions from './Screens/termsandcondition';
import ChangePassword from './Screens/changepassword';
import AdminTabnavigator from './Screens/admintabnavigator';
import AdminDashboard from './Screens/admindashboard';
import AdminSettings from './Screens/adminsettings';
import AdminPassword from './Screens/Adminpassword';
import AppSettings from './Screens/Appsettings';
import AddBooks from './Screens/AddBooks';
import UpdateBooks from './Screens/updateBooks';
import DeleteBooks from './Screens/Deletebooks';
import Search from './Screens/Searchbook';


import AsyncStorage from '@react-native-async-storage/async-storage';
function App() {

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

useEffect(() => {
  AsyncStorage.getItem('alreadyLaunched').then(value => {
    if (value === null) {
      AsyncStorage.setItem('alreadyLaunched', 'true');
      setIsFirstLaunch(true);
    } else {
      setIsFirstLaunch(false);
    }
  });
}, []);



if(isFirstLaunch=== null){
  return null;

}
else if(isFirstLaunch===true)
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Sacred Knowledge" component={OnboardingScreen} />
        <Stack.Screen name="Welcome" component={AdminTabnavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Customer" component={Drawernavigationcheck}/>
        <Stack.Screen name="ViewBooks" component={ViewBooks} />
        <Stack.Screen name="Placeorder" component={Placeorder} />
        <Stack.Screen name="Bill" component={Billing} />
        <Stack.Screen name="Change Address" component={ChangeAddress} />
        <Stack.Screen name="Terms and Conditions" component={TermsandConditions} />
        <Stack.Screen name="Change Password" component={ChangePassword} />
        <Stack.Screen name="Admin Dashboard" component={AdminDashboard} />
        <Stack.Screen name="Admin Settings" component={AdminSettings} />
        <Stack.Screen name="Admin Password" component={AdminPassword} />
        <Stack.Screen name="App Setting" component={AppSettings} />
        <Stack.Screen name="Add books" component={AddBooks} />
        <Stack.Screen name="Update Books" component={UpdateBooks} />
        <Stack.Screen name="Delete Books" component={DeleteBooks} />
        <Stack.Screen name="Search Books" component={Search} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}
else{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={AdminTabnavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Customer" component={Drawernavigationcheck}/>
        <Stack.Screen name="ViewBooks" component={ViewBooks} />
        <Stack.Screen name="Placeorder" component={Placeorder} />
        <Stack.Screen name="Bill" component={Billing} />
        <Stack.Screen name="Change Address" component={ChangeAddress} />
        <Stack.Screen name="Terms and Conditions" component={TermsandConditions} />
        <Stack.Screen name="Change Password" component={ChangePassword} />
        <Stack.Screen name="Admin Dashboard" component={AdminDashboard} />
        <Stack.Screen name="Admin Settings" component={AdminSettings} />
        <Stack.Screen name="Admin Password" component={AdminPassword} />
        <Stack.Screen name="App Setting" component={AppSettings} />
        <Stack.Screen name="Add books" component={AddBooks} />
        <Stack.Screen name="Update Books" component={UpdateBooks} />
        <Stack.Screen name="Delete Books" component={DeleteBooks} />
        <Stack.Screen name="Search Books" component={Search} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}
  
}

const styles=StyleSheet.create({
  viewTextStyles:{
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
  },
  textStyle:{
    fontSize:23,
    fontWeight:'bold',
    color:'white',
  }
});

export default App;
