/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import AppNavigation from "./app/AppNavigation";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NetInfo, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";

import {
  primaryColor,
  primaryColorDark,
  primaryAccent
} from "./app/stores/config.store";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f"
  }
};

console.disableYellowBox = true;
export default class App extends Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <SafeAreaView style={styles.container} forceInset={{ bottom: "never" }}>
          <AppNavigation />
          <StatusBar backgroundColor={primaryColorDark} />
        </SafeAreaView>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: primaryColorDark,
  },
});
