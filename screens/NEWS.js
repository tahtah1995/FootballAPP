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

import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { useFonts } from "expo-font";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'




  
/**
 * Home screen
 */


 const NEWS = ({ navigation }) => {
  
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
        title: 'NEWS',
    };

   

    return(
<View style={{flex: 1, backgroundColor: '#151515' }}>
  <ScrollView>
   <View style={{borderWidth:0}} >
   <Image  source={{uri:"https://i.postimg.cc/DwjWdGHX/i-Phone-X-XS-11-Pro-1.png"}}  style={{width:400 , height:200 , borderRadius:5 }}/>
<Image  source={{uri:"https://i.postimg.cc/cHSbDqyP/Ellipse-1.png"}} style={{
  height: 65,
  width: 65 , marginTop:-170 , marginLeft:170
}} /> 
<Image  source={{uri:"https://i.postimg.cc/NF4FywBt/pngegg-2.png"}} style={{
  height: 50,
  width: 50 , marginTop:-55 , marginLeft:178
}} /> 

<Text style={{...FONTS.h1 , marginTop:12 , color:'white' , marginLeft:150 , }}>Arsenal</Text>
<Text style={{...FONTS.h3 , marginTop:-8 , color:'white' , marginLeft:177 , }}>London</Text>
   </View>

<View>
<Image  source={{uri:"https://i.postimg.cc/VLJFK4wg/hoctoofo0xi5k9jltnml.jpg"}} style={{
  height: 200,
  width: 372 , marginTop:25 ,marginLeft:12 , borderRadius:10 ,shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  
 
}} /> 

<Image source={{uri:"https://i.postimg.cc/52xwFMgX/Rectangle-1.png"}}  

style={{

  height: 75,
  width: 370 , marginTop:-70 ,marginLeft:12 , borderWidth:0 , opacity:0.08

}}
/>



<Button
            type="custom"
            onPress={() => navigation.navigate('Topnavigator')}
          containerStyle={styles.buttonContainer}
          borderRadius={4}
          backgroundColor={"#03CF64"}
          borderColor={"#03CF64"}
          contentStyle={styles.content}
       
        >
         New
        </Button>

        <View style={{width:380 , height:250 , marginLeft:-90 , marginTop:78}}>
        <Text style={{...FONTS.body2,color:'#fefefe' , marginLeft:120}}>Champions league will be won</Text>  
        <Text style={{...FONTS.body2,color:'#fefefe' , marginLeft:120 , marginTop:-7}}>By Man City , Liverpool or</Text>
        <Text style={{...FONTS.body2,color:'#fefefe' , marginLeft:120 , marginTop:-7}}>Barcelona</Text>
        </View>

        </View>
<View>

<View >
 {/* 1 card panel view whole */}

<View style={{marginTop:-140}}>
   {/* image left view */}

   <Image source={{uri:"https://i.postimg.cc/fTd6ZPZw/202988734-1683822548478156-2387065765665267063-n.jpg"}}  
   
   style={{
     width:62 ,
     height:62 ,
    marginLeft:20 ,
    borderRadius:5
   }}
   
   />
</View>

<View style={{marginTop:-140}}>
   {/* right part view */}

   <Text style={{...FONTS.h6,color:'#fefefe' , marginLeft:120}}> Arsenal team gives big lesson</Text>
   <Text style={{...FONTS.h6,color:'#fefefe' , marginLeft:120 , marginTop:-2}}> to Man city in away match</Text>
   <View>
 {/* right under part view */}
 <Text style={{...FONTS.h7,color:'#4a4a4a' , marginLeft:120 , marginTop:5 }}> ESPN</Text>
 <Text style={{...FONTS.h7,color:'#4a4a4a' , marginLeft:180 , marginTop:-22 }}> 1 hr ago</Text>
 <Text style={{...FONTS.h7,color:'#4a4a4a' , marginLeft:260 , marginTop:-22 }}> 31</Text>
 <Image source={{uri:"https://i.postimg.cc/1zYyv0Tn/Seek-Png-com-comment-png-1196181.png"}}  style={{

width:13 , height:13 ,marginLeft:283 , marginTop:-15

 }}/>
   </View>
</View>
<View
  style={{
    borderBottomColor: '#2d2d2d',
    borderBottomWidth: 2, marginTop:-44
  }}
/>
</View>

<View style={{marginTop:110}} >
 {/* 1 card panel view whole */}

<View style={{marginTop:-140}}>
   {/* image left view */}

   <Image source={{uri:"https://i.postimg.cc/fTd6ZPZw/202988734-1683822548478156-2387065765665267063-n.jpg"}}  
   
   style={{
     width:62 ,
     height:62 ,
    marginLeft:20 ,
    borderRadius:5
   }}
   
   />
</View>

<View style={{marginTop:-140}}>
   {/* right part view */}

   <Text style={{...FONTS.h6,color:'#fefefe' , marginLeft:120}}> Arsenal team gives big lesson</Text>
   <Text style={{...FONTS.h6,color:'#fefefe' , marginLeft:120 , marginTop:-2}}> to Man city in away match</Text>
   <View>
 {/* right under part view */}
 <Text style={{...FONTS.h7,color:'#4a4a4a' , marginLeft:120 , marginTop:5 }}> ESPN</Text>
 <Text style={{...FONTS.h7,color:'#4a4a4a' , marginLeft:180 , marginTop:-22 }}> 1 hr ago</Text>
 <Text style={{...FONTS.h7,color:'#4a4a4a' , marginLeft:260 , marginTop:-22 }}> 31</Text>
 <Image source={{uri:"https://i.postimg.cc/1zYyv0Tn/Seek-Png-com-comment-png-1196181.png"}}  style={{

width:13 , height:13 ,marginLeft:283 , marginTop:-15

 }}/>
   </View>
</View>
<View
  style={{
    borderBottomColor: '#2d2d2d',
    borderBottomWidth: 2, marginTop:-44
  }}
/>
</View>

<View style={{marginTop:110}} >
 {/* 1 card panel view whole */}

<View style={{marginTop:-140}}>
   {/* image left view */}

   <Image source={{uri:"https://i.postimg.cc/fTd6ZPZw/202988734-1683822548478156-2387065765665267063-n.jpg"}}  
   
   style={{
     width:62 ,
     height:62 ,
    marginLeft:20 ,
    borderRadius:5
   }}
   
   />
</View>

<View style={{marginTop:-140}}>
   {/* right part view */}

   <Text style={{...FONTS.h6,color:'#fefefe' , marginLeft:120}}> Arsenal team gives big lesson</Text>
   <Text style={{...FONTS.h6,color:'#fefefe' , marginLeft:120 , marginTop:-2}}> to Man city in away match</Text>
   <View>
 {/* right under part view */}
 <Text style={{...FONTS.h7,color:'#4a4a4a' , marginLeft:120 , marginTop:5 }}> ESPN</Text>
 <Text style={{...FONTS.h7,color:'#4a4a4a' , marginLeft:180 , marginTop:-22 }}> 1 hr ago</Text>
 <Text style={{...FONTS.h7,color:'#4a4a4a' , marginLeft:260 , marginTop:-22 }}> 31</Text>
 <Image source={{uri:"https://i.postimg.cc/1zYyv0Tn/Seek-Png-com-comment-png-1196181.png"}}  style={{

width:13 , height:13 ,marginLeft:283 , marginTop:-15

 }}/>
   </View>
</View>
<View
  style={{
    borderBottomColor: '#2d2d2d',
    borderBottomWidth: 2, marginTop:-44
  }}
/>
</View>
</View>
</ScrollView>
</View>

    )


 }


 const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center' ,
     
    
  } ,
  buttonContainer: {
    width: 52,
    height: 31,
 backgroundColor:'#03CF64' , 
 marginLeft:20 , 
 marginTop:-190 ,
 borderRadius:4 ,
 fontSize:10
 
    
  }

});

 export default NEWS;