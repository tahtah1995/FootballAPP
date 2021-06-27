import React, { useState ,useEffect } from "react";
import Button from 'react-native-flat-button'

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  StyleSheet 
} from "react-native";
import Topnavigator from "../navigation/Topnavigator";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { useFonts } from "expo-font";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import { color } from "react-native-reanimated";
import { createStackNavigator } from '@react-navigation/stack';


  
/**
 * Home screen
 */


 const Home = ({ navigation }) => {
  
    const [loaded] = useFonts({
       
        "Uninsta-ExtraBold" : require('../assets/fonts/Uninsta-ExtraBold.ttf') ,
        "Roboto-Black" : require('../assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold" : require('../assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular" : require('../assets/fonts/Roboto-Regular.ttf'),
      })
      
      if(!loaded){
        return null;
      }
    

    
   navigationOptions = {
        title: 'Home',
    };

   

    return(

        <SafeAreaView style={{ flex:1 , backgroundColor:'#151515'}}>

        
<View>
<TouchableOpacity>
<Image style={{ width: 500, height:200  , marginLeft:-20}} source={{uri:"https://i.postimg.cc/rphXg3Y3/Group-1.png"}}/>
</TouchableOpacity>

<View>
    <View style={{marginLeft:140 , marginTop:40 }}>
        <Text style={ {...FONTS.h1,color:'white'}}>Welcome</Text>
    </View>

  
    <Button
            type="custom"
            onPress={() => navigation.navigate('choose')}
          containerStyle={styles.buttonContainer}
          borderRadius={2}
          backgroundColor={"#03CF64"}
          borderColor={"#03CF64"}
          contentStyle={styles.content}
        >
          Sign up with email
        </Button>
  
</View>


<View style={{marginLeft:180 , marginTop:40 }}>
<Text style={ {...FONTS.h2,color:'white'}}>or</Text>     

<Button
            type="custom"
          onPress={() => Alert.alert('Positive Button')}
          containerStyle={styles.buttonContainer2}
          borderRadius={2}
          backgroundColor={"#ffffff"}
          borderColor={"#ffffff"}
          contentStyle={styles.content}
        >
        <Text style={{color:'#151515'}}>Sign in with Apple</Text>  
        </Button>
  
<Image style={{ width: 20, height:20 , marginTop:-40 , marginLeft:-90 }} source={{uri:"https://i.postimg.cc/0NBLvnzf/apple-64.png"}}         />

<Button
            type="custom"
          onPress={() => Alert.alert('Positive Button')}
          containerStyle={styles.buttonContainer3}
          borderRadius={2}
          backgroundColor={"#4167b2"}
          borderColor={"#4167b2"}
          contentStyle={styles.content}
        >
        <Text style={{color:'#ffffff'}}>Sign in with Facebook</Text>  
        </Button>

        <Text style={{...FONTS.h3,color:'#ffffff' , marginTop:30 ,marginBottom:10 , textDecorationLine:"underline"}}>Log in</Text>  

<View style={{width:250 , height:250 , marginLeft:-90}}>
        <Text style={{...FONTS.body4,color:'#8a8a8a' }}>By continuing you agree to Footy's</Text>  
        <Text style={{...FONTS.h4,color:'#a3a3a3' }}>Terms of Service</Text>
        <Text style={{...FONTS.body4,color:'#8a8a8a' , marginLeft:111 , marginTop:-22}}>and</Text>
        <Text style={{...FONTS.h4,color:'#a3a3a3' , marginLeft:138 , marginTop:-22}}>Privacy Policy</Text>
        </View>
</View>
                
            </View>

            </SafeAreaView>
       
    )
    }
 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    } , 
    buttonContainer: {
        width: 330,
        height: 55,
     backgroundColor:'#03CF64' , 
     marginLeft:30 , 
     marginTop:90 ,
     borderRadius:4
     
        
      } ,

      buttonContainer2: {
        width: 330,
        height: 55,
     backgroundColor:'#ffffff' , 
     marginLeft:-150 , 
     marginTop:20 ,
     borderRadius:4
     
        
      },


      buttonContainer3: {
        width: 330,
        height: 55,
     backgroundColor:'#4167b2' , 
     marginLeft:-150 , 
     marginTop:30 ,
     borderRadius:4
     
        
      },
      content:{
        fontSize: 18
      }
});

export default Home;