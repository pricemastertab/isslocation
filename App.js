import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {homeScreen} from '../screens/home'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigatior} from '@react-navigation/stack'
import 'react-native-gesture-handler'

const Stack = createStackNavigatior(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigatior></Stack.Navigatior>
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
