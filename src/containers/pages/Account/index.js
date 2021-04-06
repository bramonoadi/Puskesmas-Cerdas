import React from 'react';
import {Header, Icon} from 'react-native-elements';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      product: [],
      refreshing: false,
      page: 0,
      error: null,
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
    <View style={{flex: 1, backgroundColor: '#f9f9f9'}}>
      <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 15,
          marginLeft: 20,
          marginRight: 20,
          paddingBottom: 0,
        }}>
        <View style={{}}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 14,
              color: '#444',
            }}>
            Profil Saya.
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
              color: '#999',
              marginTop: -5,
            }}>
            Account dan informasi lainnya
          </Text>
        </View>
        <Image
          style={{width: 16, height: 16, marginTop: 5}}
          source={require('../../../assets/icon/all.png')}
        />
      </View>

      <StatusBar backgroundColor="#f2f2f2" barStyle="dark-content" />
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

        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Homepage')}>
        <View
          style={{
            backgroundColor: '#ffffff',
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15,
            borderRadius: 10,
            paddingVertical: 5,
            paddingHorizontal: 15,
            borderWidth: 0.5,
            borderColor: '#ddd',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={styles.textkiri}>Alamat</Text>
            <Text style={styles.textkanan}>
              Pr. Banjeng Asri No.D5 Maguwoharjo, Depok, Sleman Yogyakarta
            </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textkiri}>No. KTP/NIK</Text>
            <Text style={styles.textkanan}>4363 375712 242641</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textkiri}>No. BPJS</Text>
            <Text style={styles.textkanan}>435387329873</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textkiri}>Gol. Darah</Text>
            <Text style={styles.textkanan}>O</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.textkiri}>No. Handphone</Text>
            <Text style={styles.textkanan}>08114120001</Text>
          </View>
        </View>
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: '#ffffff',
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15,
            borderRadius: 10,
            paddingVertical: 5,
            paddingHorizontal: 15,
            borderWidth: 0.5,
            borderColor: '#ddd',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('EditProfile')}>
            <Text style={styles.textbawah}>Edit Profil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Homepage')}>
            <Text style={styles.textbawah}>Tentang Smart Clinic</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TanyaJawab')}>
            <Text style={styles.textbawah}>Tanya Jawab</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Peraturan')}>
            <Text style={styles.textbawah}>Syarat & Ketentuan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PrivacyPolicy')}>
            <Text style={styles.textbawah}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PrivacyPolicy')}>
            <Text style={styles.textbawah}>Tentang Developer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => confirmation()}>
            <Text style={styles.logout}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
}

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
  textbottomnav: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#444444',
    marginTop: 4,
  },
});
