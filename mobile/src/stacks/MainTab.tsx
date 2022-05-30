import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import AddPost from '../screens/AddPost';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={{headerShown: false}}
    tabBar={props => <CustomTabBar {...props} />}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{tabBarShowLabel: false}}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{tabBarShowLabel: false}}
    />
    <Tab.Screen
      name="AddPost"
      component={AddPost}
      options={{tabBarShowLabel: false}}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{tabBarShowLabel: false}}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{tabBarShowLabel: false}}
    />
  </Tab.Navigator>
);
