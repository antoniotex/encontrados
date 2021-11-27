import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTab from './MainTab';
import Post from '../screens/Post';

const Stack = createNativeStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="MainTab"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
);