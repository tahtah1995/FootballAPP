import React, { useState ,useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  StyleSheet ,
  Pressable
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { useFonts } from "expo-font";
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';


const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent"
  }
}


let count = 0;



const chooseClub = ({ navigation }) => {

  let imagesURL = ["https://i.postimg.cc/WpY75RsK/pngegg-2.png" ,

  "https://i.postimg.cc/mr4qTxzj/584a9b3bb080d7616d298777.png"

, "https://i.postimg.cc/J0HKbKHt/pngwing-com.png" ,
"https://i.postimg.cc/bYSK0RhQ/pngwing-com-1.png" ,"https://i.postimg.cc/5ym55GN4/pngwing-com-2.png" ,
"https://i.postimg.cc/4xrjK7KJ/Atletico-Madrid-01.png", "https://i.postimg.cc/cH1h60cx/bayern-munich-logo.png" ,
"https://i.postimg.cc/J0HKbKHt/pngwing-com.png" ,
"https://i.postimg.cc/FHWnMP5C/pngwing-com-3.png" , "https://i.postimg.cc/QCvcgWRb/584aaf7130d6736bca3d6ded.png" ,
"https://i.postimg.cc/hPpNb4jd/toppng-com-paris-saint-germain-football-club-logo-1024x1024.png" ,
"https://i.postimg.cc/h4C02XLc/klipartz-com.png" ,
"https://i.postimg.cc/m2sFNRqB/Pik-Png-com-gucci-logo-png-539959.png"




];



const[opacity , setopacity] = useState(1);
const[opacity2 , setopacity2] = useState(0.5);
const[opacity3 , setopacity3] = useState(0.2);
const[opacity4 , setopacity4] = useState(1);
const[opacity5 , setopacity5] = useState(0.5);
const[opacity6 , setopacity6] = useState(0.2);
const[pressed , setPressed]= useState(false);
const[ color ,setcolor] = useState('#515151') ;
const changeOpacity2 = ()=>{
  if(!pressed){
    setPressed(true);
   setopacity4(1);
   setopacity5(0.5)
  setopacity6(0)
 
 } else {
  setPressed(false);
  setopacity4(0.5);
   setopacity5(1);
   setopacity6(1);
 }
}



const changeOpacity = ()=>{
  if(!pressed){
    setPressed(true);
   setopacity(1);
   setopacity2(0.5)
  setopacity3(0)
 
 } else {
  setPressed(false);
  setopacity(0.5);
   setopacity2(1);
   setopacity3(1)
 }

 changeColor();
}


const changeColor = ()=>{
  if(!pressed){
    setPressed(true);
  setcolor('#515151')
  
 
 } else {
  setPressed(false);
  setcolor('#ffffff')
 }
}
  const [loaded] = useFonts({
      "Roboto-Black" : require('../assets/fonts/Roboto-Black.ttf'),
      "Roboto-Bold" : require('../assets/fonts/Roboto-Bold.ttf'),
      "Roboto-Regular" : require('../assets/fonts/Roboto-Regular.ttf'),
  })

  
   


  
  


  
  


  

if(!loaded){
  return null;
}
  return (
     
    <SafeAreaView style={{ flex:1 , backgroundColor:'#151515'}}> 

<View style={{marginTop:50 , marginLeft:20}} >
            <TouchableOpacity style={{width:40 , height:40}} 
            
            
            onPress={()=>{
                navigation.navigate('choose');
            }}
            >
                <Image style={{ width: 20, height:20 }} source={{uri:"https://i.postimg.cc/MZnTS0rx/pngaaa-com-3944443.png"}} />
        
        
        

            </TouchableOpacity>


            <Text style={{ ...FONTS.h2, color: color ,marginTop:-45 , marginLeft:300 ,width: 80, height:80 }} onPress={()=>{
    navigation.navigate('Topnavigator');
}}>Next</Text>
           
        </View>
    <View style={styles.cardIcons}>
        <View style={styles.textContainer}>
            
       
          <Text style={{ ...FONTS.h1, color: COLORS.white , marginLeft:20 }}>Select</Text>
          <Text style={{ ...FONTS.h1, color: COLORS.white , marginLeft:20 }}>Championships</Text>
            


        </View>
       
        <View style={[ styles.cardIcons ] , {marginTop:-20 , marginRight:270 }}>
            <TouchableOpacity style={[styles.iconProfile, styles.icon1] } onPress={()=>changeOpacity()}         >
                <Image style={{ width: 65, height: 65 , opacity:opacity  }} source={{uri:imagesURL[count] }} />
                <Image style={{ width: 70, height: 70 , marginTop:-70 , opacity:opacity3 }} source={{uri:"https://i.postimg.cc/RFV5yYz9/image-3.png" }} />
            </TouchableOpacity>
        </View>

        



        
        <View style={[ styles.cardIcons ] , {marginTop:-120 , marginRight:380}}>
            <TouchableOpacity style={[styles.iconProfile, styles.icon1]} onPress={()=>changeOpacity2()}>
    
                <Image style={{ width: 65, height: 65 , opacity:opacity4  }} source={{uri:imagesURL[count+1]}} />
                <Image style={{ width: 70, height: 70 , marginTop:-70 , opacity:opacity6 }} source={{uri:"https://i.postimg.cc/RFV5yYz9/image-3.png" }} />
            </TouchableOpacity>
        </View>

        <View style={[ styles.cardIcons ] , {marginTop:-180 , marginRight:40}}>
            <TouchableOpacity style={[styles.iconProfile, styles.icon1]} >
                <Image style={{ width: 65, height: 65   }} source={{uri:imagesURL[count+3]}} />
            </TouchableOpacity>
        </View>

        <View style={[ styles.cardIcons ] , {marginTop:-350 , marginRight:50}}>
            <TouchableOpacity style={[styles.iconProfile, styles.icon1]} >
                <Image style={{ width: 55, height:55   }} source={{uri:imagesURL[count+4]}} />
            </TouchableOpacity>
        </View>

        <View style={[ styles.cardIcons ] , {marginTop:-210 , marginRight:-280}}>
            <TouchableOpacity style={[styles.iconProfile, styles.icon1]} >
                <Image style={{ width: 52, height: 52  }} source={{uri:imagesURL[count+5]}} />
            </TouchableOpacity>
        </View>
        <View style={[ styles.cardIcons ] , {marginTop:-100 , marginRight:280}}>
            <TouchableOpacity style={[styles.iconProfile, styles.icon1]} >
                <Image style={{ width: 62, height: 62   }} source={{uri:imagesURL[count+6]}} />
            </TouchableOpacity>
        </View>
        <View style={[ styles.cardIcons ] , {marginTop:-200 , marginRight:-220}}>
            <TouchableOpacity style={[styles.iconProfile, styles.icon1]} >
                <Image style={{width: 62, height: 62    }} source={{uri:imagesURL[count+7]}} />
            </TouchableOpacity>
        </View>
        <View style={[ styles.cardIcons ] , {marginTop:-120 , marginRight:-270}}>
            <TouchableOpacity style={[styles.iconProfile, styles.icon1]} >
                <Image style={{width: 65, height: 65   }} source={{uri:imagesURL[count+8]}} />
            </TouchableOpacity>
        </View>

        <View style={[ styles.cardIcons ] , {marginTop:-220 , marginRight:370}}>
            <TouchableOpacity style={[styles.iconProfile, styles.icon1]} >
                <Image style={{ width: 50, height: 50   }} source={{uri:imagesURL[count+9]}} />
            </TouchableOpacity>
        </View>

        <View style={[ styles.cardIcons ] , {marginTop:-310 , marginRight:-20}}>
            <TouchableOpacity style={[styles.iconProfile, styles.icon1]} >
                <Image style={{ width: 60, height: 60   }} source={{uri:imagesURL[count+10]}} />
            </TouchableOpacity>
            
        </View>
        <View style={[ styles.cardIcons ] , {marginTop:-220 , marginRight:180}}>
            <TouchableOpacity style={[styles.iconProfile, styles.icon1]} >
                <Image style={{ width: 60, height:60   }} source={{uri:imagesURL[count+11]}} />
            </TouchableOpacity>
            
        </View>
        <View style={[ styles.cardIcons ] , {marginTop:-580 , marginRight:-120}}>
            <TouchableOpacity style={[styles.iconProfile, styles.icon1]} >
                <Image style={{ width: 62, height: 62   }} source={{uri:imagesURL[count+12]}} />
            </TouchableOpacity>
            
        </View>

        
        
    </View>
</SafeAreaView>
  )
}
const styles = StyleSheet.create({



  name: {
      fontSize: 26,
      fontWeight: "bold",
      textAlign: "center",
  },
  username: {
      fontSize: 17,
      fontWeight: "bold",
      textAlign: "center",

  },
  description: {
      fontSize: 16,
      top: 10,
      color: "#ABAAAB",
      width: "70%",
      left: "15%",
      right: "15%",
      textAlign: "center",
  },
  textContainer: {
      position: "absolute",
      top: 40,
      width: "100%",
      textAlign: "center",
      paddingBottom: 30,
      top: "10%"
      ,
      marginTop:10
      ,marginLeft:50
  },
  containerBox: {
      fontSize: 18,
      alignItems: "center",
      paddingTop: 20,
  },
  compartidos: {
      position: "absolute",
      left: 60,
      fontSize: 16,
      fontWeight: "bold",
      top: 20,
  },
  contactos: {
      position: "absolute",
      right: 60,
      fontSize: 16,
      top: 20,
      fontWeight: "bold",

  },
  num: {
      paddingLeft: 10,
      fontSize: 18,
      fontWeight: "bold",
  },
  empty: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",

  },
  emptyText: {
      top: 0,
      fontSize: 30,
      fontWeight: "bold"
  },
  solicitar: {
      width: "70%",
      left: "15%",
      height: 50,
      backgroundColor: "#000",
      borderRadius: 40,
      marginBottom: 40,
      justifyContent: "center",
      top: 40,
      alignItems: "center",
  },
  solicitarText: {
      fontSize: 18,
      color: "#ffff",

  },
    container: {
  height: "80%",
  borderRadius: 50,
  width: "100%",
  flexDirection: "column"
},
login: {
  flex: 1,
  width: "100%",
  backgroundColor: "#fff"
},

background: {
  flex: 1,
  justifyContent: "flex-end",
  alignItems: "center"
},
form: {
  backgroundColor: "#fff",
  padding: 40,
  width: "100%",
  height: "100%",

  flexDirection: "column",
  justifyContent: "flex-end"
},
text: {
  fontSize: 37,
  fontWeight: "bold",
  paddingTop: 16,
  alignItems: "center",
  fontFamily: "Chalkboard SE"
},
subtitle: {
  fontWeight: "bold",
  paddingTop: 100,
  textAlign: "center",
  fontSize: 46,
  width: "100%",
  fontWeight: "bold",
  alignItems: "center",
  paddingBottom: 40,
  fontStyle: "italic"
},

authtextRegister: {
  paddingTop: 100,
  fontSize: 27,
  fontWeight: "bold",
  textAlign: "center",
  paddingBottom: 20
},
authtext: {
  fontSize: 27,
  fontWeight: "bold",
  textAlign: "center",
  paddingBottom: 20
},
authsubtitle: {
  textAlign: "center",
  fontSize: 17,
  color: "#AEAFAE"
},
textcontainer: {
  top: -20
},

title: {
  fontSize: 25,
  fontWeight: "600",
  marginTop: 100,
},
logo: {
  flex: 1,
  height: 120,
  width: 120,
  margin: 30,
  top: 40,
  bottom: 20
},
input: {
  height: 48,
  borderRadius: 15,
  overflow: "hidden",
  backgroundColor: "white",
  marginTop: 10,
  marginBottom: 10,
  paddingLeft: 16,
  borderBottomColor: "black",
  shadowColor: "#fff",
  backgroundColor: "#F9F9F9",
  shadowOpacity: 0.4,
  shadowOffset: { height: 10, width: 0 },
  shadowRadius: 20,
  width: "100%",
  borderBottomColor: "transparent",
  borderBottomWidth: 1
},
input2: {
  height: 88,
  borderRadius: 15,
  overflow: "hidden",
  backgroundColor: "white",
  marginTop: 10,
  marginBottom: 10,
  paddingTop: 10,
  paddingLeft: 16,
  borderBottomColor: "black",
  shadowColor: "#fff",
  backgroundColor: "#F9F9F9",
  shadowOpacity: 0.4,
  shadowOffset: { height: 10, width: 0 },
  shadowRadius: 20,
  width: "100%",
  borderBottomColor: "transparent",
  borderBottomWidth: 1
},
button: {
  marginTop: 30,
  height: 48,
  borderRadius: 34,
  alignItems: "center",
  width: "100%",
  justifyContent: "center"
},
buttonTitle: {
  color: "white",
  fontSize: 16,
  fontWeight: "bold"
},
footerView: {
  flex: 1,
  alignItems: "center",
  marginTop: 40
},
footerText: {
  textAlign: "center",
  paddingBottom: 40,
  fontSize: 16,
},
or: {
  top: -40,
  marginBottom: 20,
  fontSize: 14,
},
footerLink: {
  fontWeight: "bold",
  fontSize: 16
},
logo: {
  width: 140,
  height: 140
},
logoContainer: {
  position: "absolute",
  top: 100,
  alignItems: "center"
},
googleButton: {
  flex: 1,
  alignItems: "center"
},
googleText: {
  top: -40,
  fontSize: 15,
  fontWeight: "bold"
},
arrowleft: {
  position: "absolute",
  paddingTop: 50,
  left: 30,
  width: "100%",
  height: 40,
  flex: 1
},
// header 
logoText: {
  fontSize: 22,

  color: "#fff",
  fontWeight: "bold",
  left: 30,
  flexDirection: "row",
  justifyContent: "space-evenly",

},
italic: {
  fontStyle: "italic"

},
headerIcon: {
  paddingRight: 60,
},
iconProfile: {
  position: "absolute",
  borderWidth:1,
  borderColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  width: 80,
  height: 80,
  backgroundColor: '#fff',
  borderRadius: 50,
  shadowColor: "#121212",
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.23,
  shadowRadius: 13.97,
  zIndex: 1000,
  elevation: 21,

},
profileContainer: {
  backgroundColor: "#fff",
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
},
cardIcons: {
  position: "absolute",
  height: 500,
  top: 50,
  width: "100%",
  justifyContent:"space-evenly",
  alignItems: "center"
},
cardIconsPadding: {
  position: "absolute",
  height: 500,
  top: 60,
  opacity: 0.5,
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  zIndex: -20,
  elevation: 0,

},
icon1: {
  // Insta
  position: "absolute",
  top: "36%",

},
icon2: {
  // Linkedin
  top: "44%",
  left: "16%",
},
icon3: {
  // facebook
  top: "64%",
  left: "9%"
},
icon4: {
  // Whastapp
   top: "85%",
  left: "26%",

},
icon5: {
  // mail
  top: "64%",
  right: "9%"
},
icon6: {
  // Twitter
  top: "44%",
  right: "16%",
},
icon7: {
    // Whastapp
  top: "85%",
  right: "26%",
},
profilePic: {
  width: 150,
  height: 150,
  borderRadius: 100,
  top: "67%"
},
selectContainer: {
  height: 150,
  width: "100%",
  backgroundColor: "#F7F8FA",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 30,
  marginBottom: 30,
},

selectContainerSmall: {
  height: 50,
  width: "100%",
  backgroundColor: "#ffff",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  marginBottom: 30,
  borderWidth: 1,
},
selectText: {
  fontSize: 18,
},
links: {
  top: 20,
  paddingBottom: 20,
  fontSize: 18,
  paddingLeft: 10,
  fontWeight: "bold"
},
buttonStyle: {
  backgroundColor: "#F7F8FA",
  padding: 15,
  borderRadius: 10,
  marginRight: 20,
},
card: {
  backgroundColor:'#151515'
}
});



export default chooseClub ;
