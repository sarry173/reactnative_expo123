import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  BackHandler,
  FlatList,
  Image,
  TouchableHighlight
} from "react-native";
import { StackNavigator } from "react-navigation";
import {
  primaryColor,
  primaryColorDark,
  primaryAccent
} from "../stores/config.store";



import EquipmenrTrainning from "../screen/EquipmenrTrainning.screen";
import OverallStatusReport from "../screen/StatusReport/OverallStatusReport.Screen";

import MyToolBar from "../components/MyToolBar";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    Alert.alert(
      "Exit App",
      "Do you want to exit?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => BackHandler.exitApp()
        }
      ],
      { cancelable: false }
    );

    return true;
  };

  renderItem({ item, index }) {
    return (
      <TouchableHighlight
        style={[styles.itemContainer, { backgroundColor: item.code }]}
        onPress={() => this.nextSreen(index)}
      >
        <View>
          <Image
            source={require("../images/ril.png")}
            resizeMode="contain"
            style={styles.logoStyle}
          />
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }

    
 


  render() {
    gridData = [
      { name: "Equipment Tracking", code: "#1abc9c" },
      { name: "Overall Status Report", code: "#1abc9c" },
      { name: "Progress \nReport", code: "#1abc9c" }
    ];
    
    nextSreen = (index) => {
      const { navigate } = this.props.navigation;
      if(index==0)
      {
        navigate("EquipmenrTrainning");
      }
      else if(index==1)
      {
        navigate("OverallStatusReport");
      }
      
     
    };
    return (
      <View>
        <MyToolBar {...this.props} header="Home" bool="true" />
        <FlatList
          contentContainerStyle={[styles.list]}
          data={gridData}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 5,
    minWidth: 170,
    maxWidth: 223,
    height: 150,
    maxHeight: 304,
    backgroundColor: "#CCC"
  },
  itemContainer: {
    minWidth: 150,
    maxWidth: 150,
    height: 150,
    justifyContent: "flex-end",
    borderRadius: 5,
    margin: 10,
    padding: 10
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null
  },
  logoStyle: {
    width: 50,
    height: 50
  },
  list: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600"
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff"
  }
});
