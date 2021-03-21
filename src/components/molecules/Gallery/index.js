import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { ScrollView } from 'react-native-gesture-handler';

const App = () => {
  const [imageuri, setImageuri] = useState('');
  const [
    modalVisibleStatus, setModalVisibleStatus
  ] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    let items = Array.apply(null, Array(15)).map((v, i) => {
      return {
        id: i,
        src: 'https://unsplash.it/400/400?image=' + (i + 1)
      };
    });
    setDataSource(items);
  }, []);

  const showModalFunction = (visible, imageURL) => {
    //handler to handle the click on image of Grid
    //and close button on modal
    setImageuri(imageURL);
    setModalVisibleStatus(visible);
  };

  return (
    <ScrollView style={styles.container}>
      {modalVisibleStatus ? (
        <Modal
          transparent={false}
          animationType={'fade'}
          visible={modalVisibleStatus}
          onRequestClose={() => {
            showModalFunction(!modalVisibleStatus, '');
          }}>
          <View style={styles.modelStyle}>
            <FastImage
              style={styles.fullImageStyle}
              source={{uri: imageuri}}
              resizeMode={
                FastImage.resizeMode.contain
              }
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.closeButtonStyle}
              onPress={() => {
                showModalFunction(!modalVisibleStatus, '');
              }}>
              <FastImage
                source={{
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/close.png',
                }}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      ) : (
        <View style={styles.container}>
          <FlatList
          scrollEnabled={false}
            data={dataSource}
            renderItem={({item}) => (
              <View style={styles.imageContainerStyle}>
                <TouchableOpacity
                  key={item.id}
                  style={{flex: 1}}
                  onPress={() => {
                    showModalFunction(true, item.src);
                  }}>
                  <FastImage
                    style={styles.imageStyle}
                    source={{
                      uri: item.src,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </ScrollView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal:10,
    paddingVertical:10,
  },
  imageContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 2,
  },
  imageStyle: {
    height: 120,
    width: '100%',
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    paddingHorizontal:10,
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 25,
    right: 25,
    position: 'absolute',
  },
});