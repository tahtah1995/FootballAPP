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


 const STATS = ({ navigation }) => {
  
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
        title: 'STATS',
    };

   

    return(
<View>
    <Text>hi</Text>
</View>

    )


 }

 export default STATS;