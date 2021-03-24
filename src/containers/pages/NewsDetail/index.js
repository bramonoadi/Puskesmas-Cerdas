import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function index() {
  return (
    <ScrollView>
    <View style={{backgroundColor:'#f9f9f9'}}>
      <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />
      <View>
        <View style={styles.cardatas}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/3.png')}
          />
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Bold',
              color: '#444444',
              paddingTop: 10,
              paddingLeft: 15,
            }}>
            Tidur teratur untuk menjaga stamina optimal
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontFamily: 'Poppins-Regular',
              color: '#444444',
              marginTop: -2,
              marginBottom: 10,
              paddingLeft: 15,
            }}>
            Post Date: 12 Maret 2021
          </Text>
        </View>

        <View style={styles.cardbawah}>
          <Text style={styles.deskripsi}>
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
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardatas: {
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#444444',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  cardbawah: {
    marginLeft: 15,
    marginTop: 15,
    marginRight: 15,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#444444',
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  deskripsi: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#444444',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    textAlign: 'justify',
  },
  image: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
