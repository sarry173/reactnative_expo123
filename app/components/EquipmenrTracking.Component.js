import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, BackHandler, Picker, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Checkbox } from 'react-native-material-ui';

import InlineImage from '../components/InlineImage'
import Summary from '../screen/Summary.Screen'
import ScanScreen from '../components/ScanScreen.Component'

export default class EquipmenrTrainningComponet extends Component {

    constructor(props) {
        super(props)
        this.state = {
            PickerValueHolder: '',
            checked: false,
            equipmentNo: '',
            description: '',
            maintenancePlant: '',
            currentStatus: '',
            nextStatus: '',
        }
    }

    myCallback = (dataFromChild) => {
        this.setState({ listDataFromChild: dataFromChild });
    }

    GetSelectedPickerItem = () => {

        Alert.alert(this.state.PickerValueHolder);
    }

    nextSreen = () => {
        const { navigate } = this.props.navigation;
        navigate('Summary')
    }

    onSelect = data => {
        this.setState(data);
      };

    fetchData = () => {
        const { navigate } = this.props.navigation;
        navigate('ScanScreen', { onSelect: this.equipmentNo })
        this.setState({ equipmentNo: 'ewewe' })
        this.setState({ description: 'example where it uses states for dynamic changing of ' })
        this.setState({ maintenancePlant: 'ddffd' })
        this.setState({ currentStatus: 'ghgh' })
        this.setState({ nextStatus: 'sdsdsdsdsddsdsd' })
        this.setState({ checked: false })
    }

    resetSreen = () => {
        Alert.alert(
            'Reset',
            'Are you sure,Your data might lost.',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => this.clearEneterData() },
            ],
            { cancelable: true }
        )
    }

    clearEneterData = () => {
        this.setState({ equipmentNo: '' })
        this.setState({ description: '' })
        this.setState({ maintenancePlant: '' })
        this.setState({ currentStatus: '' })
        this.setState({ nextStatus: '' })
        this.setState({ checked: false })
    }

    render() {
        return (
            <View style={styleME.wrapper}>
                <ScrollView>

                    <View style={styleME.childWrapper}>
                        <Text style={styleME.textHeaderStyle}>Equipment (Scanned QR Code )  </Text>
                        <View style={styleME.childWrapper1}>
                            <Text style={styleME.textStyle1}>{this.state.equipmentNo}</Text>
                            <TouchableOpacity onPress={() => this.fetchData()}>
                                <InlineImage
                                    style={styleME.image}
                                    resizeMode='contain'
                                    source={require('../images/camera_ic.png')}
                                />
                            </TouchableOpacity>

                        </View>
                        <View style={styleME.lineStyle} />
                    </View>

                    <View style={styleME.childWrapper}>
                        <Text style={styleME.textHeaderStyle}>Equipment Number </Text>
                        <Text style={styleME.textStyle}>{this.state.equipmentNo}</Text>
                        <View style={styleME.lineStyle} />
                    </View>
                    <View style={styleME.childWrapper}>
                        <Text style={styleME.textHeaderStyle}>Description </Text>
                        <Text style={styleME.textStyle}>{this.state.description}</Text>
                        <View style={styleME.lineStyle} />
                    </View>
                    <View style={styleME.childWrapper}>
                        <Text style={styleME.textHeaderStyle}>Maintenance Plant </Text>
                        <Text style={styleME.textStyle}>{this.state.maintenancePlant}</Text>
                        <View style={styleME.lineStyle} />
                    </View>
                    <View style={styleME.childWrapper}>
                        <Text style={styleME.textHeaderStyle}>Current Status </Text>
                        <Text style={styleME.textStyle}>{this.state.currentStatus}</Text>
                        <View style={styleME.lineStyle} />
                    </View>
                    <View style={styleME.childWrapper}>
                        <Text style={styleME.textHeaderStyle}>Next Status</Text>
                        <View style={styleME.textStyle}>
                            <Picker style={styleME.textStyle}
                                selectedValue={this.state.PickerValueHolder}
                                onValueChange={(itemValue, itemIndex) => this.setState({ PickerValueHolder: itemValue })} >
                                <Picker.Item label="Next Status" value="React Native" />
                                <Picker.Item label="Next Status" value="Java" />
                                <Picker.Item label="Next Status" value="Html" />
                                <Picker.Item label="Next Status" value="Php" />
                                <Picker.Item label="Next Status" value="C++" />
                                <Picker.Item label="Next Status" value="JavaScript" />
                            </Picker>
                        </View>
                        <View style={styleME.lineStyle} />
                    </View>
                    <View>
                        <Checkbox
                            label="Set Status Not Overhauled"
                            checked={this.state.checked}
                            value="Value"
                            onCheck={checked => this.setState({ checked })} />
                    </View>
                    <View style={styleME.childWrapper1}>
                        <TouchableOpacity style={[styleME.buttonSaveStyles, { backgroundColor: '#43425D' }]}>
                            <Text style={styleME.buttonTextStyle} >SAVE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styleME.buttonSaveStyles, { backgroundColor: '#3B86FF' }]} onPress={() => this.resetSreen()}>
                            <Text style={styleME.buttonTextStyle}  >RESET</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styleME.buttonSaveStyles, { backgroundColor: '#009789' }]} onPress={() => this.nextSreen()}>
                            <Text style={styleME.buttonTextStyle} >SUBMIT</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View >

        );
    }
}

const styleME = StyleSheet.create({
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#A9AAB0',
        marginTop: 5,
    },
    wrapper: {
        margin: 10,
        width: null,
        height: null,
        backgroundColor: '#ffffff',
    },
    childWrapper: {
        margin: 10,
        width: null,
        height: null,
        backgroundColor: '#ffffff',
    },
    childWrapper1: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        width: null,
        height: null,
        backgroundColor: '#ffffff',
    },
    textStyle: {
        fontSize: 18,
        color: '#43425D',
        fontWeight: 'normal',
        borderColor: '#A9AAB0',
        padding: 5,
    },
    textStyle1: {
        flex: 1,
        width: null,
        height: null,
        fontSize: 18,
        color: '#43425D',
        fontWeight: 'normal',
        borderColor: '#A9AAB0',
        padding: 5,
    },


    textHeaderStyle: {
        fontSize: 15,
        color: '#A9AAB0',
        fontWeight: 'normal',
    },

    image: {
        width: 20,
        height: 10,

    },
    buttonSaveStyles: {
        flex: 1,
        height: 50,
        width: null,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },


    buttonTextStyle: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'normal',
        padding: 5,
    },
});