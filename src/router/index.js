import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {DetailMerchant, Directory,} from '../../src/containers/pages';

const Stack = createStackNavigator();

// function navigation() {
//   return (
// x
//   );
// }

const DirectoryNavigator = () => {
  return (

    <Stack.Navigator
      initial={Directory}
      initialRouteName={Directory}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Directory"
        component={Directory}
        options={
          {
            // headerShown: true
          }
        }
      />



      <Stack.Screen
        name="DetailMerchant"
        component={DetailMerchant}
        options={{
          // headerLeft: true,
          tabBarVisible: false,
          headerShown: true,
          title: 'Detail Merchant',
          headerStyle: {backgroundColor: '#f9f9f9'},
          headerTintColor: '#444444',
          headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
        }}
      />

     
    </Stack.Navigator>

    
  );
};

// export default MainStackNavigator;
export {DirectoryNavigator};
