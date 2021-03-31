import React from 'react';
import {View, Image, Text, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BottomSheet} from 'react-native-elements/dist/bottomSheet/BottomSheet';
import {HomepageNavigator} from '../../../routerhomepage';

export default class App extends React.Component {
    render() {
  return (
    <LinearGradient
      colors={['#4EB0D5', '#308DB0', '#4EB0D5']}
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <Image
          style={{width: 73, height: 180, marginRight: 12}}
          source={require('../../../assets/images/dok1.png')}></Image>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 30,
            color: '#fff',
            marginTop: 30,
          }}>
          BERHASIL!
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 13,
            color: '#fff',
            marginTop: 0,
            textAlign: 'center',
            paddingHorizontal: '20%',
          }}>
          Terima Kasih, Pendaftaran Anda telah berhasil. Silahkan datang ke
          Puskesmas tepat waktu.
        </Text>


        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Homepage')}>
        <Text
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 40,
            paddingVertical: 8,
            borderRadius: 50,
            elevation:3,
            fontFamily:'Poppins-Medium',
            fontSize:13,
            color:'#444',
            marginTop:50,
          }}>
          Kembali
        </Text>
        </TouchableOpacity>
      </View>

      

      <StatusBar hidden={true} />
    </LinearGradient>
  );
};
}

