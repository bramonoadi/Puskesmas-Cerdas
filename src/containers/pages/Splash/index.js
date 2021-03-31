import React, {useEffect} from 'react';
import {View, Image, Text, StatusBar,} from 'react-native';


const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  });
  return (
    <View
      style={{
        backgroundColor: '#f9f9f9',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
      <Image
        style={{width: 240, height: 39, position: 'absolute'}}
        source={require('../../../assets/images/Logo.png')}></Image>

      <Text
        style={{
          paddingTop: 20,
          fontFamily: 'Poppins-Regular',
          fontSize: 12,
          color: '#666',
          position: 'absolute',
          bottom: 20,
        }}>
        Ver : 1.0
      </Text>

      <StatusBar hidden={true} />
      
      
    </View>
  );
};

export default Splash;
