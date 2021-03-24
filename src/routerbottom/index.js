import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Homepage from '../containers/pages/Homepage';
import Directory from '../containers/pages/Directory';
import History from '../containers/pages/History';
import Account from '../containers/pages/Account';

import TabComponent from '../components/Tabs';
import { HomepageNavigator } from "../routerhomepage";
import { DirectoryNavigator } from "../router";


const Tab = createBottomTabNavigator();

function RouterBottom() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={MainStackNavigator} /> */}
      <Tab.Screen
        name="Homepage"
        component={HomepageNavigator}
        options={({ navigation }) => {
          const { routes, index } = navigation.dangerouslyGetState();
          // console.log(routes)
          const { state: exploreState } = routes[index];
          
          let tabBarVisible = true;
          if (exploreState) {
            const { routes: exploreRoutes, index: exploreIndex } = exploreState;
            const exploreActiveRoute = exploreRoutes[exploreIndex];
            console.log(exploreActiveRoute.name)
            if (exploreActiveRoute.name === "DetailMerchant") {
              tabBarVisible = false;
            }
            if (exploreActiveRoute.name === "Directory") {
              tabBarVisible = false;
            }
            if (exploreActiveRoute.name === "NewsList") {
              tabBarVisible = false;
            }
            if (exploreActiveRoute.name === "NewsDetail") {
              tabBarVisible = false;
            }
            if (exploreActiveRoute.name === "Notification") {
              tabBarVisible = false;
            }
          }
          //   tabBarButton: (props) => (
          //   <TabComponent label="directory" {...props} />
          // ),
          return {
            tabBarVisible,
            tabBarButton: (props) => (
              <TabComponent label="home" {...props} />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Directory"
        component={DirectoryNavigator}

        options={({ navigation }) => {
          const { routes, index } = navigation.dangerouslyGetState();
          // console.log(routes)
          const { state: exploreState } = routes[index];
          
          let tabBarVisible = true;
          if (exploreState) {
            const { routes: exploreRoutes, index: exploreIndex } = exploreState;
            const exploreActiveRoute = exploreRoutes[exploreIndex];
            console.log(exploreActiveRoute.name)
            if (exploreActiveRoute.name === "DetailMerchant") {
              tabBarVisible = false;
            }
          }
          //   tabBarButton: (props) => (
          //   <TabComponent label="directory" {...props} />
          // ),
          return {
            tabBarVisible,
            tabBarButton: (props) => (
              // <AntDesign name="search1" color={color} size={size} />
              <TabComponent label="directory" {...props} />
            ),
          };
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarButton: (props) => <TabComponent label="history" {...props} />,
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

