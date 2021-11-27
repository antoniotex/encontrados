import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator screenOptions={{ headerShown:false }} tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} options={{ tabBarShowLabel: false }} />
    </Tab.Navigator>
);