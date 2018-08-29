
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Alert,
  Dimensions,
  BackHandler,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import QRCodeScanner from 'react-native-qrcode-scanner';
export default class ScanScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // scanner: null,
    }
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

  onSuccess(e) {
    // Alert.alert(e.data);
    // this.scanner.reactivate()
    // const myObjStr = JSON.stringify(e.data);
    const { navigation } = this.props;
    console.log(e.data);
    this.props.navigation.state.params.returnData( JSON.parse(e.data));
    this.props.navigation.goBack();
  }


  render() {
    return (
      <QRCodeScanner
        // ref={(node) => { this.scanner = node }}
        onRead={this.onSuccess.bind(this)}
        topViewStyle={styles.zeroContainer}
        bottomViewStyle={styles.zeroContainer}
        cameraStyle={styles.cameraContainer}

      />
    );
  }
}

const styles = StyleSheet.create({
  cameraContainer: {
    height: Dimensions.get('window').height,
  },

  zeroContainer: {
    height: 0,
    flex: 0,
  },

  

});
