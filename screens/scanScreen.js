import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Header from '../components/header';

export default class ScanScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      hasCameraPermissions: null,
      scanned: false,
      scannedData: '',
      buttonState: 'normal',
    };
  }

  getCameraPerms = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermissions: status === 'granted',
      buttonState: 'clicked',
    });
  };

  handleBarCodeScanned = async ({ type, data }) => {
    this.setState({
      scanned: true,
      scannedData: data,
      buttonState: 'normal',
    });
  };
  render() {
    var hasCameraPermissions = this.state.hasCameraPermissions;
    var scanned = this.state.scanned;
    var buttonState = this.state.buttonState;

    if (buttonState === 'clicked' && hasCameraPermissions) {
      return (
          <View>
            <Header />
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            </View>
      );

    } else if (buttonState === 'normal') {
      return (
        <View>
            <Header />
            <TouchableOpacity
                style={scanStyle.buttonS}
                onPress={this.getCameraPerms}>
                <Text style={scanStyle.buttonTextS}>SCAN QR CODE</Text>
            </TouchableOpacity>
            <Text style={scanStyle.normalText}>
                {hasCameraPermissions === true
                ? 'OUTPUT = '+this.state.scannedData
                : 'Request Camera Permissions'}
            </Text>
        </View>
      );
    }
  }
}

var scanStyle = StyleSheet.create({
  buttonS: {
    backgroundColor: '#70fa83',
    width: 200,
    height: 60,
    borderRadius: 10,
    marginTop: 100,
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonTextS: {
    fontSize: 20,
    marginTop: 15,
  },
  normalText: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
    marginTop: 50,
  },

});
