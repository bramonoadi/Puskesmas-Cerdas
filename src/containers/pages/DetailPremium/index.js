import React from 'react';
import {Icon} from 'react-native-elements';
import {StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DetailTabs from '../../../components/molecules/DetailTabs';


const DetailPremium = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor:'#fff'}}>
      <View >
        <Image
          style={{
            width: '100%',
            height: 240,
            resizeMode: 'cover',
          }}
          source={require('../../../assets/images/banner.png')}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <View>
          <Image
            style={{
              width: 90,
              height: 90,
              borderRadius: 999,
              marginLeft: 15,
              marginTop: -45,
              resizeMode: 'cover',
            }}
            source={require('../../../assets/icon/avatar.jpg')}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginLeft: 15,
              marginTop: 13,
            }}>
            <Icon color="#999" name="eye" type="font-awesome" size={12} />
            <Text
              style={{
                fontWeight: '500',
                fontSize: 10,
                paddingLeft: 6,
                color: '#999',
              }}>
              187.364
            </Text>
          </View>
        </View>
        <View style={{paddingLeft: 10, paddingTop: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 14}}>
            KFC Ambarukmo Plaza
          </Text>
          <Text style={{fontWeight: '500', fontSize: 12}}>
            Jl. Laksda Adisucipto, No. 65, Yogyakarta.
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 0,
                borderColor: '#444',
                borderRadius: 999,
                paddingVertical: 4,
                paddingHorizontal: 12,
                alignItems: 'center',
                marginRight: 10,
                elevation: 3,
                backgroundColor: '#f9f9f9',
              }}>
              <Icon color="#444" name="phone" type="font-awesome" size={14} />
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 12,
                  paddingLeft: 6,
                  color: '#444',
                }}>
                Telepon
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                borderWidth: 0,
                borderColor: '#444',
                borderRadius: 999,
                paddingVertical: 4,
                paddingHorizontal: 12,
                alignItems: 'center',
                marginRight: 10,
                elevation: 3,
                backgroundColor: '#f9f9f9',
              }}>
              <Icon
                color="#444"
                name="whatsapp"
                type="font-awesome"
                size={14}
              />
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 12,
                  paddingLeft: 6,
                  color: '#444',
                }}>
                WhatsApp
              </Text>
            </View>

           
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 0,
                  borderColor: '#444',
                  borderRadius: 999,
                  paddingVertical: 4,
                  paddingHorizontal: 12,
                  alignItems: 'center',
                  elevation: 3,
                  backgroundColor: '#f9f9f9',
                }}>
                <Icon
                  color="#444"
                  name="map-marker"
                  type="font-awesome"
                  size={14}
                />
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 12,
                    paddingLeft: 6,
                    color: '#444',
                  }}>
                  Lokasi
                </Text>
              </View>
           
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          paddingVertical: 4,
          backgroundColor: '#f9f9f9',
        }}></View>
      <DetailTabs />
    </ScrollView>
  );
};

export default DetailPremium;

const styles = StyleSheet.create({});
