import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Homepage from '../containers/pages/Homepage';
// import Directory from '../containers/pages/Directory';
import History from '../containers/pages/History';
import TabComponent from '../components/Tabs';
import {
  
  Login,
  Splash,
  DetailMerchant,
  Directory,
  NewsList,
  NewsDetail,
  Notification,
  BookingDetail,
  BookingForm,
  BookingSuccess,
  InfoCovid,
  About,
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
        name="Splash"
        component={Splash}
        options={{navBarHidden: true, headerShown: false}}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          // headerLeft: true,
          tabBarVisible: false,
          headerShown: false,
          title: 'Login',
          headerStyle: {backgroundColor: '#f9f9f9'},
          headerTintColor: '#444444',
          headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
        }}
      />

      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Directory"
        component={Directory}
        options={{
          // headerLeft: true,
          tabBarVisible: false,
          headerShown: true,
          title: 'Cari Puskesmas',
          headerStyle: {backgroundColor: '#f9f9f9'},
          headerTintColor: '#444444',
          headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
        }}
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

      <Stack.Screen
        name="NewsList"
        component={NewsList}
        options={{
          // headerLeft: true,
          tabBarVisible: false,
          headerShown: true,
          title: 'Artikel Kesehatan',
          headerStyle: {backgroundColor: '#f9f9f9'},
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
          headerStyle: {backgroundColor: '#f9f9f9'},
          headerTintColor: '#444444',
          headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
        }}
      />

      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          // headerLeft: true,
          tabBarVisible: false,
          headerShown: true,
          title: 'Notifikasi',
          headerStyle: {backgroundColor: '#f9f9f9'},
          headerTintColor: '#444444',
          headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
        }}
      />

      <Stack.Screen
        name="BookingDetail"
        component={BookingDetail}
        options={{
          // headerLeft: true,
          tabBarVisible: false,
          headerShown: true,
          title: 'Detail Reservasi',
          headerStyle: {backgroundColor: '#f9f9f9'},
          headerTintColor: '#444444',
          headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
        }}
      />

      <Stack.Screen
        name="BookingForm"
        component={BookingForm}
        options={{
          // headerLeft: true,
          tabBarVisible: false,
          headerShown: true,
          title: 'Form Reservasi',
          headerStyle: {backgroundColor: '#f9f9f9'},
          headerTintColor: '#444444',
          headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
        }}
      />

      <Stack.Screen
        name="BookingSuccess"
        component={BookingSuccess}
        options={{
          // headerLeft: true,
          tabBarVisible: false,
          headerShown: true,
          title: 'Reservasi Sukses',
          headerStyle: {backgroundColor: '#f9f9f9'},
          headerTintColor: '#444444',
          headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
        }}
      />

      <Stack.Screen
        name="InfoCovid"
        component={InfoCovid}
        options={{
          // headerLeft: true,
          tabBarVisible: false,
          headerShown: true,
          title: 'Info Terkini Covid-19',
          headerStyle: {backgroundColor: '#f9f9f9'},
          headerTintColor: '#444444',
          headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
        }}
      />

<Stack.Screen
        name="About"
        component={About}
        options={{
          // headerLeft: true,
          tabBarVisible: false,
          headerShown: true,
          title: 'Tentang Smart Clinic',
          headerStyle: {backgroundColor: '#f9f9f9'},
          headerTintColor: '#444444',
          headerTitleStyle: {fontSize: 16, fontWeight: 'bold'},
        }}
      />


    </Stack.Navigator>
  );
};

// export default MainStackNavigator;
export {HomepageNavigator};
