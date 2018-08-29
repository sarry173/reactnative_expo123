import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  Image,
  ListView,
  TouchableOpacity
} from "react-native";
import { Card, Checkbox } from "react-native-material-ui";
import Item from "../db/EquipData";
import MyToolBar from "../components/MyToolBar";

const Realm = require("realm");

var check_folder = [];
const listData = [];
export default class Summary extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      selectedData: [],
      check: [],
      dataSource: ds.cloneWithRows(listData)
      // _checked: true,
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
    this.getDataFromDb();
  }

  async getDataFromDb() {
    Realm.open(Item)
      .then(realm => {
        listData = realm.objects("Item");
        console.log(listData);
        // if (!this.state.isUnmounted) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(listData)
        });
        //   }
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );

    check_folder = [];
    this.setState({ check: check_folder });
  }

  handleBackButtonClick() {
    check_folder = [];
    this.setState({ check: check_folder });
    this.props.navigation.goBack(null);
    return true;
  }

  onPressRemoveItem = (item, sectionID) => {
    const obj = item;
    this.setState({
      selectedData: [...this.state.selectedData, obj]
    });
    if (!check_folder[sectionID]) {
      check_folder[sectionID] = true;
      this.setState({ check: check_folder });
    } else {
      check_folder[sectionID] = false;
      this.setState({ check: check_folder });
    }
    console.log(check_folder);
  };

  deleteSelectedData() {
    for (let index = 0; index < this.state.selectedData.length; index++) {
      const element = this.state.selectedData[index];
      Realm.open(Item)
      .then(realm => {
        realm.write(() => {
          realm.delete(element);
        });
      })
      .catch(error => {
        console.log(error);
      });

    }
    check_folder = [];
    this.setState({ check: check_folder });
    this.getDataFromDb();
  }

  render() {
    return (
      <View style={styleME.wrapper}>
        <MyToolBar {...this.props} header="Summary" />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />

        <View style={styleME.childWrapper1}>
          <TouchableOpacity
            onPress={() => this.deleteSelectedData()}
            style={[styleME.buttonSubmitStyles, { backgroundColor: "red" }]}
          >
            <Text style={styleME.buttonTextStyle}>DELETE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styleME.buttonSubmitStyles, { backgroundColor: "#009789" }]}
          >
            <Text style={styleME.buttonTextStyle}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _renderRow(rowData, rowID, sectionID) {
    return (
      <Card onPress={() => this.onPressRemoveItem(rowData, sectionID)}>
        <View style={styleME.listWrapper}>
          <View style={styleME.listWrapper1}>
            <View style={styleME.checkWrapper}>
              <Checkbox checked={this.state.check[sectionID]} />
            </View>
            <View style={styleME.listWrapper2}>
              <View style={styleME.listTextWrapper}>
                <View style={styleME.leftContainer}>
                  <Text style={styleME.textHeaderStyle} numberOfLines={1}>
                    Equipment No.
                  </Text>
                </View>
                <View style={styleME.rightContainer}>
                  <Text style={styleME.listTextRightWrapper} numberOfLines={1}>
                    {rowData.equipmentNo}
                  </Text>
                </View>
              </View>
              <View style={[styleME.listTextWrapper, { marginTop: 5 }]}>
                <View style={styleME.leftContainer}>
                  <Text style={styleME.textHeaderStyle} numberOfLines={1}>
                    Status
                  </Text>
                </View>
                <View style={styleME.rightContainer}>
                  <Text style={styleME.listTextRightWrapper} numberOfLines={1}>
                    {rowData.currentStatus}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Card>
    );
  }
}

const styleME = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F0F0F7"
  },
  listWrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 15
  },
  listWrapper1: {
    height: null,
    width: null,
    flexDirection: "row"
  },
  listWrapper2: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 2
  },

  listTextWrapper: {
    flexDirection: "row",
    height: null,
    width: null,
    backgroundColor: "#FFFFFF"
  },
  listTextRightWrapper: {
    flexDirection: "row",
    height: null,
    width: null,
    fontSize: 18,
    color: "#43425D",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "normal"
  },
  textHeaderStyle: {
    fontSize: 18,
    color: "#A9AAB0",
    fontWeight: "normal"
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
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },

  buttonSubmitStyles: {
    flex: 1,
    height: 50,
    width: null,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  buttonTextStyle: {
    fontSize: 18,
    color: "white",
    fontWeight: "normal",
    padding: 5
  },
  childWrapper1: {
    alignSelf: "flex-end",
    flexDirection: "row",
    width: null,
    height: null,
    backgroundColor: "#ffffff"
  },

  checkWrapper: {
    width: 30,
    height: 30,
    alignItems: "center"
  }
});
