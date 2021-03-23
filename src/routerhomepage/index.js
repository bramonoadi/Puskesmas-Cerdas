import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Homepage from '../containers/pages/Homepage';
// import Directory from '../containers/pages/Directory';
import History from '../containers/pages/History';
import Account from '../containers/pages/Account';

import TabComponent from '../components/Tabs';
import {
  DetailMerchant,
  Directory,
  NewsList,
  NewsDetail,
} from '../containers/pages';

const Stack = createStackNavigator();

// function navigation() {
//   return (
// x
//   );
// }

const HomepageNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Directory"
        component={Directory}
        options={{headerShown: true, title: 'Daftar Puskesmas'}}
      />

      <Stack.Screen
        name="DetailMerchant"
        component={DetailMerchant}
        options={{
          // headerLeft: true,
          tabBarVisible: false,
          headerShown: true,
          title: 'Detail Merchant',
          headerStyle: {backgroundColor: '#ffffff'},
          headerTintColor: '#444444',
          headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
        }}
      />

      <Stack.Screen
        name="NewsList"
        component={NewsList}
        options={{
          // headerLeft: true,
          tabBarVisible: false,
          headerShown: true,
          title: 'Artikel Kesehatan',
          headerStyle: {backgroundColor: '#ffffff'},
          headerTintColor: '#444444',
          headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
        }}
      />

      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{
          // headerLeft: true,
          tabBarVisible: false,
          headerShown: true,
          title: 'Detail Artikel',
          headerStyle: {backgroundColor: '#ffffff'},
          headerTintColor: '#444444',
          headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
        }}
      />
    </Stack.Navigator>
  );
};

// export default MainStackNavigator;
export {HomepageNavigator};
