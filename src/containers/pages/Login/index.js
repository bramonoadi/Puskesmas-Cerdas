import React from 'react';
import {View, Image, Text, StatusBar,} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent:'space-between', backgroundColor:'#f9f9f9'}}>
        <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />
        <View style={{paddingTop:70}}>
        <Image
          style={{width: 240, height: 39, alignSelf:'center'}}
          source={require('../../../assets/images/Logo.png')}></Image>

        <Image
          style={{
            width: 280,
            height: 280,
            marginRight: 12,
            alignSelf:'center',
            marginTop:90,
          }}
          source={require('../../../assets/images/doc2.png')}></Image>
</View>

<View style={{marginBottom:30}}>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 14,
            color: '#444',
            marginTop: 30,
            textAlign: 'center',
          }}>
          USER LOGIN!
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 12,
            color: '#444',
            marginBottom: 20,
            textAlign: 'center',
          }}>
          Silahkan login / register
        </Text>

        <View style={{}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Homepage')}>
            <View
              style={{
                backgroundColor: '#CD2727',
                marginHorizontal: 30,
                paddingHorizontal: 15,
                paddingVertical: 12,
                borderRadius: 5,
                flexDirection:'row',
              }}>
                <Icon
                  color="#fff"
                  name="google"
                  type="font-awesome-5"
                  size={18}
                />
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 13,
                  color: '#fff',
                  paddingLeft:20,
                }}>
                Login with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Homepage')}>
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#3489D2',
                marginHorizontal: 30,
                paddingHorizontal: 15,
                paddingVertical: 12,
                borderRadius: 5,
                
                flexDirection:'row',
              }}>
                <Icon
                  color="#fff"
                  name="facebook"
                  type="font-awesome-5"
                  size={18}
                />
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 13,
                  color: '#fff',
                  paddingLeft:20,
                }}>
                Login with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}
