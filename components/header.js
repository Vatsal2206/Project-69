import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View>
        <View style={headStyles.container}>
          <Text style={headStyles.header}>QR CODE SCANNER</Text>
        </View>
        <View>
          <Image
            source={require('../assets/qrcode.jpg')}
            style={headStyles.img}
          />
        </View>
      </View>
    );
  }
}

const headStyles = StyleSheet.create({
  header: {
    fontSize: 35,
    alignSelf: 'center',
    color: '#e694ff',
  },
  container: {
    backgroundColor: '#630bb0',
    borderRadius: 50,
  },
  img:{
    height:100,
    width:200,
    marginTop:50,
    alignSelf:'center'
  }
});
