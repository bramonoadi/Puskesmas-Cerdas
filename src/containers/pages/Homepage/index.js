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
import IconFavorite from '../../../components/atoms/IconFavorite';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://static.vecteezy.com/system/resources/previews/000/662/900/non_2x/restaurant-web-banner-vector.jpg',
        'https://fs.easybanners.com/Templates/1318/TemplateIcon/1318.png',
        'https://mir-s3-cdn-cf.behance.net/project_modules/disp/39495f68050781.5b4f5c571f0ea.jpg',
        'https://rdbproject.files.wordpress.com/2012/07/header-2.jpg',
      ],
    };
  }

  
  render() {
    return (
      <ScrollView>
        <View style={{backgroundColor: '#f9f9f9'}}>
          <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />

          <View
            style={{
              flexDirection: 'row',
              paddingTop: 30,
              paddingBottom: 80,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                style={{
                  width: 45,
                  height: 45,
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
                  fontSize: 14,
                  color: '#444',
                  marginTop: 0,
                }}>
                Bramono Adi
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 11,
                  color: '#444',
                  marginTop: -3,
                }}>
                +628114120001
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                right: 18,
                alignItems: 'flex-end',
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailPremium')}>
                <Icon
                  color="#333"
                  name="search"
                  type="font-awesome-5"
                  size={19}
                />
              </TouchableOpacity>
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
              sliderBoxHeight={150}
              onCurrentImagePressed={(index) =>
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
                borderRadius: 15,
                width: '93%',
                marginTop: 0,
              }}
              imageLoadingColor="#FFE97C"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              marginHorizontal: 15,
              paddingHorizontal: 15,
              paddingVertical: 8,
              backgroundColor: '#fff',
              borderRadius: 10,
              elevation: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flex: 4, paddingRight: 5}}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 11,
                  color: '#222',
                }}>
                Daftarkan Resto-mu, dan punya buku menu digital kekinian! 
              </Text>
            </View>
            <View style={{flex: 2, paddingRight: 10, paddingLeft: 5}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 12,
                  color: '#222',
                  backgroundColor: '#ffe97c',
                  paddingHorizontal: 8,
                  paddingVertical: 7,
                  borderRadius: 50,
                  textAlign: 'center',
                }}>
                Daftar
              </Text>
            </View>
            <View
              style={{
                borderRightWidth: 0.3,
                borderColor: '#ddd',
                height: 50,
              }}></View>
            <View style={{flex: 1, paddingRight: 5, alignItems: 'flex-end'}}>
              <Image
                style={{
                  width: 30,
                  height: 30,
                }}
                source={require('../../../assets/icon/qr.png')}
              />
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#ffffff',
              marginTop: 20,
              marginLeft: 15,
              marginRight: 15,
              borderRadius: 10,
              // borderColor: '#dddddd',
              // borderWidth: 0.5,
              paddingHorizontal: 10,
              paddingVertical: 20,
              elevation: 3,
            }}>
            <View style={{marginTop: -5, paddingLeft: 10, paddingBottom: 15}}>
              <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14}}>
                Pilih kategori.
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  color: '#999',
                  marginTop: -5,
                }}>
                Sesuai ke-kepo-an mu
              </Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View style={{width: '25%'}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Order')}>
                    <Image
                      style={styles.imagemenu}
                      source={require('../../../assets/icon/minuman.png')}
                    />
                    <Text style={styles.tetxmenu}>Minuman</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width: '25%'}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Product')}>
                    <Image
                      style={styles.imagemenu}
                      source={require('../../../assets/icon/snack.png')}
                    />
                    <Text style={styles.tetxmenu}>Jajanan</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width: '25%'}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Piutang')}>
                    <Image
                      style={styles.imagemenu}
                      source={require('../../../assets/icon/restoran.png')}
                    />
                    <Text style={styles.tetxmenu}>Restoran</Text>
                  </TouchableOpacity>
                </View>

                <View style={{width: '25%'}}>
                  <Image
                    style={styles.imagemenu}
                    source={require('../../../assets/icon/cafe.png')}
                  />
                  <Text style={styles.tetxmenu}>Cafe</Text>
                </View>
              </View>
            </View>

            <View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 15,
                }}>
                <View style={{width: '25%'}}>
                  <Image
                    style={styles.imagemenu}
                    source={require('../../../assets/icon/warung.png')}
                  />
                  <Text style={styles.tetxmenu}>Warung</Text>
                </View>

                <View style={{width: '25%'}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Absensi')}>
                    <Image
                      style={styles.imagemenu}
                      source={require('../../../assets/icon/oleholeh.png')}
                    />
                    <Text style={styles.tetxmenu}>Oleh-oleh</Text>
                  </TouchableOpacity>
                </View>

                <View style={{width: '25%'}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Staff')}>
                    <Image
                      style={styles.imagemenu}
                      source={require('../../../assets/icon/kue.png')}
                    />
                    <Text style={styles.tetxmenu}>Kue</Text>
                  </TouchableOpacity>
                </View>

                <View style={{width: '25%'}}>
                  <Image
                    style={styles.imagemenu}
                    source={require('../../../assets/icon/lainnya.png')}
                  />
                  <Text style={styles.tetxmenu}>Lainnya</Text>
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
              paddingBottom: 15,
            }}>
            <View style={{}}>
              <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14}}>
                Rumah makan terbaru.
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  color: '#999',
                  marginTop: -5,
                }}>
                di sekitarmu
              </Text>
            </View>
            <Image
              style={{width: 16, height: 16, marginTop: 5}}
              source={require('../../../assets/icon/all.png')}
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{flexDirection: 'row', marginTop: 0, paddingLeft: 10}}>
            <View style={styles.box}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailPremium')}>
                <View style={styles.inner}>
                  <Image
                    style={styles.imageproduct}
                    source={require('../../../assets/images/pizza.jpg')}
                  />
                  <View style={styles.iconfav}>
                    <IconFavorite />
                  </View>
                  <Text style={styles.titleproduct}>Pizza Hut</Text>
                  <Text style={styles.alamat}>Depok, Sleman</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.box}>
              <View style={styles.inner}>
                <Image
                  style={styles.imageproduct}
                  source={require('../../../assets/images/kebab.jpeg')}
                />
                <View style={styles.iconfav}>
                  <IconFavorite />
                </View>
                <Text style={styles.titleproduct}>Kebab</Text>
                <Text style={styles.alamat}>Mlati, Sleman</Text>
              </View>
            </View>

            <View style={styles.box}>
              <View style={styles.inner}>
                <Image
                  style={styles.imageproduct}
                  source={require('../../../assets/images/mcd.jpg')}
                />
                <View style={styles.iconfav}>
                  <IconFavorite />
                </View>
                <Text style={styles.titleproduct}>McD</Text>
                <Text style={styles.alamat}>Kalasan, Sleman</Text>
              </View>
            </View>

            <View style={styles.box}>
              <View style={styles.inner}>
                <Image
                  style={styles.imageproduct}
                  source={require('../../../assets/images/banner.png')}
                />
                <View style={styles.iconfav}>
                  <IconFavorite />
                </View>
                <Text style={styles.titleproduct}>KFC Bantul</Text>
                <Text style={styles.alamat}>Banguntirto, Bantul</Text>
              </View>
            </View>

            <View style={styles.box}>
              <View style={styles.inner}>
                <Image
                  style={styles.imageproduct}
                  source={require('../../../assets/images/bakso.jpg')}
                />
                <View style={styles.iconfav}>
                  <IconFavorite />
                </View>
                <Text style={styles.titleproduct}>Bakso Lap Tembak</Text>
                <Text style={styles.alamat}>Parangtritis, Bantul</Text>
              </View>
            </View>

            <View style={styles.box}>
              <View style={styles.inner}>
                <Image
                  style={styles.imageproduct}
                  source={require('../../../assets/images/bebek.jpg')}
                />
                <View style={styles.iconfav}>
                  <IconFavorite />
                </View>
                <Text style={styles.titleproduct}>Bebek H. Slamet</Text>
                <Text style={styles.alamat}>Wates, Kulonprogo</Text>
              </View>
            </View>

            <View
              style={{width: 160, height: 223, padding: 6, marginRight: 20}}>
              <View style={styles.inner}>
                <Image
                  style={styles.imageproduct}
                  source={require('../../../assets/images/hokben.jpg')}
                />
                <View style={styles.iconfav}>
                  <IconFavorite />
                </View>
                <Text style={styles.titleproduct}>HokBen</Text>
                <Text style={styles.alamat}>Piyungan, Prambanan</Text>
              </View>
            </View>
          </ScrollView>

          <Image
            style={{
              width: '93%',
              height: 70,
              marginTop: 5,
              borderRadius: 10,
              alignSelf: 'center',
              marginBottom: 10,
              marginTop: 20,
            }}
            source={require('../../../assets/images/bannerbawah.jpg')}
          />

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
              <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14}}>
                Tapping Terbanyak.
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  color: '#999',
                  marginTop: -5,
                }}>
                dari QR-code DaftarMenu
              </Text>
            </View>
            <Image
              style={{width: 16, height: 16, marginTop: 5}}
              source={require('../../../assets/icon/all.png')}
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              flexDirection: 'row',
              marginTop: 0,
              paddingLeft: 10,
              paddingRight: 140,
            }}>
            <View style={styles.box}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailProduct')}>
                <View style={styles.inner}>
                  <Image
                    style={styles.imageproduct}
                    source={require('../../../assets/images/pempek.jpg')}
                  />
                  <View style={styles.iconfav}>
                    <IconFavorite />
                  </View>
                  <Text style={styles.titleproduct}>Pempek Ny.Kamto</Text>
                  <Text style={styles.alamat}>Depok, Sleman</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.box}>
              <View style={styles.inner}>
                <Image
                  style={styles.imageproduct}
                  source={require('../../../assets/images/bensu.png')}
                />
                <View style={styles.iconfav}>
                  <IconFavorite />
                </View>
                <Text style={styles.titleproduct}>Geprek Bensu</Text>
                <Text style={styles.alamat}>Mlati, Sleman</Text>
              </View>
            </View>

            <View style={styles.box}>
              <View style={styles.inner}>
                <Image
                  style={styles.imageproduct}
                  source={require('../../../assets/images/shaburi.jpg')}
                />
                <View style={styles.iconfav}>
                  <IconFavorite />
                </View>
                <Text style={styles.titleproduct}>Shaburi Kintan</Text>
                <Text style={styles.alamat}>Kalasan, Sleman</Text>
              </View>
            </View>

            <View
              style={{width: 160, height: 223, padding: 6, marginRight: 20}}>
              <View style={styles.inner}>
                <Image
                  style={styles.imageproduct}
                  source={require('../../../assets/images/mieayam.jpg')}
                />
                <View style={styles.iconfav}>
                  <IconFavorite />
                </View>
                <Text style={styles.titleproduct}>Mie Ayam 77</Text>
                <Text style={styles.alamat}>Banguntirto, Bantul</Text>
              </View>
            </View>
          </ScrollView>

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
          </ImageBackground>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  imagemenu: {
    alignSelf: 'center',
    width: 40,
    height: 40,
    marginTop: 10,
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
    elevation: 1,
  },
  titleproduct: {
    fontFamily: 'Poppins-Bold',
    fontSize: 11,
    paddingTop: 10,
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
