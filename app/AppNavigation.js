import React, {Component} from 'react';
import { primaryColor,primaryColorDark,primaryAccent } from './stores/config.store'

import {StackNavigator} from 'react-navigation';

import Splash from '../app/screen/Splash';
import Login from '../app/screen/Login.Screen';
import HomeScreen from '../app/screen/Home.Screen';
import EquipmenrTrainning from '../app/screen/EquipmenrTrainning.screen';
import Summary from '../app/screen/Summary.Screen';
import ScanScreen from '../app/components/ScanScreen.Component'
import OverallStatusReport from "../app/screen/StatusReport/OverallStatusReport.Screen";


const AppNavigator = StackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  },

  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      // title: 'Login'
    }
  },

  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },

  EquipmenrTrainning: {
    screen: EquipmenrTrainning,
    navigationOptions: {
      header: null,
    }
  },
  Summary: {
    screen: Summary,
    navigationOptions: {
      header: null,
    }
  },

  ScanScreen: {
    screen: ScanScreen,
    navigationOptions: {
      header: null,
    }
  },

  OverallStatusReport: {
    screen: OverallStatusReport,
    navigationOptions: {
      header: null,
    }
  },

}, {initialRouteName: 'Splash'});

export default AppNavigator;