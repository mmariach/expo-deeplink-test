import React from 'react';
import {
  Platform,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StackProfileScreen from '../screens/StackProfileScreen';


const TestStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    path: 'profile/:name',
  },
  Details: {
    screen: StackProfileScreen,
    path: 'details/:name',
  },
});

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      path: 'home',
    },
    TestStack: {
      screen: TestStack,
      path: '',
    },
  },
  {
    initialRouteName: 'Home',
  }
);
console.log('Tabs', RootStack.router.childRouters)

const MainNavigator = createAppContainer(createSwitchNavigator({
  Main: {
    screen: RootStack,
    path: '',
  },
}));
console.log('Container', MainNavigator.router.childRouters)

//const prefix = 'deep://';
const prefix = Expo.Linking.makeUrl('/');

const AppNavigator = () => <MainNavigator uriPrefix={prefix} />;

export default AppNavigator;