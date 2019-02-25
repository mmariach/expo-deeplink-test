import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Home: {
      screen: HomeScreen,
      path: 'home',
    },
    Details: {
      screen: ProfileScreen,
      path: 'profile/:name',
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const MainNavigator = createAppContainer(RootStack);

//const prefix = 'deep://';
const prefix = Expo.Linking.makeUrl('/');

const AppNavigator = () => <MainNavigator uriPrefix={prefix} />;

export default AppNavigator;