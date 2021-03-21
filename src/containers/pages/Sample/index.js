import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const TabA = ({navigation}) => {
  return (
    <View>
        <Text>Tes3</Text>
    </View>
  );
}
const TabB = ({navigation}) => {
  return (
    <View>
        <Text>Tes3</Text>
    </View>
  );
}
const TabC = ({navigation}) => {
  return (
    <View>
        <Text>Tes3</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();
export default function TopTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 12},
        style: {backgroundColor: '#ffffff'},
        activeTintColor: '#444444',
        indicatorStyle: {
          height: 2,
          backgroundColor: '#C6B07D',
        },
      }}>
      <Tab.Screen name="Pending" component={TabA} />
      <Tab.Screen name="Sukses" component={TabB} />
      <Tab.Screen name="Dibatalkan" component={TabC} />
    </Tab.Navigator>
  );
}



const styles = StyleSheet.create({
  
});
