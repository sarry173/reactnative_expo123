import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Button,
    Alert,
    Image,
    TouchableOpacity,
    NetInfo,
    BackHandler,
    Keyboard,
    ScrollView,

} from 'react-native';

import {
    StackNavigator
} from 'react-navigation';
import HomeScreen from '../screen/Home.Screen';

import {
    primaryColor,
    primaryColorDark,
    primaryAccent
} from '../stores/config.store'

export default class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            username: '',
            password: ''
        }
    }


    onLogin = () => {
        Keyboard.dismiss()
        const {
            navigate
        } = this.props.navigation;
        navigate('HomeScreen')
        // const {
        //     username
        // } = this.state;
        // const {
        //     password
        // } = this.state;
        // if (username == '' || password == '') {
        //     Alert.alert("Alert", "Please Enter Username and Password.");
        // } else {
        //     console.log(username);
        //     // const {
        //     //     navigate
        //     // } = this.props.navigation;
        //     // navigate('HomeScreen')
        // }

    }

    render() {
        return (
            <View style={style.wrapper}>
                <Image source={require('../images/ril.png')}  resizeMode='contain' style={style.logoStyle} />
                <Text style={style.textStylesHeader}> Welcome  </Text>
                <Text style={style.textStylesHeader1}> Please login to your account. </Text>
                <TextInput style={style.textInputStyles}
                    autoCapitalize='words'
                    placeholder='Username'
                    returnKeyType='next'
                    underlineColorAndroid='transparent'
                    onChangeText={
                        (text) => this.setState({
                            username: text.trim()
                        })
                    } />
                <TextInput style={style.textInputStyles}
                    autoCapitalize='words'
                    placeholder='Password'
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={
                        (text) => this.setState({
                            password: text.trim()
                        })
                    } />

                <TouchableOpacity style={style.buttonStyles}
                    onPress={this.onLogin} >
                    <Text style={style.textStyles} > Sign In </Text>
                </TouchableOpacity>
            </View>


        );
    }
}

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: '#FFFFFF',
    },
    textStyles: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },

    textStylesHeader: {
        fontSize: 18,
        color: '#43425D',
        fontWeight: 'bold',
        marginBottom: 10
    },
    textStylesHeader1: {
        fontSize: 18,
        color: '#A9AAB0',
        fontWeight: 'bold',
        marginBottom: 20
    },
    textInputStyles: {
        width: '80%',
        color: '#43425D',
        borderBottomWidth: 1,
        fontSize: 18,
        paddingLeft: 10,
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        paddingBottom: 10,
    },
    buttonStyles: {
        height: 50,
        width: 200,
        marginBottom: 10,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 35,
        alignItems: 'center',
        backgroundColor: '#43425D',
        justifyContent: 'center',
        borderRadius: 5
    },
    logoStyle: {
        width: 70,
        height: 70,
        marginBottom: 10
    }
})