import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import Details from './pages/Details';
import InformProblem from './pages/InformProblem';
import ViewProblems from './pages/ViewProblems';
import TabNavigation from '~/components/TabNavigation';

const Stack = createStackNavigator();

Stack.screenOptions = {
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#7159c1',
  },
};

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={Stack.screenOptions}>
        {signed ? (
          <>
            <Stack.Screen
              name="TabNavigation"
              component={TabNavigation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={Details.navigationOptions}
            />
            <Stack.Screen
              name="InformProblem"
              component={InformProblem}
              options={ViewProblems.navigationOptions}
            />
            <Stack.Screen
              name="ViewProblem"
              component={ViewProblems}
              options={ViewProblems.navigationOptions}
            />
          </>
        ) : (
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
