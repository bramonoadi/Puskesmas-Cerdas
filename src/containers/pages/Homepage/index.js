import React, {Component, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SliderBox} from 'react-native-image-slider-box';
import {Icon} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://web.kominfo.go.id/sites/default/files/users/4896/Banner%20Bantu%20Masyarakat%20Tahu%20COVID-19.jpeg',
        'https://covid19.go.id/storage/app/media/Materi%20Edukasi/2020/November/kebalkenal.jpg',
        'https://www.kalbe.co.id/portals/0/Images/slider/BannerWebsiteVaksin_Ind.jpg?ver=2021-01-20-084430-420',
        'https://cdn.medcom.id/images/content/2020/05/30/1149027/6oK3PeBT7j.jpeg',
      ],
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={{backgroundColor: '#f2f2f2'}}>
          <StatusBar backgroundColor="#f2f2f2" barStyle="dark-content" />

          <View
            style={{
              flexDirection: 'row',
              paddingTop: 35,
              paddingBottom: 90,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Account')}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginLeft: 15,
                  borderWidth: 2,
                  borderRadius: 50,
                  borderColor: '#dddddd',
                }}
                source={require('../../../assets/icon/profil1.png')}
              />
            </TouchableOpacity>
            <View
              style={{
                flex: 3,
                paddingLeft: 10,
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 13,
                  color: '#4BA2C3',
                  marginTop: 4,
                }}>
                Halo,
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 16,
                  color: '#444',
                  marginTop: -3,
                }}>
                Bramono Adi
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                right: 30,
                alignItems: 'flex-end',
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Notifikasi')}>
                <Icon
                  color="#222"
                  name="bell"
                  type="font-awesome-5"
                  size={22}
                />
              </TouchableOpacity>
            </View>

            <View>
              <Text
                onPress={() => navigation.navigate('Notifikasi')}
                style={{
                  position: 'absolute',
                  top: -20,
                  right: 22,
                  backgroundColor: '#cc0000',
                  paddingVertical: 3.5,
                  paddingHorizontal: 7.2,
                  fontSize: 10,
                  borderRadius: 50,
                  color: '#ffffff',
                }}>
                2
              </Text>
            </View>
          </View>

          <View style={{marginTop: -65}}>
            <SliderBox
              ImageComponent={FastImage}
              images={this.state.images}
              sliderBoxHeight={130}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
              dotColor="#FFE97C"
              inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={10}
              autoplay
              circleLoop
              resizeMethod={'resize'}
              resizeMode={'cover'}
              paginationBoxStyle={{
                position: 'absolute',
                bottom: 0,
                padding: 0,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                paddingVertical: 10,
                marginHorizontal: 50,
              }}
              dotStyle={{
                width: 6,
                height: 6,
                borderRadius: 5,
                marginHorizontal: 0,
                padding: 0,
                margin: 0,
                backgroundColor: '#fff',
              }}
              ImageComponentStyle={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                width: '93%',
                marginTop: 0,
              }}
              imageLoadingColor="#FFE97C"
            />
          </View>

          <ImageBackground
            source={require('../../../assets/images/background.jpg')}
            imageStyle={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
            style={{
              backgroundColor: '#fff',
              marginLeft: 15,
              marginRight: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              elevation: 3,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 8,
            }}>
            <View style={{flex: 5, paddingRight: 5}}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 10,
                  color: '#fff',
                }}>
                Lengkapi data diri, untuk menggunakan fitur pendaftaran antrian.
              </Text>
            </View>
            <View
              style={{paddingRight: 0, paddingLeft: 5, alignSelf: 'center'}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 10,
                  color: '#444',
                  backgroundColor: '#fff',
                  paddingHorizontal: 15,
                  paddingVertical: 4,
                  borderRadius: 50,

                  textAlign: 'center',
                }}>
                Lengkapi
              </Text>
            </View>
          </ImageBackground>

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 30,
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
                Pendaftaran Periksa.
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  color: '#999',
                  marginTop: -5,
                }}>
                Silahkan klik tombol dibawah ini
              </Text>
            </View>
            <Image
              style={{width: 16, height: 16, marginTop: 5}}
              source={require('../../../assets/icon/all.png')}
            />
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Directory')}>
            <LinearGradient
              colors={['#4EB0D5', '#308DB0', '#4EB0D5']}
              style={{
                paddingVertical: 25,
                paddingHorizontal: 10,
                borderRadius: 10,
                marginHorizontal: 15,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 16,
                  color: '#fff',
                  textAlign: 'center',
                }}>
                Dapatkan Nomor Antrian
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 30,
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
                Informasi.
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  color: '#999',
                  marginTop: -5,
                }}>
                Layanan dan kesehatan
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
              // borderColor: '#dddddd',
              // borderWidth: 0.5,
              paddingHorizontal: 10,
              paddingVertical: 20,
              borderWidth: 0.5,
              borderColor: '#ddd',
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{width: '33.33%'}}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Directory')}>
                    <Image
                      style={styles.imagemenu}
                      source={require('../../../assets/icon/hospital.png')}
                    />
                    <Text style={styles.tetxmenu}>Lihat Puskesmas</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width: '33.33%'}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Product')}>
                    <Image
                      style={styles.imagemenu}
                      source={require('../../../assets/icon/covid.png')}
                    />
                    <Text style={styles.tetxmenu}>Info Covid-19</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width: '33.33%'}}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('NewsList')}>
                    <Image
                      style={styles.imagemenu}
                      source={require('../../../assets/icon/artikel.png')}
                    />
                    <Text style={styles.tetxmenu}>Artikel Kesehatan</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 30,
              marginLeft: 20,
              marginRight: 20,
              paddingBottom: 10,
            }}>
            <View style={{}}>
              <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14}}>
                Artikel Kesehatan.
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  color: '#999',
                  marginTop: -5,
                }}>
                Pengetahuan hidup sehat
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('NewsList')}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: 'Poppins-Medium',
                  color: '#666',
                  fontSize: 12,
                  paddingTop: 16,
                }}>
                Lihat Semua
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{flexDirection: 'row', marginBottom: 30, paddingLeft: 10}}>
            <View style={styles.box}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailPremium')}>
                <View style={styles.inner}>
                  <Image
                    style={styles.imageproduct}
                    source={require('../../../assets/images/3.png')}
                  />

                  <Text style={styles.titleproduct}>
                    Tidur teratur untuk menjaga stamina optimal
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.box}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailPremium')}>
                <View style={styles.inner}>
                  <Image
                    style={styles.imageproduct}
                    source={require('../../../assets/images/2.jpg')}
                  />

                  <Text style={styles.titleproduct}>
                    Masker non-medis, bahaya dan resikonya..
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.box}>
              <View style={styles.inner}>
                <Image
                  style={styles.imageproduct}
                  source={require('../../../assets/images/7.jpg')}
                />

                <Text style={styles.titleproduct}>
                  Mengenal buah-buahan untuk daya tahan tubuh
                </Text>
              </View>
            </View>
          </ScrollView>

          {/* <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              paddingBottom: 15,
            }}>
            <View style={{}}>
              <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14}}>
                Statistik DaftarMenu.
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  color: '#999',
                  marginTop: -5,
                }}>
                dari Sabang sampai Merauke
              </Text>
            </View>
          </View>

          <ImageBackground
            source={require('../../../assets/images/indonesia.png')}
            style={{
              height: 125,
              backgroundColor: '#fff',
              marginLeft: 15,
              marginRight: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderRadius: 10,
              elevation: 3,
              padding: 20,
              marginBottom: 50,
            }}>
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-ExtraBold',
                  fontSize: 45,
                  color: '#444',
                }}>
                24.530
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 14,
                  color: '#999',
                  marginTop: -15,
                  fontStyle: 'italic',
                }}>
                Merchant Telah Join
              </Text>
            </View>
            <View>
              <Text
                style={{
                  marginTop: 35,
                  fontFamily: 'Poppins-Medium',
                  fontSize: 12,
                  color: '#222',
                  backgroundColor: '#ffe97c',
                  paddingHorizontal: 25,
                  paddingVertical: 7,
                  borderRadius: 50,
                  textAlign: 'center',
                  elevation: 3,
                }}>
                Detail
              </Text>
            </View>
          </ImageBackground> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imagemenu: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    marginTop: 0,
  },
  tetxmenu: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#444',
    paddingTop: 5,
    textAlign: 'center',
  },
  box: {
    width: 160,
    height: 223,
    padding: 6,
  },
  inner: {
    backgroundColor: '#fff',
    borderRadius: 5,

    borderWidth: 0.5,
    borderColor: '#ddd',
  },
  titleproduct: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    paddingTop: 10,
    color: '#444',
    paddingBottom: 10,
    paddingHorizontal: 12,
    borderTopWidth: 0.4,
    borderColor: '#ddd',
  },
  alamat: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#999',
    paddingHorizontal: 12,
    marginTop: -10,
    paddingBottom: 5,
  },
  imageproduct: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  iconfav: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
});
