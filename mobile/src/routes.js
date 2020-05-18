// import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/login';
import Main from './pages/main';

const AppStack = createStackNavigator();
const isLoggedIn = false;

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name="Login" component={Login} />
          <AppStack.Screen name="Main" component={Main} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}