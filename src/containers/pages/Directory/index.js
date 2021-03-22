import React from 'react';
import {Icon} from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Directory extends React.Component {
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
      <View style={{backgroundColor: '#f9f9f9'}}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 5,
            paddingBottom: 0,
          }}>
          <View
            style={{
              flex: 5,
              marginTop: 15,
              marginLeft: 15,
              marginRight: 15,
              marginBottom: 20,
              height: 46,
              backgroundColor: '#ffffff',
              borderRadius: 10,
              paddingHorizontal: 0,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              borderColor: '#ddd',
              borderWidth: 0.5,
            }}>
            <TextInput
              style={{
                flex: 1,
                paddingVertical: 5,
                paddingHorizontal: 10,
                color: '#444444',
                fontFamily: 'Poppins-Regular',
              }}
              placeholder={'Cari nama puskesmas/desa/kecamatan..'}
              placeholderTextColor={'#ccc'}
            />
            <TouchableOpacity
              style={{padding: 4, marginRight: 10}}
              onpress={() => {}}>
              <Icon
                color="#318FB2"
                name="search"
                type="font-awesome-5"
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 0,
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
              Puskesmas Terdekat.
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 12,
                color: '#999',
                marginTop: -5,
              }}>
              dengan lokasi Anda
            </Text>
          </View>
          <Image
            style={{width: 16, height: 16, marginTop: 5}}
            source={require('../../../assets/icon/all.png')}
          />
          
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DetailPremium')}>
          <View style={styles.cartsatuan}>
            <View style={{flex: 1}}>
              <Image
                style={styles.images}
                source={require('../../../assets/images/4.jpg')}
              />
            </View>
            <View style={{flex: 4, paddingLeft: 20}}>
              <Text style={styles.title}>Puskesmas Depok II</Text>
              <Text style={styles.alamat}>
                Jl. Letkol Subadri, Triharjo, Sleman, Kalah Ijo 1, Triharjo
              </Text>
              <Text style={styles.alamat}>Sleman. DI Yogyakarta</Text>
              <View style={{flexDirection: 'row', marginTop: 2}}>
                <View style={{flexDirection: 'row', marginTop: 2}}>
                  <Icon
                    color="#318FB2"
                    name="location-arrow"
                    type="font-awesome-5"
                    size={11}
                  />
                  <Text style={styles.distance}>2,3 Km</Text>
                </View>
                <View>
                  <Text style={styles.statusbuka}>Buka</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.cartsatuan}>
          <View style={{flex: 1}}>
            <Image
              style={styles.images}
              source={require('../../../assets/images/5.jpg')}
            />
          </View>
          <View style={{flex: 4, paddingLeft: 20}}>
            <Text style={styles.title}>Puskesmas Condong Catur</Text>
            <Text style={styles.alamat}>
              Jl. Affandi No.4, Jembatan merah, Gejayan, Sleman
            </Text>
            <Text style={styles.alamat}>D.I Yogyakarta</Text>
            <View style={{flexDirection: 'row', marginTop: 2}}>
                <View style={{flexDirection: 'row', marginTop: 2}}>
                  <Icon
                    color="#318FB2"
                    name="location-arrow"
                    type="font-awesome-5"
                    size={11}
                  />
                  <Text style={styles.distance}>2,3 Km</Text>
                </View>
                <View>
                  <Text style={styles.statusbuka}>Buka</Text>
                </View>
              </View>
          </View>
        </View>

        <View style={styles.cartsatuan}>
          <View style={{flex: 1}}>
            <Image
              style={styles.images}
              source={require('../../../assets/images/6.jpg')}
            />
          </View>
          <View style={{flex: 4, paddingLeft: 20}}>
            <Text style={styles.title}>Puskesmas Imogiri</Text>
            <Text style={styles.alamat}>
              Jl. Kaliurang Km.7, nganglik, Sleman
            </Text>
            <Text style={styles.alamat}>D.I Yogyakarta</Text>
            <View style={{flexDirection: 'row', marginTop: 2}}>
                <View style={{flexDirection: 'row', marginTop: 2}}>
                  <Icon
                    color="#318FB2"
                    name="location-arrow"
                    type="font-awesome-5"
                    size={11}
                  />
                  <Text style={styles.distance}>2,3 Km</Text>
                </View>
                <View>
                  <Text style={styles.statustutup}>Tutup</Text>
                </View>
              </View>
          </View>
        </View>

        <View style={styles.cartsatuan}>
          <View style={{flex: 1}}>
            <Image
              style={styles.images}
              source={require('../../../assets/images/1.jpg')}
            />
          </View>
          <View style={{flex: 4, paddingLeft: 20}}>
            <Text style={styles.title}>Pueskesmas Tajem</Text>
            <Text style={styles.alamat}>
              Jl. Ring Road Utara No.7, Condongcatur, Depok, Sleman
            </Text>
            <Text style={styles.alamat}>D.I Yogyakarta</Text>
            <View style={{flexDirection: 'row', marginTop: 2}}>
                <View style={{flexDirection: 'row', marginTop: 2}}>
                  <Icon
                    color="#318FB2"
                    name="location-arrow"
                    type="font-awesome-5"
                    size={11}
                  />
                  <Text style={styles.distance}>2,3 Km</Text>
                </View>
                <View>
                  <Text style={styles.statustutup}>Tutup</Text>
                </View>
              </View>
          </View>
        </View>

        <View style={styles.cartsatuan}>
          <View style={{flex: 1}}>
            <Image
              style={styles.images}
              source={require('../../../assets/images/4.jpg')}
            />
          </View>
          <View style={{flex: 4, paddingLeft: 20}}>
            <Text style={styles.title}>Puskesmas Seturan</Text>
            <Text style={styles.alamat}>
              Jl. Laksda Adisucipto, No.45, Maguwo, Sleman
            </Text>
            <Text style={styles.alamat}>D.I Yogyakarta</Text>
            <View style={{flexDirection: 'row', marginTop: 2}}>
                <View style={{flexDirection: 'row', marginTop: 2}}>
                  <Icon
                    color="#318FB2"
                    name="location-arrow"
                    type="font-awesome-5"
                    size={11}
                  />
                  <Text style={styles.distance}>2,3 Km</Text>
                </View>
                <View>
                  <Text style={styles.statusbuka}>Buka</Text>
                </View>
              </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Directory;

const styles = StyleSheet.create({
  title: {fontFamily: 'Poppins-Bold', fontSize: 14, color: '#444'},
  cartsatuan: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    paddingVertical: 15,
  },
  images: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  alamat: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: '#444',
    marginTop: -3,
  },
  distance: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    paddingLeft: 7,
    marginTop: -1,
    color: '#444',
  },
  statusbuka: {
    fontFamily: 'Poppins-Bold',
    fontSize: 11,
    paddingLeft: 7,
    marginTop: 0,
    color: '#2BA626',
    borderLeftWidth: 0.5,
    borderColor: '#999',
    marginLeft: 10,
    paddingLeft: 12,
  },
  statustutup: {
    fontFamily: 'Poppins-Bold',
    fontSize: 11,
    paddingLeft: 7,
    marginTop: 0,
    color: '#DB5B5B',
    borderLeftWidth: 0.5,
    borderColor: '#999',
    marginLeft: 10,
    paddingLeft: 12,
  },
});
