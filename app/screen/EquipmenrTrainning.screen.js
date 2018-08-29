import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity
} from "react-native";
import {Checkbox} from "react-native-material-ui";
import InlineImage from "../components/InlineImage";
import RNPickerSelect from "react-native-picker-select";
import MyToolBar from "../components/MyToolBar";

import Item from "../db/EquipData";

const Realm = require("realm");

export default class EquipmenrTrainning extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      saveData: [],
      PickerValueHolder: "",
      checked: false,
      equipmentData: "",

      favColor: "",
      items: [
        {
          label: "Red",
          value: "red"
        },
        {
          label: "Orange",
          value: "orange"
        },
        {
          label: "Blue",
          value: "blue"
        }
      ]
    };
  }

  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  handleBackButtonClick() {
    if (this.state.saveData != undefined && this.state.saveData.length > 0) {
      Alert.alert(
        "Alert",
        "Are you sure,Your data might lost.",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: () => {
              this.props.navigation.goBack();
              return true;
            }
          }
        ],
        { cancelable: true }
      );
      return true;
    } else {
      this.props.navigation.goBack();
      return true;
    }
  }

  GetSelectedPickerItem = () => {
    Alert.alert(this.state.PickerValueHolder);
  };

  nextSreen = () => {
    // if (this.state.saveData != undefined && this.state.saveData.length > 0) {
    const { navigate } = this.props.navigation;
    navigate("Summary", { sccanData: this.state.saveData });
    // } else {
    //   Alert.alert("Alert", "No data for Submit.");
    // }
  };

  returnData(equip) {
    this.setState({ equipmentData: equip });
    this.setState({ checked: false });
  }

  fetchData = () => {
    const { navigate } = this.props.navigation;
    navigate("ScanScreen", { returnData: this.returnData.bind(this) });
    this.setState({ equipmentData: "" });
    this.setState({ checked: false });
  };

  resetScreen = () => {
    Alert.alert(
      "Reset",
      "Are you sure,Your data might lost.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => this.clearEnterData() }
      ],
      { cancelable: true }
    );
  };

  clearEnterData = () => {
    this.setState({ equipmentData: "" });
    this.setState({ checked: false });
  };

  saveDataToLocal = () => {
    if (
      this.state.equipmentData != undefined &&
      this.state.equipmentData != ""
    ) {
      const eq = "" + Math.floor(Math.random() * 10000) + 1;

      Realm.open(Item)
        .then(realm => {
          realm.write(() => {
            realm.create("Item", {
              // equipmentNo: this.state.equipmentData.equipmentNo,
              equipmentNo: eq,
              description: this.state.equipmentData.description,
              maintenancePlant: this.state.equipmentData.maintenancePlant,
              currentStatus: this.state.equipmentData.currentStatus,
              nextStatus: this.state.equipmentData.nextStatus
            });
          });
          const obj = this.state.equipmentData;
          this.setState({
            saveData: [...this.state.saveData, obj]
          });
          this.setState({ equipmentData: "" });
          this.setState({ checked: false });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      Alert.alert("Alert", "No data for save.");
    }
  };

  render() {
    return (
      <View style={styleME.wrapper}>
        <MyToolBar {...this.props} header="Equipment Tracking"/>
       
        <View style={styleME.componentContainer}>
          <View style={styleME.wrapper111}>
            <ScrollView>
              <View style={styleME.childWrapper}>
                <Text style={styleME.textHeaderStyle}>
                  Equipment (Scanned QR Code ){" "}
                </Text>
                <View style={styleME.childWrapper1}>
                  <Text style={styleME.textStyle1}>
                    {this.state.equipmentData.equipmentNo}
                  </Text>
                  <TouchableOpacity onPress={() => this.fetchData()}>
                    <InlineImage
                      style={styleME.image}
                      resizeMode="contain"
                      source={require("../images/camera_ic.png")}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styleME.lineStyle} />
              </View>

              <View style={styleME.childWrapper}>
                <Text style={styleME.textHeaderStyle}>Equipment Number </Text>
                <Text style={styleME.textStyle}>
                  {this.state.equipmentData.equipmentNo}
                </Text>
                <View style={styleME.lineStyle} />
              </View>
              <View style={styleME.childWrapper}>
                <Text style={styleME.textHeaderStyle}>Description </Text>
                <Text style={styleME.textStyle}>
                  {this.state.equipmentData.description}
                </Text>
                <View style={styleME.lineStyle} />
              </View>
              <View style={styleME.childWrapper}>
                <Text style={styleME.textHeaderStyle}>Maintenance Plant </Text>
                <Text style={styleME.textStyle}>
                  {this.state.equipmentData.maintenancePlant}
                </Text>
                <View style={styleME.lineStyle} />
              </View>
              <View style={styleME.childWrapper}>
                <Text style={styleME.textHeaderStyle}>Current Status </Text>
                <Text style={styleME.textStyle}>
                  {this.state.equipmentData.currentStatus}
                </Text>
                <View style={styleME.lineStyle} />
              </View>
              <View style={styleME.childWrapper}>
                <Text style={styleME.textHeaderStyle}>Next Status</Text>
                {/* <View style={styleME.childWrapper}> */}
                <RNPickerSelect
                  items={this.state.items}
                  placeholder={{
                    label: "",
                    value: null
                  }}
                  onValueChange={value => {
                    this.setState({
                      favColor: value
                    });
                  }}
                />
                {/* </View> */}
                {/* <View style={styleME.lineStyle} /> */}
              </View>
              <View>
                <Checkbox
                  label="Set Status Not Overhauled"
                  checked={this.state.checked}
                  value="Value"
                  onCheck={checked => this.setState({ checked })}
                />
              </View>
              <View style={styleME.childWrapper1}>
                <TouchableOpacity
                  style={[
                    styleME.buttonSaveStyles,
                    { backgroundColor: "#43425D" }
                  ]}
                  onPress={() => this.saveDataToLocal()}
                >
                  <Text style={styleME.buttonTextStyle}>SAVE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styleME.buttonSaveStyles,
                    { backgroundColor: "#3B86FF" }
                  ]}
                  onPress={() => this.resetScreen()}
                >
                  <Text style={styleME.buttonTextStyle}>RESET</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styleME.buttonSaveStyles,
                    { backgroundColor: "#009789" }
                  ]}
                  onPress={() => this.nextSreen()}
                >
                  <Text style={styleME.buttonTextStyle}>SUBMIT</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styleME = StyleSheet.create({
  content: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 3,
    borderWidth: 1,
    height: null,
    width: null,
    borderColor: "black"
  },
  arrow: {
    backgroundColor: "white",
    borderColor: "white",
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  background: {
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  componentContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#F0F0F7"
  },
  imgbg: {
    width: 30,
    height: 30,
    marginRight: 10
  },

  lineStyle: {
    borderWidth: 0.5,
    borderColor: "#A9AAB0",
    marginTop: 5
  },
  wrapper111: {
    margin: 10,
    width: null,
    height: null,
    backgroundColor: "#ffffff"
  },
  childWrapper: {
    margin: 10,
    width: null,
    height: null,
    backgroundColor: "#ffffff"
  },
  childWrapper1: {
    alignSelf: "flex-end",
    flexDirection: "row",
    width: null,
    height: null,
    backgroundColor: "#ffffff"
  },
  textStyle: {
    fontSize: 18,
    color: "#43425D",
    fontWeight: "normal",
    borderColor: "#A9AAB0",
    padding: 5
  },
  popupTextStyle: {
    fontSize: 18,
    color: "#43425D",
    fontWeight: "bold",
    borderColor: "#A9AAB0",
    padding: 5
  },
  textStyle1: {
    flex: 1,
    width: null,
    height: null,
    fontSize: 18,
    color: "#43425D",
    fontWeight: "normal",
    borderColor: "#A9AAB0",
    padding: 5
  },

  textHeaderStyle: {
    fontSize: 15,
    color: "#A9AAB0",
    fontWeight: "normal"
  },

  image: {
    width: 20,
    height: 10
  },
  buttonSaveStyles: {
    flex: 1,
    height: 50,
    width: null,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  buttonLogoutStyles: {
    height: 40,
    width: 150,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },

  buttonTextStyle: {
    fontSize: 18,
    color: "white",
    fontWeight: "normal",
    padding: 5
  }
});
