import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../src/components/Search";
import { Feather } from "@expo/vector-icons";
import Home from "../src/screens/Home";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "steelblue",
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="homescreen"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Feather
                  name="home"
                  size={20}
                  color={focused ? "white" : "steelblue"}
                />
              </View>
              <Text style={focused ? styles.tabLabelF : styles.tabLabel}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{ 
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
               <Feather
                  name="search"
                  size={20}
                  color={focused ? "white" : "steelblue"}
                />
              <Text style={focused ? styles.tabLabelF : styles.tabLabel}>Search</Text>
            </View>
          )
         }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabLabelF: {
    color: "white",
  },
  tabLabel: {
    color: "steelblue",
  },
  tabContainer: {
    // flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    // width: '100%',
    flexWrap: "wrap",
  },
});
