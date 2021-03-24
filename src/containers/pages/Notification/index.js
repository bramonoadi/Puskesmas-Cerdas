import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';

export default function index() {
  return (
    <ScrollView style={{padding: 15, backgroundColor: '#f9f9f9'}}>
      <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />

      <View style={styles.containers}>
          <View style={{flexDirection:'row', marginBottom:5}}>
        <Icon color="#308DB0" name="bell" type="font-awesome-5" size={12} />
        <Text style={styles.datetime}>24 Maret 2021 | 12:35</Text>
        </View>
        <Text style={styles.statusnormal}>
          Reservasi di Puskesmas Depok Berhasil
        </Text>
        <Text style={styles.descriptiontext}>
          Anda mendapatkan No Antrian 12, pada hari Senin, 28 Maret 2021 untuk
          Poli Gigi dengan Dokter Dr. Rahman Suprapto di Puskesmas Condongcatur.
        </Text>
      </View>

      <View style={styles.containers}>
      <View style={{flexDirection:'row', marginBottom:5}}>
      <Icon color="#308DB0" name="bell" type="font-awesome-5" size={12} />
        <Text style={styles.datetime}>24 Maret 2021 | 12:35</Text>
        </View>
        <Text style={styles.statusfail}>
          Maaf nomor antrian sudah terlewati
        </Text>
        <Text style={styles.descriptiontext}>
          Maaf Nomor Antrian 12, pada hari Senin, 28 Maret 2021 untuk Poli Gigi
          dengan Dokter Dr. Rahman Suprapto di Puskesmas Condongcatur telah
          terlewati, Anda harus mengulang pendaftaran antrian baru atau hubungi
          staff Poli yang bersangkutan. Pastikan lain waktu Anda tidak terlambat
          datang.
        </Text>
      </View>

      <View style={styles.containers}>
      <View style={{flexDirection:'row', marginBottom:5}}>
      <Icon color="#308DB0" name="bell" type="font-awesome-5" size={12} />
        <Text style={styles.datetime}>24 Maret 2021 | 12:35</Text>
        </View>
        <Text style={styles.statuswaiting}>
          Tinggal 5 Antrian lagi selanjutnya Anda
        </Text>
        <Text style={styles.descriptiontext}>
          Segera datang dan menunggu di depan Poliklinik karena saat ini antrian
          berjalan telah mencapai nomor 7, No Antrian Anda adalah 12, pada hari
          Senin, 28 Maret 2021 untuk Poli Gigi dengan Dokter Dr. Rahman Suprapto
          di Puskesmas Condongcatur.
        </Text>
      </View>

      <View style={styles.containers}>
      <View style={{flexDirection:'row', marginBottom:5}}>
      <Icon color="#308DB0" name="bell" type="font-awesome-5" size={12} />
        <Text style={styles.datetime}>24 Maret 2021 | 12:35</Text>
        </View>
        <Text style={styles.statussuccess}>
          Reservasi dan pemeriksaan selesai, Terima kasih
        </Text>
        <Text style={styles.descriptiontext}>
          Terima kasih untuk No Antrian 12, pada hari Senin, 28 Maret 2021 untuk
          Poli Gigi dengan Dokter Dr. Rahman Suprapto di Puskesmas Condongcatur
          telah selesai pemeriksaan, semoga lekas sembuh dan sehat seperti sedia
          kala. Jangan lupa selalu gunakan masker kemanapun Anda berpergian.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containers: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
    paddingVertical: 10,
  },
  datetime: {
    fontFamily: 'Poppins-Regular',
    color: '#999',
    fontSize: 11,
    paddingLeft:6,
  },
  statusnormal: {
    fontFamily: 'Poppins-Bold',
    color: '#444',
    fontSize: 14,
  },
  statusfail: {
    fontFamily: 'Poppins-Bold',
    color: '#cc0000',
    fontSize: 14,
  },
  statuswaiting: {
    fontFamily: 'Poppins-Bold',
    color: '#FF8800',
    fontSize: 14,
  },
  statussuccess: {
    fontFamily: 'Poppins-Bold',
    color: '#247C1E',
    fontSize: 14,
  },
  descriptiontext: {
    fontFamily: 'Poppins-Regular',
    color: '#777',
    fontSize: 12,
  },
});
