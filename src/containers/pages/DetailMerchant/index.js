import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {Icon} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {ScrollView} from 'react-native-gesture-handler';
import {SliderBox} from 'react-native-image-slider-box';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends React.Component {
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
      <ScrollView style={{backgroundColor: '#f9f9f9', }}>
        <View style={{backgroundColor: '#f9f9f9', paddingVertical: 15}}>
        <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />
        <View style={{}}>
          
          <SliderBox
            ImageComponent={FastImage}
            images={this.state.images}
            sliderBoxHeight={180}
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

        <View
          style={{
            backgroundColor: '#fff',
            marginLeft: 15,
            marginRight: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            elevation: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          <View style={{flex: 5}}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 12,
                color: '#444',
                paddingTop: 3,
              }}>
              Jam Operasional : 08:00-14:00
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 2}}>
            <View style={{flexDirection: 'row', marginTop: 2}}>
              <Icon
                color="#318FB2"
                name="location-arrow"
                type="font-awesome-5"
                size={12}
              />
              <Text style={styles.distance}>2,3 Km</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#ffffff',
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15,
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 15,
          }}>
          <View style={{}}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 16,
                color: '#444',
              }}>
              Puskesmas CondongCatur
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 12,
                color: '#888',
                marginBottom: 15,
              }}>
              Pr. Banjeng Asri No.D5 Maguwoharjo, Depok, Sleman Yogyakarta
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15,
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 15,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
              color: '#444',
            }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#ffffff',
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15,
            marginBottom: 30,
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 15,
          }}>
          <View style={{marginBottom: 10}}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 16,
                color: '#4BA2C3',
              }}>
              Pilih Poliklinik
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: '#ddd',
              paddingVertical: 6,
            }}>
            <View>
              <Text style={styles.namapoli}>Poli Umum</Text>
              <Text style={styles.dokter}>Dr. Rahman Suprapto</Text>
            </View>
            <LinearGradient
              colors={['#4EB0D5', '#308DB0', '#4EB0D5']}
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 50,
                height: 28,
                width: 80,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 12,
                  color: '#fff',
                  textAlign: 'center',
                }}>
                Daftar
              </Text>
            </LinearGradient>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: '#ddd',
              paddingVertical: 6,
            }}>
            <View>
              <Text style={styles.namapoli}>Poli Umum</Text>
              <Text style={styles.dokter}>Dr. Rahman Suprapto</Text>
            </View>
            <LinearGradient
              colors={['#4EB0D5', '#308DB0', '#4EB0D5']}
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 50,
                height: 28,
                width: 80,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 12,
                  color: '#fff',
                  textAlign: 'center',
                }}>
                Daftar
              </Text>
            </LinearGradient>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: '#ddd',
              paddingVertical: 6,
            }}>
            <View>
              <Text style={styles.namapoli}>Poli Umum</Text>
              <Text style={styles.dokter}>Dr. Rahman Suprapto</Text>
            </View>
            <LinearGradient
              colors={['#4EB0D5', '#308DB0', '#4EB0D5']}
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 50,
                height: 28,
                width: 80,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  fontSize: 12,
                  color: '#fff',
                  textAlign: 'center',
                }}>
                Daftar
              </Text>
            </LinearGradient>
          </View>
        </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
});
