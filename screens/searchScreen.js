import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../components/header';

export default class SearchScreen extends React.Component{
    render(){
        return(
            <View>
                <Header />
                <Text style={hStyles.text}>SEARCH SCREEN</Text>
            </View>
        )
    }
}
var hStyles = StyleSheet.create({
    text:{
        fontSize:40,
        color:'black',
        alignSelf:'center',
        marginTop:200
    }
})