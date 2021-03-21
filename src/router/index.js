import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Homepage from '../containers/pages/Homepage';
// import Directory from '../containers/pages/Directory';
import Favorite from '../containers/pages/Favorite';
import Account from '../containers/pages/Account';

import TabComponent from '../components/Tabs';
import {DetailPremium, Directory} from '../../src/containers/pages';

const Stack = createStackNavigator();

// function navigation() {
//   return (

//   );
// }

const DirectoryNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Directory"
        component={Directory}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="DetailPremium"
        component={DetailPremium}
        options={{
          headerLeft: false,
          headerShown: false,
          title: 'Detail Merchant',
          headerStyle: {backgroundColor: '#ffffff'},
          headerTintColor: '#444444',
          headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
        }}
      />

    </Stack.Navigator>
  );
};

// export default MainStackNavigator;
export {DirectoryNavigator};
