import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs' ;
import { NavigationContainer, DefaultTheme , useNavigation  } from '@react-navigation/native';
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { useFonts } from "expo-font";
import NEWS from "../screens/NEWS";
import SCHEDULE from "../screens/SCHEDULE";
import STATS from "../screens/STATS";
import PLAYERS from "../screens/PLAYERS";
import { useSafeArea } from "react-native-safe-area-context";
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
const Tab = createMaterialTopTabNavigator();

function MyStack() {
    
    const navigation = useNavigation()
    const insets = useSafeArea();
    return (
       

<SafeAreaView style={{ flex:1 , backgroundColor:'#2d2d2d'}}>
    <View>
    <TouchableOpacity style={{width:40 , height:40}} 
            
            
            onPress={()=>{
                navigation.navigate('chooseClub');
            }}
            >
<Image style={{ width: 13, height:13 ,  marginLeft:30  , marginTop:20}} source={{uri:"https://i.postimg.cc/MZnTS0rx/pngaaa-com-3944443.png"}} />

</TouchableOpacity>
</View>
        <Tab.Navigator
        initalRouteName="NEWS"
        tabBarOptions={{
            activeTintColor:'#ffffff',
            labelStyle:{...FONTS.h4 , marginTop:10 } ,
            style:{backgroundColor:"#2d2d2d" , marginTop:0 , height:50 } ,
            indicatorStyle :{
                backgroundColor:'#06b64e',
           height:3.8 ,
           width:38 ,
           marginLeft:30

          }
        }}
    
        >
         
<Tab.Screen name ="NEWS" component={NEWS}   />
<Tab.Screen name ="SCHEDULE" component={SCHEDULE} />
<Tab.Screen name ="PLAYERS" component={PLAYERS} />
<Tab.Screen name ="STATS" component={STATS} />         
         
            
        </Tab.Navigator>
        </SafeAreaView>
    )
}
export default function mainNavigator() {
    return <MyStack />
}