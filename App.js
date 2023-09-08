import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import homeScreen from '../screens/home'
import IssLocationScreen from '../screens/isslocation';
import meteorScreen from '../screens/meteoro';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigatior} from '@react-navigation/stack'
import 'react-native-gesture-handler'

const Stack = createStackNavigatior(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigatior initialRouteName='Home' 
      screenOptions={{headerShow: false}}>
      <Stack.Screen name="Home" component={homeScreen} />
      <Stack.Screen name="IssLocation" component={IssLocationScreen} />
      <Stack.Screen name="Meteors" component={meteorScreen} /> 
      </Stack.Navigatior>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


