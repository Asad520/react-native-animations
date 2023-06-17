import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CityList, CityDetail, Home, ProgressBar} from '../screens';

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#212F3C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Shared Transition Tag" component={CityList} />
      <Stack.Screen name="Detail" component={CityDetail} />
      <Stack.Screen name="Progress Bar" component={ProgressBar} />
    </Stack.Navigator>
  );
};
