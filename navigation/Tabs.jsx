import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../src/components/Search";
import {Ionicons} from '@expo/vector-icons'
import Home from "../src/screens/Home";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: 'steelblue',
      tabBarStyle: {
        height: 60
      }

    }}
    // sceneContainerStyle={{
    //   backgroundColor: 'steelblue',
    // }}
  
   
    >
      <Tab.Screen name="homescreen" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="search" component={Search} options={{headerShown: false}}  />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
