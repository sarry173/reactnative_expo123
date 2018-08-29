import React, { Component } from "react";
import { View, StyleSheet, Image,Text, TouchableOpacity } from "react-native";

import { Toolbar, COLOR, Checkbox } from "react-native-material-ui";
import { Popover, PopoverController } from "react-native-modal-popover";

export default class MyToolBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    if(!this.props.bool)
    {
      return (
        <PopoverController>
          {({
            openPopover,
            closePopover,
            popoverVisible,
            setPopoverAnchor,
            popoverAnchorRect
          }) => (
            <React.Fragment>
                       <Toolbar
                leftElement="arrow-back"
                onLeftElementPress={() => this.props.navigation.goBack()}
                centerElement={this.props.header}
                rightElement={
                  <TouchableOpacity ref={setPopoverAnchor} onPress={openPopover}>
                    <Image
                      source={require("../images/default_person.png")}
                      style={styleME.imgBg}
                    />
                  </TouchableOpacity>
                }
                style={{
                  container: { backgroundColor: COLOR.white },
                  leftElement: { color: COLOR.black },
                  titleText: { color: COLOR.black },
                  rightElement: { color: COLOR.black }
                }}
              />
              <Popover
                contentStyle={styleME.content}
                // arrowStyle={styleME.arrow}
                placement="bottom"
                backgroundStyle={styleME.background}
                visible={popoverVisible}
                onClose={closePopover}
                fromRect={popoverAnchorRect}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View>
                  <Text style={styleME.popupTextStyle}>User Name</Text>
                  <Text style={styleME.textStyle}>User@ril.com</Text>
                  <TouchableOpacity
                    style={[
                      styleME.buttonLogoutStyles,
                      { backgroundColor: "#43425D" }
                    ]}
                    // onPress={() => this.saveDataToLocal()}
                  >
                    <Text style={styleME.textStyle1}>LOGOUT</Text>
                  </TouchableOpacity>
                </View>
              </Popover>
            </React.Fragment>
          )}
        </PopoverController>
      );
    }
    else
    {
      return (
        <PopoverController>
          {({
            openPopover,
            closePopover,
            popoverVisible,
            setPopoverAnchor,
            popoverAnchorRect
          }) => (
            <React.Fragment>
                       <Toolbar
                onLeftElementPress={() => this.props.navigation.goBack()}
                centerElement={this.props.header}
                rightElement={
                  <TouchableOpacity ref={setPopoverAnchor} onPress={openPopover}>
                    <Image
                      source={require("../images/default_person.png")}
                      style={styleME.imgBg}
                    />
                  </TouchableOpacity>
                }
                style={{
                  container: { backgroundColor: COLOR.white },
                  leftElement: { color: COLOR.black },
                  titleText: { color: COLOR.black },
                  rightElement: { color: COLOR.black }
                }}
              />
              <Popover
                contentStyle={styleME.content}
                // arrowStyle={styleME.arrow}
                placement="bottom"
                backgroundStyle={styleME.background}
                visible={popoverVisible}
                onClose={closePopover}
                fromRect={popoverAnchorRect}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View>
                  <Text style={styleME.popupTextStyle}>User Name</Text>
                  <Text style={styleME.textStyle}>User@ril.com</Text>
                  <TouchableOpacity
                    style={[
                      styleME.buttonLogoutStyles,
                      { backgroundColor: "#43425D" }
                    ]}
                    // onPress={() => this.saveDataToLocal()}
                  >
                    <Text style={styleME.textStyle1}>LOGOUT</Text>
                  </TouchableOpacity>
                </View>
              </Popover>
            </React.Fragment>
          )}
        </PopoverController>
      );
    }

    
  }
}

const styleME = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F0F0F7"
  },

  imgBg: {
    width: 30,
    height: 30,
    marginRight: 10
  },
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
  buttonLogoutStyles: {
    height: 40,
    width: 150,
    margin: 10,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  textStyle: {
    fontSize: 18,
    color: "#43425D",
    fontWeight: "normal",
    justifyContent: "center",
    borderColor: "#A9AAB0",
    padding: 5
  },
  textStyle1: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "normal",
    justifyContent: "center",
    borderColor: "#A9AAB0",
    padding: 5
  },
  popupTextStyle: {
    fontSize: 18,
    color: "#43425D",
    justifyContent: "center",
    fontWeight: "bold",
    borderColor: "#A9AAB0",
    padding: 5
  }
});
