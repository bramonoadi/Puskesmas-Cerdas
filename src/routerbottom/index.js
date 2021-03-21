import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Homepage from '../containers/pages/Homepage';
import Directory from '../containers/pages/Directory';
import Favorite from '../containers/pages/Favorite';
import Account from '../containers/pages/Account';

import TabComponent from '../components/Tabs';
import {DetailPremium} from '../containers/pages';
import { DirectoryNavigator } from "../router";


const Tab = createBottomTabNavigator();

function RouterBottom() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={MainStackNavigator} /> */}
      <Tab.Screen
        name="Homepage"
        component={Homepage}
        options={{
          tabBarButton: (props) => <TabComponent label="home" {...props} />,
        }}
      />
      <Tab.Screen
        name="Directory"
        component={DirectoryNavigator}
        // component={Directory}
        options={{
          tabBarButton: (props) => (
            <TabComponent label="directory" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarButton: (props) => <TabComponent label="favorite" {...props} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarButton: (props) => <TabComponent label="account" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}


export default RouterBottom;

