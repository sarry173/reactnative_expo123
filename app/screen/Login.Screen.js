import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ImageBackground,
    BackHandler
} from 'react-native';
import LoginComponent from '../components/Login.Component';
import { StackNavigator } from 'react-navigation';

export default class Login extends Component {

    constructor(props) {
        super(props)
    }
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }
    backPressed = () => {
        BackHandler.exitApp()

        return true;
    }
    render() {
        return ( 
            <View style = { style.imageStyle } >
            <LoginComponent {...this.props }/> 
            </View >
        );
    }

}

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageStyle: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: '#F0F0F7',
    },
    logoStyle: {
        width: 200
    }

})