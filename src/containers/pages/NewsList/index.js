import React from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#f9f9f9'}}>
        <View style={{paddingLeft: 15, marginTop: 15, paddingRight: 15}}>
          <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('NewsDetail')}>
            <View>
              <View style={{marginBottom: 15}}>
                <Image
                  style={styles.image}
                  source={require('../../../assets/images/3.png')}
                />
                <Text style={styles.title}>
                  Tidur teratur untuk menjaga stamina optimal
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View>
            <View style={{marginBottom: 15}}>
              <Image
                style={styles.image}
                source={require('../../../assets/images/2.jpg')}
              />
              <Text style={styles.title}>
                Masker non-medis, bahaya dan resikonya..
              </Text>
            </View>
          </View>

          <View>
            <View style={{marginBottom: 15}}>
              <Image
                style={styles.image}
                source={require('../../../assets/images/7.jpg')}
              />
              <Text style={styles.title}>
                Mengenal buah-buahan untuk daya tahan tubuh
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default NewsList;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#444444',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 0.5,
    borderColor: '#ddd',
  },
  image: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
