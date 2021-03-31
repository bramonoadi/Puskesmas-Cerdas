import React from 'react';
import {Header, Icon} from 'react-native-elements';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends React.Component {
    render() {
  return (
    <View style={{flex: 1, backgroundColor: '#f9f9f9'}}>
      <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />
      <View style={{flex: 1}}>
        <View>
          <LinearGradient
            colors={['#4EB0D5', '#308DB0', '#4EB0D5']}
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderRadius: 10,
              marginTop: 15,
              marginHorizontal: 15,
              flexDirection: 'row',
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
                marginLeft: 15,
                borderWidth: 2,
                borderRadius: 50,
                borderColor: '#dddddd',
              }}
              source={require('../../../assets/icon/profil1.png')}
            />
            <View
              style={{
                paddingLeft: 15,
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 16,
                  color: '#fff',
                  marginTop: 0,
                }}>
                Winda Rahma
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  color: '#fff',
                }}>
                Join : 08 Maret 2021
              </Text>
            </View>
          </LinearGradient>
        </View>

        <View
          style={{
            backgroundColor: '#ffffff',
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15,
            borderRadius: 10,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={styles.textkiri}>Poliklinik</Text>
            <Text style={styles.textkanan}>Umum</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textkiri}>Dokter</Text>
            <Text style={styles.textkanan}>Dr. Rahman Suprapto</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textkiri}>Hari</Text>
            <Text style={styles.textkanan}>Senin</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textkiri}>Tanggal</Text>
            <Text style={styles.textkanan}>26 April 2021</Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            paddingBottom: 15,
          }}>
          <View style={{}}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 14,
                color: '#444',
              }}>
              Informasi Antrian.
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 12,
                color: '#999',
                marginTop: -5,
              }}>
              Nomor antrian yang akan Anda dapatkan
            </Text>
          </View>
          <Image
            style={{width: 16, height: 16, marginTop: 5}}
            source={require('../../../assets/icon/all.png')}
          />
        </View>

        <View
          style={{
            backgroundColor: '#ffffff',
            marginTop: 0,
            marginLeft: 15,
            marginRight: 15,
            borderRadius: 10,
            borderColor: '#dddddd',
            borderWidth: 0.5,
            paddingHorizontal: 10,
            paddingVertical: 15,
            borderColor: '#ddd',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 2, alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 10,
                color: '#DB5B5B',
                textAlign: 'center',
                marginTop: 0,
              }}>
              No Antrian Anda
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 90,
                color: '#DB5B5B',
                textAlign: 'center',
                marginBottom: -40,
                marginTop: -10,
              }}>
              08
            </Text>
          </View>
          <View
            style={{
              flex: 3,
              borderLeftWidth: 0.5,
              borderColor: '#ddd',
              paddingLeft: 15,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 14,
                color: '#444',
              }}>
              Puskesmas Condongcatur
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 11,
                color: '#666',
              }}>
              Jl. Letkol Subadri, Triharjo, Sleman, Kalah Ijo 1, Triharjo,
              Sleman, DIY 55514
            </Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#f2f2f2',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                paddingVertical: 0,
                borderRadius: 5,
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  flex: 2,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 12,
                  color: '#666',
                }}>
                Antrian berjalan saat ini :
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontFamily: 'Poppins-Bold',
                  fontSize: 35,
                  color: '#308DB0',
                  paddingTop: 0,
                  marginBottom: -8,
                }}>
                00
              </Text>
            </View>
          </View>
        </View>

        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 11,
            color: '#444',
            marginHorizontal: 15,
            marginTop: 30,
          }}>
          Nomor antrian mungkin akan berubah jika anda terlalu lama pada halaman
          ini. karena ada user lain yang mendaftar pada waktu yang sama.
        </Text>

        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 11,
            color: '#cc0000',
            marginHorizontal: 15,
            marginTop: 10,
          }}>
          Jika terjadi sesuatu hal dan dokter berhalangan hadir, maka dokter
          yang berjaga mungkin akan digantikan oleh dokter lain.
        </Text>
      </View>

      <TouchableOpacity
            onPress={() => this.props.navigation.navigate('BookingSuccess')}>
      <View
        style={{
          backgroundColor: '#308DB0',
          paddingVertical:15,
        }}>
        <Text style={{fontFamily:'Poppins-Bold', color:'#fff', fontSize:16, textAlign:'center'}}>DAFTARKAN SAYA</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};
}


const styles = StyleSheet.create({
  textbawah: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#666',
    paddingVertical: 12,
    borderBottomWidth: 0.3,
    borderBottomColor: '#dddddd',
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  textkiri: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#666',
    flex: 2,
    paddingVertical: 1,
  },
  textkanan: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    flex: 4,
    color: '#666',
    paddingVertical: 1,
    textAlign: 'right',
  },
});
