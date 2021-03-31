import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

export default class Tentang extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://pastha.com/infocovid'}}
        style={{marginTop: 0}}
        javaScriptEnabled={true}
        renderLoading={this.ActivityIndicatorLoadingView}
    startInLoadingState={true}
      />
    );
  }
}

const styles = StyleSheet.create({});
