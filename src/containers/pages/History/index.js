import React from 'react';
import {Header, Icon} from 'react-native-elements';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const Account = ({navigation}) => {
  return (
    <View style={{flex: 1, paddingHorizontal: 15, backgroundColor:'#f2f2f2'}}>
      <StatusBar backgroundColor="#f2f2f2" barStyle="dark-content" />

      <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 20,
              marginLeft: 5,
              marginRight: 5,
              paddingBottom: 0,
            }}>
            <View style={{}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  color: '#444',
                }}>
                Histori Pendaftaran.
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  color: '#999',
                  marginTop: -5,
                }}>
                Rekap pendaftaran Anda
              </Text>
            </View>
            <Image
              style={{width: 16, height: 16, marginTop: 5}}
              source={require('../../../assets/icon/all.png')}
            />
          </View>

      <View
        style={{
          backgroundColor: '#fff',
          marginTop: 15,
          borderRadius: 10,
          paddingVertical: 5,
          paddingHorizontal: 15,
          borderWidth: 0,
          borderColor: '#ddd',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 0.5,
            borderColor: '#ddd',
          }}>
          <Text style={styles.textkiri}>ID Booking: 09428</Text>
          <Text style={styles.textkanan}>27 Maret 2021</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop:4}}>
          <Text style={styles.textkiri}>Klinik</Text>
          <Text style={styles.textkanan}>Puskesmas Depok II</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.textkiri}>Poliklinik</Text>
          <Text style={styles.textkanan}>Umum</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.textkiri}>Dokter</Text>
          <Text style={styles.textkanan}>Dr. Rahman Suprapto</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.textkiri}>No. Antrian</Text>
          <Text style={styles.textkanan}>12</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderTopWidth: 0.5,
            borderColor: '#ddd',
          }}>
          <Text style={styles.textkiri}>Status</Text>
          <Text style={styles.statusselesai}>Selesai</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#fff',
          marginTop: 15,
          borderRadius: 10,
          paddingVertical: 5,
          paddingHorizontal: 15,
          borderWidth: 0,
          borderColor: '#ddd',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 0.5,
            borderColor: '#ddd',
          }}>
          <Text style={styles.textkiri}>ID Booking: 09428</Text>
          <Text style={styles.textkanan}>27 Maret 2021</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop:4}}>
          <Text style={styles.textkiri}>Klinik</Text>
          <Text style={styles.textkanan}>Puskesmas Depok II</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.textkiri}>Poliklinik</Text>
          <Text style={styles.textkanan}>Umum</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.textkiri}>Dokter</Text>
          <Text style={styles.textkanan}>Dr. Rahman Suprapto</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.textkiri}>No. Antrian</Text>
          <Text style={styles.textkanan}>12</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderTopWidth: 0.5,
            borderColor: '#ddd',
          }}>
          <Text style={styles.textkiri}>Status</Text>
          <Text style={styles.statusgagal}>Terlambat/Tidak datang</Text>
        </View>
      </View>
    </View>
  );
};

export default Account;

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
  logout: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#cc0000',
    paddingVertical: 12,
    borderBottomWidth: 0,
    borderBottomColor: '#dddddd',
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  textkiri: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#666',
    flex: 2,
    paddingVertical: 2,
  },
  textkanan: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    flex: 4,
    color: '#666',
    paddingVertical: 2,
    textAlign: 'right',
  },
  statusselesai: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    flex: 4,
    color: '#35A735',
    paddingVertical: 4,
    textAlign: 'right',
  },
  statusgagal: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    flex: 4,
    color: '#DB5B5B',
    paddingVertical: 4,
    textAlign: 'right',
  },
  textbottomnav: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#444444',
    marginTop: 4,
  },
});
