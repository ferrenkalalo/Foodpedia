import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import Splashscreen from '../Pages/SplashScreen';
import Details from '../Pages/Details';
import Foods from '../Pages/Foods';
import Drinks from '../Pages/Drinks';
import Snack from '../Pages/Snack';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={Splashscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Foods"
        component={Foods}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Drinks"
        component={Drinks}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Snack"
        component={Snack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;

const styles = StyleSheet.create({});
