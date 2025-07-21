import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../screens/mainScr/MainScreen';
import RtkScreen from '../screens/rtkscreen/RtkScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainScreen} />
      <Stack.Screen name="Home-rtk" component={RtkScreen} />
    </Stack.Navigator>
  );
}
const AppNavigator = () => {
  return (
   <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})