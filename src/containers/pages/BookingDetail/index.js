import React from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView
        style={{
          backgroundColor: '#f9f9f9',
          paddingVertical: 15,
          paddingHorizontal: 15,
        }}>
        <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />
        <View
          style={{
            backgroundColor: '#fff',
            borderColor: '#ddd',
            borderWidth: 0.5,
            paddingBottom: 10,
            borderRadius: 10,
          }}>
          <Image
            style={styles.images}
            source={require('../../../assets/images/4.jpg')}
          />

          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 15,
              color: '#444',
              paddingHorizontal: 10,
              paddingTop: 10,
            }}>
            Puskesmas CondongCatur
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 11,
              color: '#888',
              paddingHorizontal: 10,
            }}>
            Pr. Banjeng Asri No.D5 Maguwoharjo, Depok, Sleman Yogyakarta
          </Text>

          <View
            style={{flexDirection: 'row', marginTop: 2, paddingHorizontal: 10}}>
            <View style={{flexDirection: 'row', marginTop: 0}}>
              <Icon
                color="#318FB2"
                name="location-arrow"
                type="font-awesome-5"
                size={12}
              />
              <Text style={styles.distance}>2,3 Km</Text>
            </View>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 12,
                color: '#444',
                paddingLeft: 15,
              }}>
              Jam Operasional: 08:00-16:00
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingHorizontal: 10,
              marginTop: 10,
              borderTopWidth: 0.5,
              paddingTop: 10,
              borderColor: '#ddd',
            }}>
            <View
              style={{
                alignItems: 'center',
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
                flex: 1,
                marginRight: 4,
                borderColor: '#ddd',
              }}>
              <Text style={styles.textatas}>Bed Tersedia</Text>
              <Text style={styles.textbawah}>04 Kamar</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
                flex: 1,
                marginHorizontal: 4,
                borderColor: '#ddd',
              }}>
              <Text style={styles.textatas}>Telepon</Text>
              <Text style={styles.textbawah}>08114120001</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
                flex: 1,
                marginLeft: 4,
                borderColor: '#ddd',
              }}>
              <Text style={styles.textatas}>WhatsApp</Text>
              <Text style={styles.textbawah}>08112744122</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#ffffff',
            marginTop: 15,
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 15,
            borderColor: '#ddd',
            borderWidth: 0.5,
          }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <View style={{flex: 2, alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Bold',
                    fontSize: 10,
                    color: '#DB5B5B',
                    marginTop: 0,
                  }}>
                  Antrian Berjalan
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Bold',
                    fontSize: 90,
                    color: '#DB5B5B',
                    marginBottom: -40,
                    marginTop: -10,
                  }}>
                  08
                </Text>
              </View>
              <View style={{borderLeftWidth: 0.5, borderColor: '#ddd'}}></View>

              <View style={{flex: 2, alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Bold',
                    fontSize: 10,
                    color: '#444',
                    marginTop: 0,
                  }}>
                  Nomor Antrian Anda
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Bold',
                    fontSize: 90,
                    color: '#308DB0',
                    marginBottom: -40,
                    marginTop: -10,
                  }}>
                  12
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 10,
              }}>
              <View>
                <Text
                  style={{
                    fontFamily: 'Poppins-Bold',
                    fontSize: 12,
                    color: '#444',
                  }}>
                  Poli Umum
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 12,
                    color: '#444',
                    marginTop:-5,
                  }}>
                  Dr. Rahman Suprapto
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    fontFamily: 'Poppins-Bold',
                    fontSize: 12,
                    color: '#444',
                    textAlign:'right',
                  }}>
                  Senin
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Bold',
                    fontSize: 12,
                    color: '#444',
                    marginTop:-5,
                    textAlign:'right',
                  }}>
                  28 April 2021
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 230,
            backgroundColor: '#fff',
            borderColor: '#ddd',
            borderWidth: 0.5,
            marginBottom: 50,
            marginTop:15,
            borderRadius:10,
            padding:15
          }}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: -7.7561509,
              longitude: 110.3978282,
              latitudeDelta: 0.003,
              longitudeDelta: 0.003,
            }}>

            <Marker coordinate={{ latitude : -7.7561509, longitude : 110.3978282 }}/>
            </MapView>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 200,
    borderRadius:10,
  },
  distance: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    paddingLeft: 7,
    marginTop: 0,
    color: '#444',
  },
  namapoli: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#444',
  },
  dokter: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#666',
  },
  textatas: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#444',
  },
  textbawah: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#4BA2C3',
  },
  images: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
});
