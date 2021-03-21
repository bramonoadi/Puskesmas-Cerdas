import React, { createRef } from "react";
import {StyleSheet, Text, View, Image, SafeAreaView, FlatList,
  Modal, TouchableOpacity,} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Gallery from './../Gallery';
import ActionSheet from "react-native-actions-sheet";


const actionSheetRef = createRef();
  



const TabA = ({navigation}) => {
  let actionSheet;
  return (
    <View style={{backgroundColor:'#fff', paddingHorizontal:15, paddingVertical:20}}>
        <View style={{marginBottom:15}}>
            <Text style={{fontSize:16, fontWeight:'700', color:'#cc0000'}}>Makanan</Text>
        </View>


        <TouchableOpacity
        onPress={() => {
          actionSheetRef.current?.setModalVisible();
        }}
      >
        
        <View style={{flexDirection:'row', alignItems:'center', marginBottom:20}}>
        <View style={{flex:1}}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius:10,
            resizeMode: 'cover',
          }}
          source={require('../../../assets/images/banner.png')}
        />
        </View>
        <View style={{flex:3}}>
            <Text style={{fontSize:14, fontWeight:'700', color:'#444'}}>Chicken Crispy Regular</Text>
            <Text style={{fontSize:12, fontWeight:'300', color:'#444'}}>Ayam dengan rasa gurih dan kriuk</Text>
        </View>
        <View style={{flex:1}}>
            <Text style={{fontSize:14, fontWeight:'700', color:'#444', marginTop:-17}}>Rp. 25.000</Text>
        </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {
          actionSheetRef.current?.setModalVisible();
        }}
      >
        <View style={{flexDirection:'row', alignItems:'center', marginBottom:20}}>
        <View style={{flex:1}}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius:10,
            resizeMode: 'cover',
          }}
          source={require('../../../assets/images/banner.png')}
        />
        </View>
        <View style={{flex:3}}>
            <Text style={{fontSize:14, fontWeight:'700', color:'#444'}}>Chicken Crispy Regular</Text>
            <Text style={{fontSize:12, fontWeight:'300', color:'#444'}}>Ayam dengan rasa gurih dan kriuk</Text>
        </View>
        <View style={{flex:1}}>
            <Text style={{fontSize:14, fontWeight:'700', color:'#444', marginTop:-17}}>Rp. 25.000</Text>
        </View>
        </View>
        </TouchableOpacity>

        <View style={{flexDirection:'row', alignItems:'center', marginBottom:20}}>
        <View style={{flex:1}}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius:10,
            resizeMode: 'cover',
          }}
          source={require('../../../assets/images/banner.png')}
        />
        </View>
        <View style={{flex:3}}>
            <Text style={{fontSize:14, fontWeight:'700', color:'#444'}}>Chicken Crispy Regular</Text>
            <Text style={{fontSize:12, fontWeight:'300', color:'#444'}}>Ayam dengan rasa gurih dan kriuk</Text>
        </View>
        <View style={{flex:1}}>
            <Text style={{fontSize:14, fontWeight:'700', color:'#444', marginTop:-17}}>Rp. 25.000</Text>
        </View>
        </View>

        <View style={{flexDirection:'row', alignItems:'center', marginBottom:20}}>
        <View style={{flex:1}}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius:10,
            resizeMode: 'cover',
          }}
          source={require('../../../assets/images/banner.png')}
        />
        </View>
        <View style={{flex:3}}>
            <Text style={{fontSize:14, fontWeight:'700', color:'#444'}}>Chicken Crispy Regular</Text>
            <Text style={{fontSize:12, fontWeight:'300', color:'#444'}}>Ayam dengan rasa gurih dan kriuk</Text>
        </View>
        <View style={{flex:1}}>
            <Text style={{fontSize:14, fontWeight:'700', color:'#444', marginTop:-17}}>Rp. 25.000</Text>
        </View>
        </View>

        <View style={{flexDirection:'row', alignItems:'center', marginBottom:20}}>
        <View style={{flex:1}}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius:10,
            resizeMode: 'cover',
          }}
          source={require('../../../assets/images/banner.png')}
        />
        </View>
        <View style={{flex:3}}>
            <Text style={{fontSize:14, fontWeight:'700', color:'#444'}}>Chicken Crispy Regular</Text>
            <Text style={{fontSize:12, fontWeight:'300', color:'#444'}}>Ayam dengan rasa gurih dan kriuk</Text>
        </View>
        <View style={{flex:1}}>
            <Text style={{fontSize:14, fontWeight:'700', color:'#444', marginTop:-17}}>Rp. 25.000</Text>
        </View>
        </View>

        <View style={{flexDirection:'row', alignItems:'center', marginBottom:20}}>
        <View style={{flex:1}}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius:10,
            resizeMode: 'cover',
          }}
          source={require('../../../assets/images/banner.png')}
        />
        </View>
        <View style={{flex:3}}>
            <Text style={{fontSize:14, fontWeight:'700', color:'#444'}}>Chicken Crispy Regular</Text>
            <Text style={{fontSize:12, fontWeight:'300', color:'#444'}}>Ayam dengan rasa gurih dan kriuk</Text>
        </View>
        <View style={{flex:1}}>
            <Text style={{fontSize:14, fontWeight:'700', color:'#444', marginTop:-17}}>Rp. 25.000</Text>
        </View>
        </View>

        <ActionSheet containerStyle={{borderTopLeftRadius:25, borderTopRightRadius:25}} gestureEnabled ref={actionSheetRef}>
        <View style={{paddingHorizontal:20, marginTop:12, marginBottom:0}}>
        <Image
          style={{
            width: '100%',
            height: 300,
            borderRadius:10,
            resizeMode: 'cover',
          }}
          source={require('../../../assets/images/banner.png')}
        />
          <Text style={{fontFamily:'Poppins-Bold', fontSize:14, marginTop:15}}>Chicken Crispy Regular</Text>
          <Text style={{fontFamily:'Poppins-Regular', fontSize:12, marginTop:8}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</Text>
          <Text style={{fontFamily:'Poppins-Bold', fontSize:14, marginTop:10}}>Rp. 25.000</Text>
        </View>
      </ActionSheet>
    </View>
  );
}



const TabB = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#fff'}}>
      <View style={{backgroundColor:'#fff'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('InformasiDetail')}>
          <View style={{paddingLeft: 15, marginTop: 15, paddingRight: 15}}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/s2.jpg')}
            />
            <Text style={styles.title}>Promo pupuk akhir tahun 2020</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('InformasiDetail')}>
          <View style={{paddingLeft: 15, marginTop: 15, paddingRight: 15}}>
            <Image
              style={styles.image}
              source={require('../../../assets/images/s1.png')}
            />
            <Text style={styles.title}>Promo pupuk akhir tahun 2020</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const TabC = ({navigation}) => {
  return (
    <Gallery/>
  );
}




const Tab = createMaterialTopTabNavigator();
export default function TopTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 12, fontWeight:'bold'},
        style: {backgroundColor: '#ffffff',},
        activeTintColor: '#444444',
        indicatorStyle: {
          height: 2,
          backgroundColor: '#444444',
        },
      }}>
      <Tab.Screen name="DAFTAR MENU" component={TabA} />
      <Tab.Screen name="PROMO" component={TabB} />
      <Tab.Screen name="GALERI" component={TabC} />
    </Tab.Navigator>
  );
}



const styles = StyleSheet.create({
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: '#444444',
        paddingVertical: 12,
        paddingHorizontal: 15,
        backgroundColor: '#f9f9f9',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
      image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
});

