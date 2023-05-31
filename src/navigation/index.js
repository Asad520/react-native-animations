import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CityList} from '../screens/list';
import {CityDetail} from '../screens/detail';
import {Home} from '../screens/home';

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
      <Stack.Screen name="List" component={CityList} />
      <Stack.Screen name="Detail" component={CityDetail} />
    </Stack.Navigator>
  );
};
