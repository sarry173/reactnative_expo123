import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  ScrollView,
  Alert,
  TouchableOpacity
} from "react-native";
import {Checkbox} from "react-native-material-ui";
import MyToolBar from "../../components/MyToolBar"

export default class OverallStatusReport extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      checked: true,
      equipmentData: "",
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
    this.props.navigation.goBack();
    return true;
  }

  GetSelectedPickerItem = () => {
    Alert.alert(this.state.PickerValueHolder);
  };

  render() {
    return (
      <View style={styleME.wrapper}>
        <MyToolBar {...this.props} header="Overall Status Report"/>
        <View style={styleME.componentContainer}>
          <View style={styleME.wrapper111}>
            <ScrollView>
              <View style={styleME.childWrapper}>
                <Text style={styleME.textHeaderStyle}>Planning Plant</Text>
                <Text style={styleME.textStyle}>
                Planning Plant
                </Text>
                <View style={styleME.lineStyle} />
              </View>
              <View style={styleME.childWrapper}>
                <Text style={styleME.textHeaderStyle}>Maintenance Plant </Text>
                <Text style={styleME.textStyle}>
                Maintenance Plant
                </Text>
                <View style={styleME.lineStyle} />
              </View>
              <View style={styleME.childWrapper}>
                <Text style={styleME.textHeaderStyle}>Planner Group</Text>
                <Text style={styleME.textStyle}>
                Planner Group
                </Text>
                <View style={styleME.lineStyle} />
              </View>
              
              <View>
                <Checkbox
                  label="Plant Report"
                  checked={this.state.checked}
                  value="Value"
                  onCheck={checked => this.setState({ checked })}
                />
              </View>
              <View style={styleME.childWrapper1}>
                <TouchableOpacity
                  style={[
                    styleME.buttonSaveStyles,
                    { backgroundColor: "#3B86FF" }
                  ]}
                //   onPress={() => this.resetScreen()}
                >
                  <Text style={styleME.buttonTextStyle}>RESET</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styleME.buttonSaveStyles,
                    { backgroundColor: "#43425D" }
                  ]}
                //   onPress={() => this.nextSreen()}
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
