import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Schedule from '~/pages/Schedule';
import Profile from '~/pages/Profile';

const Tab = createBottomTabNavigator();

Tab.tabBarOptions = {
  keyboardHidesTabBar: true,
  activeTintColor: '#7159c1',
  inactiveTintColor: 'rgba(0, 0, 0, 0.6)',
  style: {
    backgroundColor: '#fff',
  },
};

export default function TabNavigation() {
  return (
    <Tab.Navigator tabBarOptions={Tab.tabBarOptions}>
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={Schedule.navigationOptions}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={Profile.navigationOptions}
      />
    </Tab.Navigator>
  );
}
