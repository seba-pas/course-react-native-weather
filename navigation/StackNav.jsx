import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Card from '../src/components/Card'
import { TabRouter } from '@react-navigation/native'
import Tabs from './Tabs'

const Stack = createStackNavigator()
const StackNav = () => {
  return (
    <Stack.Navigator
    
    >
      <Stack.Screen name='homesss' component={Tabs} options={{headerShown: false}} />
      <Stack.Screen name='card' component={Card} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default StackNav

const styles = StyleSheet.create({})