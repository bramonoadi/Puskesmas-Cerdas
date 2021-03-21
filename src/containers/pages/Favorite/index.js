import React from 'react';
import {Header, Icon} from 'react-native-elements';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Favorite = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 25,
            marginRight: 25,
            height: 60,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 12,
              color: '#444444',
            }}>
            3 Daftar Favorit
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 12,
                paddingRight: 0,
                color: '#999',
              }}>
              Hapus semua
            </Text>
            {/* <Icon color="#cc0000" name="trash" type="font-awesome" size={16} /> */}
          </View>
        </View>

        <View>
          <View style={{paddingLeft: 15, marginBottom: 15, paddingRight: 15}}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/pizza.jpg')}
            />
            <View style={{position:'absolute',right:30, top:15}}>
             <Icon color="#ddd" name="trash-o" type="font-awesome" size={18} />
             </View>
            <View style={styles.cardstyle}>
              <View style={{flex: 1}}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    marginTop: -45,
                    resizeMode: 'cover',
                    borderRadius: 50,
                  }}
                  source={require('../../../assets/icon/profil1.png')}
                />
                <View style={{flexDirection: 'row', marginTop: 10,}}>
                  <Icon
                    color="#cc0000"
                    name="location-arrow"
                    type="font-awesome-5"
                    size={11}
                  />
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      fontSize: 11,
                      paddingLeft: 7,
                      marginTop: -1,
                      color: '#444',
                    }}>
                    2,3 Km
                  </Text>
                </View>
              </View>
              <View style={{flex: 4, paddingLeft: 5}}>
                <Text style={styles.namatoko}>KFC Gelael</Text>

                <Text style={styles.alamat}>
                  Jl. Mana saja, Dimana Saja, Kapan Saja
                </Text>
              </View>
            </View>
          </View>
        </View>


        <View>
          <View style={{paddingLeft: 15, marginBottom: 15, paddingRight: 15}}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/hokben.jpg')}
            />
            <View style={{position:'absolute',right:30, top:15}}>
            <Icon color="#ddd" name="trash-o" type="font-awesome" size={18} />
             </View>
            <View style={styles.cardstyle}>
              <View style={{flex: 1}}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    marginTop: -45,
                    resizeMode: 'cover',
                    borderRadius: 50,
                  }}
                  source={require('../../../assets/icon/profil1.png')}
                />
                <View style={{flexDirection: 'row', marginTop: 10,}}>
                  <Icon
                    color="#cc0000"
                    name="location-arrow"
                    type="font-awesome-5"
                    size={11}
                  />
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      fontSize: 11,
                      paddingLeft: 7,
                      marginTop: -1,
                      color: '#444',
                    }}>
                    6,1 Km
                  </Text>
                </View>
              </View>
              <View style={{flex: 4, paddingLeft: 5}}>
                <Text style={styles.namatoko}>Bakso Brutu Kang Sronto</Text>

                <Text style={styles.alamat}>
                  Jl. Pemuda 34, Kalasan, Yogyakarta
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={{paddingLeft: 15, marginBottom: 15, paddingRight: 15}}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/shaburi.jpg')}
            />
            <View style={{position:'absolute',right:30, top:15}}>
            <Icon color="#ddd" name="trash-o" type="font-awesome" size={18} />
             </View>
            <View style={styles.cardstyle}>
              <View style={{flex: 1}}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    marginTop: -45,
                    resizeMode: 'cover',
                    borderRadius: 50,
                  }}
                  source={require('../../../assets/icon/profil1.png')}
                />
                <View style={{flexDirection: 'row', marginTop: 10,}}>
                  <Icon
                    color="#cc0000"
                    name="location-arrow"
                    type="font-awesome-5"
                    size={11}
                  />
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      fontSize: 11,
                      paddingLeft: 7,
                      marginTop: -1,
                      color: '#444',
                    }}>
                    9,2 Km
                  </Text>
                </View>
              </View>
              <View style={{flex: 4, paddingLeft: 5}}>
                <Text style={styles.namatoko}>Shabu Shabu Enak</Text>

                <Text style={styles.alamat}>
                  Jl. Aspalan Km.69, Joss, Yogyakarta
                </Text>
              </View>
            </View>
          </View>
        </View>

      </View>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  cardstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignContent: 'center',
    alignItems: 'center',
    elevation:0.4,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  alamat: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: '#444444',
  },
  namatoko: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#444444',
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
