import React, {Component} from 'react';
import {View, Text, StyleSheet,ImageBackground} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from './Login.Screen'

export default class Splash extends Component
{
    constructor(props)
    {
        super(props)
    }

    componentWillMount() {
        const {navigate} = this.props.navigation;
        setTimeout(() => {
           navigate('Login')
            
        }, 2000)

    }

    render()
    {
        return (
            <ImageBackground source={require('../images/splash.png')} resizeMode= 'stretch' style={styleME.imageStyle}/>
        );
    }
}

const styleME = StyleSheet.create({

    wrapper: {
        backgroundColor: '#1abc9c',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textStyles: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold'
    },
    imageStyle: {
        flex: 1,
        width: null,
        height: null,
    },

});
