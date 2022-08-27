import * as React from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput,Avatar } from 'react-native-paper';
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';

 const TermsandConditions=({ navigation })=>{

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Terms and Conditions",
      "Do you agree to our Terms and Conditions?",
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
             <ScrollView>
         <View style={{backgroundColor:'#1e847fs'}}>
         </View>
           <View style={{padding:10,backgroundColor:'#039fbe'}}>
               <Text style={{marginLeft:70,color:'white',fontWeight:'bold',fontSize:25,justifyContent:'center',padding:10,alignItems:'center'}}>Terms And Conditions</Text>
               <Text style={{color:'white',fontSize:20}}>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Service, the Privacy Policy, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. We may modify these Terms and Conditions at any time without notice to you by posting revised Terms and Conditions of Service. Your use of the website constitutes your binding acceptance of these Terms and Conditions of Service, including any modifications that we make. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
The Service includes a combination of content that we create and that other third party content suppliers create. You understand that the Service are provided "AS IS", and that Copyandpasteemoji.com does not guarantee the accuracy, integrity or quality of any content available on the website. Copyandpasteemoji.com disclaims all responsibility and liability for the accuracy, availability, timeliness, security or reliability of the Service. We reserve the right to modify, suspend or discontinue the Service with or without notice at any time and without any liability to you.
The Service is directed to adults and is not directed to children under the age of 18. You must be 18 years of age or older to use the Service.

Access to Sites
Copyandpasteemoji.com grants you a limited license to access and use the website via Web browsers or RSS readers only. You agree not to copy, republish, frame, download, transmit, modify, rent, lease, loan, sell, assign, distribute, license, sublicense, reverse engineer, or create derivative works based on the Content or Design of the website.
In addition, you agree not to use any data mining, robots, or similar data gathering and extraction methods in connection with the website. You further agree that you will not interfere with another member's use and enjoyment of the Service; you will not interfere with or disrupt the security measures of the Service; you will not interfere with or disrupt networks connected to the Service.

Use License
Permission is granted to temporarily download one copy of the materials (information or software) on Copyandpasteemoji.com website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
- modify or copy the materials;
- use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
- attempt to decompile or reverse engineer any software contained on Copyandpasteemoji.com website;
- remove any copyright or other proprietary notations from the materials; or
- transfer the materials to another person or "mirror" the materials on any other server;
- transfer the materials to another person or "mirror" the materials on any other server;
- access the site using automated means which may degrade service for others.
This license shall automatically terminate if you violate any of these restrictions and may be terminated by Copyandpasteemoji.com at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.

Conduct on Website and Contribution of Content
Your use of the Website is subject to all applicable laws and regulations, and you are solely responsible for the substance of your communications through the Website. By posting information in or otherwise using any communications service that may be available to you on or through this Website, you agree that you will not upload, share, post, or otherwise distribute or facilitate distribution of any content (including text, communications, data or other information) that:

- is known by you to be false, inaccurate or misleading;

- is for purposes of spamming;

- is unlawful, obscene, vulgar, shocking, excessive profanity, threatens or advocates for harm on oneself or others, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another's privacy, tortious, contains explicit or graphic descriptions or accounts of sexual acts (including but not limited to sexual language of a violent or threatening nature directed at another individual or group of individuals), pornographic, adult or mature, or otherwise violates our rules or policies, profane or indecent including any communication that constitutes (or encourages conduct that would constitute) a criminal offense, gives rise to civil liability or otherwise violates any local, state or federal law, bullies, victimizes, harasses, degrades, or intimidates an individual or group of individuals;

- is malware, adware, hacking, cracking content, Illicit drugs and drug paraphernalia content, or any other content that is illegal, promotes illegal activity or infringes on the legal rights of others;

- contains links to software viruses or any other computer code, files, or programs itself that are designed or intended to disrupt, damage, or limit the functioning of any software, hardware, or telecommunications equipment or to damage or obtain unauthorized access to any data or other information of any third party;

- impersonates any person or entity, including any of our employees or representatives;

- is regarding programs which compensate users for clicking ads or offers, performing searches, surfing websites or reading emails;

- claims the identity, characteristics or qualifications of another person;

- for which you were compensated or granted any consideration by any third party;

- incites hatred against, promotes discrimination of, or disparages an individual or group on the basis of their race or ethnic origin, religion, disability, age, nationality, veteran status, sexual orientation, gender, gender identity, or other characteristic that is associated with systemic discrimination or marginalization;</Text>
               <View style={{top:30,margin:10,borderWidth:1,height:50,width:120,marginLeft:140,backgroundColor:'lightblue'}}>
                   <Button color="black" onPress={()=>{createTwoButtonAlert({navigation})}}> Submit </Button>
               </View>

           </View>

           </ScrollView>
             </View>
     
     );
 }
 export default TermsandConditions;