import React, { useState ,useEffect } from "react";
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
import { COLORS, FONTS, SIZES, icons } from "./constants";
import { useFonts } from "expo-font";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import Topnavigator from "./navigation/Topnavigator";
import Home from './screens/Home' ;
import choose from "./screens/choose";
import chooseClub from "./screens/chooseClub";

const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent"
  }
}





const Stack = createStackNavigator();
 function App({ navigation }) {


  const [loaded] = useFonts({
    "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
      "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
      "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
    "Uninsta-ExtraBold" : require('./assets/fonts/Uninsta-ExtraBold.ttf'),
  "Nutmeg-Bold" : require('./assets/fonts/Nutmeg-Bold.ttf') ,
  "Uninsta-Bold" : require('./assets/fonts/Uninsta-Bold.ttf')
  })
  
  if(!loaded){
    return null;
  }
  return (
    <NavigationContainer>{
      
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Topnavigator" component={Topnavigator} options={{ headerShown: false }}  />
      <Stack.Screen name="choose" component={choose} options={{ headerShown: false }}  />
      <Stack.Screen name="chooseClub" component={chooseClub} options={{ headerShown: false }}  />
    </Stack.Navigator>
      
      
      }</NavigationContainer>
  );
}





export default App;
