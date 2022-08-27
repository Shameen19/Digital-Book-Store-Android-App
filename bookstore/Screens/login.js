import * as React from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput } from 'react-native-paper';
import CustomerScreen from './Customer';
import 'react-native-gesture-handler';


const LoginScreen=({navigation})=> {
  const [username, setusername] = useState('');
  const [password, setpass] = useState('');


 
    return (
      <View >
        <Image source={require('../images/login2.png')} style={{resizeMode:'stretch',height:660,width:400}}/>
          <Text style={{position:'absolute',top:150,color:'black',fontSize:25}}>Username</Text>
          <TextInput style={{top:187,width:355,position:'absolute',backgroundColor:'lightblue'}} onChangeText={setusername}></TextInput>
          <Text style={{position:'absolute',top:285,color:'black',fontSize:25}}>Password</Text>
          <TextInput style={{top:317,width:355,position:'absolute',backgroundColor:'lightblue'}} onChangeText={setpass}></TextInput>
          <View style={{height:65,borderRadius:150,backgroundColor:'lightblue',position:'absolute',top:475,marginLeft:100,widht:1000,justifyContent:'center',alignItems:'center'}}>
           <Button style={{width:175}} color='black' onPress={Authenticate}>Submit</Button>
           </View>
        </View>
    );
  }

  export default LoginScreen;